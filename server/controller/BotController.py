# controller/BotController.py
from flask import Blueprint, request, jsonify
from service.code_bot import UserSession, ConversationLog

bot_blueprint = Blueprint("bot", __name__, url_prefix="/api/bot")

# מאגר סשנים לפי userId (בזיכרון)
user_sessions: dict[str, UserSession] = {}


def get_session(user_id: str) -> UserSession:
    """
    מאחזר/יוצר סשן לשימוש בבוט עבור userId נתון.
    מאתחל גם את last_bot_question ואת ה־log אם חסרים.
    """
    session = user_sessions.get(user_id)
    if session is None:
        log = ConversationLog()
        session = UserSession(log)
        session.last_bot_question = "שלום! מה חשוב לך בדירה?"  # ברירת מחדל לשאלה הראשונה
        user_sessions[user_id] = session
    else:
        # שמירה על תאימות – אם חסרים שדות, נוסיף
        if not hasattr(session, "log") or session.log is None:
            session.log = ConversationLog()
        if not hasattr(session, "last_bot_question") or session.last_bot_question is None:
            session.last_bot_question = "שלום! מה חשוב לך בדירה?"
    return session


@bot_blueprint.route("/message", methods=["POST"])
def bot_message():
    """
    מקבל טקסט מהלקוח ומחזיר תגובת בוט.
    גוף הבקשה (JSON):
    {
      "text": "שלום",
      "userId": "u1"
    }
    """
    data = request.get_json(silent=True) or {}
    user_input = data.get("text", "").strip()
    user_id = (data.get("userId") or "default").strip()  # fallback כדי שלא יפול

    if not user_input:
        return jsonify({"error": "שדה 'text' חובה"}), 400

    session = get_session(user_id)

    # **הנה השורה שביקשת** – מוסיפים ללוג את שאלת הבוט האחרונה ואת תשובת המשתמש
    session.log.add_entry(session.last_bot_question, user_input)

    # מפעילים את מנוע השיחה
    bot_reply = session.process_input(user_input)

    # נעדכן את השאלה האחרונה (לסבב הבא)
    session.last_bot_question = bot_reply

    return jsonify({
        "reply": bot_reply,
        "log": session.log.get_all()  # שימושי לדיבוג; אפשר להסיר בפרודקשן
    })


@bot_blueprint.route("/log/<user_id>", methods=["GET"])
def get_log(user_id: str):
    """
    החזרת כל הלוג של המשתמש (לעזרה בדיבוג מהלקוח/פוסטמן)
    """
    session = get_session(user_id)
    return jsonify(session.log.get_all())


@bot_blueprint.route("/reset/<user_id>", methods=["POST"])
def reset_session(user_id: str):
    """
    איפוס סשן של משתמש מסוים
    """
    if user_id in user_sessions:
        del user_sessions[user_id]
    return jsonify({"message": f"session for '{user_id}' reset"})


###########################
# server/controller/BotController.py
from flask import Blueprint, request, jsonify
from service.code_bot import ConversationLog, UserSession  # נתיב הייבוא בהתאם לפרויקט

bot_bp = Blueprint("bot", __name__)

# מומלץ: Session/State בהתאם לאפליקציה שלך. כאן – מופע פר שיחה (פשוט לדוגמה).
_log = ConversationLog()
_session = UserSession(_log)

@bot_bp.route("/api/bot/message", methods=["POST"])
def bot_message():
    try:
        payload = request.get_json(force=True, silent=False) or {}
        text = payload.get("text", "").strip()

        # מעבד את הקלט – מחזיר טקסט המשך שאלות או "מעולה!..."
        reply_text = _session.process_input(text)

        # אם המשתמש ביקש לסיים/להציג – נחזיר את כל הדירות המתאימות JSON מלא
        if reply_text.startswith("מעולה"):
            result = _session.find_matching_apartment()   # dict: {message, apartments}
            return jsonify(result), 200

        # אחרת – נחזיר רק את הטקסט
        return jsonify({"message": reply_text}), 200

    except Exception as e:
        # לוג עזר
        print("bot_message error:", e)
        return jsonify({"message": "אירעה שגיאה", "error": str(e)}), 500
