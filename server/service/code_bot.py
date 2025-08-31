import re
import json
import os

from controller.ApartmentController import get_apartments



# from hebmorph import Analyzer
# import spacy

def spacy():
    nlp = spacy.load("he_model")
    doc = nlp("יש לי שתי מיטות וחניה")
    for token in doc:
        print(f"text: {token.text}, lemma: {token.lemma_}")



# שלב 1: מיפוי מילות מפתח לשדות וערכים
HEBREW_NUMBERS = {
     "אחת": 1,
     "אחד": 1,
     "שניים": 2,
     "שתיים": 2,
     "שתי": 2,
     "שלוש": 3,
     "שלושה": 3,
     "ארבע": 4,
     "ארבעה": 4,
     "חמש": 5,
     "חמישה": 5,
     "שש": 6,
     "שישה": 6,
     "שבע": 7,
     "שבעה": 7,
     "שמונה": 8,
     "תשע": 9,
     "תשעה": 9,
     "עשר": 10,
     "עשרה": 10
 }

apartments_db = [
     {
         "location": 'צפון',
         "city": "חיפה",
         "price": 750,
         "parking": True,
         "pool": False,
         "elevator": True,
         "beds": 2,
         "yard_features": ["ערסל", "מנגל", "טרמפולינה"],
         "balcony": True,
         "accessible": False,
         "mamad": True,
     },
     {
         "location": 'צפון',
         "city": "עכו",
         "price": 1200,
         "parking": False,
         "pool": True,
         "elevator": False,
         "beds": 3,
         "yard_features": ["ערסל", "נדנדה", "טרמפולינה"],
         "balcony": True,
         "accessible": False,
         "mamad": True,
     },
     {
         "location": 'דרום',
         "city": "ערד",
         "price": 980,
         "parking": True,
         "pool": True,
         "elevator": True,
         "beds": 1,
         "yard_features": ["ערסל", "מנגל"],
         "balcony": True,
         "accessible": False,
         "mamad": True,
     },
     {
         "location": 'מרכז',
         "city": "הרצליה",
         "price": 650,
         "parking": False,
         "pool": False,
         "elevator": True,
         "beds": 2,
         "yard_features": ["ערסל", "טרמפולינה"],
         "balcony": True,
         "accessible": False,
         "mamad": True,
     }
 ]

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILE_PATH = os.path.join(BASE_DIR, "data", "keywords.json")


def readData():
     try:
         with open(FILE_PATH, "r", encoding="utf-8") as f:
             data = json.load(f)
         return data
     except Exception as e:
         print(e)


KEYWORDS = readData()


# analyzer = Analyzer()


# def normalize_word(word):
#    result = analyzer.analyze(word)
#    if result:
#        return result[0]['lemma']
#    return word


class ConversationLog:
     def __init__(self):
         self.entries = []  # רשימת אובייקטים המכילים שאלה, תשובה ואינדקס

     def add_entry(self, bot_question: str, user_answer: str):
         index = len(self.entries)
         entry = {
             "index": index,
             "bot": bot_question,
             "user": user_answer
         }
         self.entries.append(entry)

     def get_all(self):
         return self.entries

     def get_by_index(self, index: int):
         if 0 <= index < len(self.entries):
             return self.entries[index]
         return None


# class QueryParser:
#      """
#      מנתח שאילתות משתמש וממלא ערכים לשדות מוגדרים מראש (slots)
#      באמצעות מנוע מבוסס מילות מפתח.
#      """
#
#      def __init__(self):
#          """
#          מאתחל את מבנה הסלוטים.
#          """
#          self.slots = {
#              "location": None,
#              "price": None,
#              "parking": None,
#              "pool": None,
#              "elevator": None,
#              "beds": None,
#              "yard_features": [],
#              "city": None,
#              "balcony": None,
#              "accessible": None,
#              "mamad": None
#          }
class QueryParser:
    def __init__(self, log: ConversationLog):
        self.slots = {
            "location": None,
            "price": None,
            "parking": None,
            "pool": None,
            "elevator": None,
            "beds": None,
            "yard_features": [],
            "city": None,
            "balcony": None,
            "accessible": None,
            "mamad": None
        }
        self.log = log


    def has_number(self, text):
         return bool(re.search(r'\d+', text))

    def extract_number(self, text):
         match = re.search(r'\d+', text)
         return int(match.group()) if match else None

    def parse(self, text: str):
         """
        מקבל טקסט משתמש, ממפה לפי מילים, ומעדכן סלוטים בהתאם.
        :param text: טקסט של המשתמש
        """
         #log = ConversationLog()
         entries = self.log.get_all()
         for key, (slot, value) in KEYWORDS.items():
             if self.has_number(text) and key in entries[(len(entries) - 1)]['bot']:
                 self.slots[slot] = self.extract_number(text)
             if key in entries[(len(entries) - 1)]['bot'] and key == 'מתקני חצר':
                 features = self._extract_yard_features(text)
                 if features:
                     self.slots[slot].extend(features)
             if key in entries[(len(entries) - 1)]['bot'] and text == 'כן':
                 self.slots[slot] = True
             if key in entries[(len(entries) - 1)]['bot'] and text == 'לא':
                 self.slots[slot] = False
             if key in text:
                 if value == "number":
                     number = self._extract_number_after(key, text)
                     if number is None:
                         number = self.extract_number_from_hebrew(text)
                     if number:
                         self.slots[slot] = number
                 elif value == "max_number":
                     number = self._extract_number_after(key, text)
                     if number:
                         self.slots[slot] = number
                 elif value == "list":
                     features = self._extract_yard_features(text)
                     if features:
                         self.slots[slot].extend(features)
                 elif value == "text" and key != text:
                     # מניעת עדכון 'אזור' כאשר יש אזכור מפורש של עיר אחרי "אזור"
                     if key == 'אזור':
                         for k, (s, v) in KEYWORDS.items():
                             if s == 'city' and k in text:
                                 break  # לא נעדכן 'אזור'
                         else:
                             self.slots[slot] = self._extract_text_after(key, text)
                     else:
                         self.slots[slot] = self._extract_text_after(key, text)
                         self.slots[slot] = key

                 # elif value == "text" and key != text and key != 'אזור':
                 #    self.slots[slot] = self._extract_text_after(key, text)
                 #    if key != 'אזור':
                 #        self.slots[slot] = key
                 elif value == "text" and key == text:
                     self.slots[slot] = text
                 else:
                     self.slots[slot] = value
         slots = self.get_slots()

     # def _extract_number_after(self, word, text):
     #    """
     #    מחלץ מספר שמופיע מיד אחרי מילה מסוימת.
     #    :param word: מילת מפתח
     #    :param text: טקסט מלא
     #    :return: מספר שלם או None
     #    """
     #    pattern = rf"{word}\s*(\d+)"
     #    match = re.search(pattern, text)
     #    return int(match.group(1)) if match else None

    def _extract_number_after(self, word, text):
         """
         מחלץ מספר שמופיע מיד אחרי או לפני מילה מסוימת.
         :param word: מילת מפתח
         :param text: טקסט מלא
         :return: מספר שלם או None
         """
         # קודם ננסה לחפש אחרי
         pattern_after = rf"{word}\s*(\d+)"
         match = re.search(pattern_after, text)
         if match:
             return int(match.group(1))
         # אם לא נמצא, ננסה לחפש לפני
         pattern_before = rf"(\d+)\s*{word}"
         match = re.search(pattern_before, text)
         if match:
             return int(match.group(1))
         return None

    def remove_prefix_letters(self, word, key):
         PREFIXES = ["ב", "ל", "כ", "מ", "ו"]
         while len(word) > 1 and word[0] in PREFIXES:
             word = word[1:]
         return word

    def extract_number_from_hebrew(self, text):
         for word in text.split():
             if word.isdigit():
                 return int(word)
             if word in HEBREW_NUMBERS:
                 return HEBREW_NUMBERS[word]
         return None

    def _extract_text_after(self, word, text):
         """
         מחלץ טקסט שמופיע אחרי מילה מסוימת.
         :param word: מילת מפתח
         :param text: טקסט מלא
         :return: מחרוזת או None
         """
         pattern = rf"{word}\s+(\S+)"
         match = re.search(pattern, text)
         return match.group(1) if match else None

    def _extract_yard_features(self, text):
         KNOWN_FEATURES = ["ערסל", "טרמפולינה", "נדנדה", "פינת ישיבה", "מנגל"]
         return [f for f in KNOWN_FEATURES if f in text]

    def get_slots(self):
         """
         מחזיר את מצב הסלוטים הנוכחי.
         :return: dict של כל הסלוטים
         """
         return self.slots


class UserSession:
     """
     מנהל שיחה עם משתמש – מזהה אילו שדות חסרים, שואל בהתאם,
     ומעדכן את המצב לפי תשובות.
     """

     def __init__(self, log: ConversationLog):
         """
         מאתחל את הפרסר ואת מצב השיחה.
         """
         self.log = log
         self.parser = QueryParser(self.log)
         self.apartments = self.load_apartments()
         print(self.apartments)


     def remove_prefix_letters(self, word):
         """
         מסיר אותיות מוספיות מהתחלת מילה אם קיימות.
         לדוגמה: ולבית -> לבית -> בית
         """
         prefixes = {'ו', 'ב', 'ל', 'כ'}
         while len(word) > 2 and word[0] in prefixes:
             word = word[1:]
         return word

     def process_input(self, user_input: str) -> str:
         """
         מעבד קלט מהמשתמש, מעדכן סלוטים ומחזיר שאלה מתאימה.
         :param user_input: קלט טקסטואלי מהמשתמש
         :return: שאלה או הודעה להשלמת חיפוש
         """
         user_input = user_input.strip()
         self.parser.parse(user_input)

         for word in user_input.split():
             clean_word = word.strip('!,.')  # מנקה סימני פיסוק מהסוף
             clean_word = self.remove_prefix_letters(clean_word)  # הסרת תחיליות
             if clean_word in ["סיים", "מספיק", "תראה", "זהו", "שלח", "תוצאות", 'די', 'הצג', 'לראות', 'נמאס']:
                 return "מעולה! הנה הדירות שמצאתי עבורך:"
         return self.get_next_question()

     def get_missing_slots(self):
         """
         מחזיר רשימת סלוטים שעדיין לא מולאו.
         :return: רשימת שמות שדות
         """
         return [k for k, v in self.parser.slots.items() if v is None or v == []]

     def get_next_question(self):
         """
         מחליט על השאלה הבאה לפי סלוטים חסרים.
         :return: טקסט שאלה או הודעת סיום
         """
         missing = self.get_missing_slots()
         questions = {
             "location": "באיזה אזור אתה מחפש?",
             "city": "האם יש עיר מסוימת שחשובה לך?",
             "price": "מה התקציב שלך?",
             "parking": "האם אתה צריך חניה?",
             "pool": "האם אתה מעוניין בבריכה?",
             "elevator": "האם אתה צריך מעלית?",
             "beds": "כמה מיטות דרושות לך?",
             "yard_features": "האם דרושים לך מתקני חצר? אם כן פרט איזה",
             "balcony": "האם אתה רוצה מרפסת?",
             "accessible": "האם דרושה לך נגישות?",
             "mamad": "האם אתה מחפש דירה עם ממד?",
         }
         suffix = " (אם סיימת, כתוב 'סיים' או 'תראה לי את הדירות' כדי לעצור את השאלות)"
         if missing and len(missing) <= 4:
             return questions[missing[0]] + suffix
         elif missing:
             return questions[missing[0]]
         return "מעולה! יש לי את כל המידע – אפשר לבצע חיפוש."


     # def load_apartments(self):
     #     response = get_apartments()
     #     return json.loads(response.get_data())

     def load_apartments(self):
         return get_apartments()  # מחזיר list[dict] בלי Flask


     def find_matching_apartment(self):
         matching = []
         for apt in self.apartments:
             match = True
             for key, value in self.parser.slots.items():
                 if value is None:
                     continue  # התעלם מסלוטים לא ממולאים
                 # if key not in apt:
                 #    match = False
                 #    break
                 elif key == "yard_features" and isinstance(value, bool) != True:
                     if not all(item in apt.get("yard_features", []) for item in value):
                         match = False
                 if type(value) in (int, float) and type(apt[key]) in (int, float):
                     # השוואת מספרים – כולל גבול עליון (למשל מחיר עד X)
                     if key == "price":
                         if apt[key] > value:
                             match = False
                             break
                     if key == "beds":
                         if apt[key] < value:
                             match = False
                             break
                 else:
                     if (value == True or value == False) and (value == True and apt[key] == False):
                         match = False
                         break
                     if value != True and value != False and apt[key] != value and value != [] and isinstance(value,
                                                                                                              list) != True:
                         match = False
                         break
             if match:
                 matching.append(apt)
         return matching



#
# # דוגמה להרצה מקומית
# if __name__ == "__main__":
#     session = UserSession()
#     index = 0
#     response = 'שלום לך! אני בוט הדירות יחד נמצא את הדירה המושלמת בתבל!!!'
#     print(response)
#     isFind = False
#     while not isFind:
#         user_input = input("משתמש: ")
#         log = ConversationLog()
#         log.add_entry(response, user_input)
#         response = session.process_input(user_input)
#         print("בוט:", response)
#         if response.startswith("מעולה"):
#             isFind = True
#             results = session.find_matching_apartment()
#             print(f' מצאתי {len(results)} דירות המתאימות לך!!!')
#             print(results)


if __name__ == "__main__":
   log = ConversationLog()
   session = UserSession(log)
   response = 'שלום לך! אני בוט הדירות יחד נמצא את הדירה המושלמת בתבל!!!'
   print(response)
   isFind = False
   while not isFind:
       user_input = input("משתמש: ")
       log.add_entry(response, user_input)
       response = session.process_input(user_input)
       print("בוט:", response)
       if response.startswith("מעולה"):
           isFind = True
           results = session.find_matching_apartment()
           print(f' מצאתי {len(results)} דירות המתאימות לך!!!')
           print(results)
