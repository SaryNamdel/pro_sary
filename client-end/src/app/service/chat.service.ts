// // import { Injectable } from '@angular/core';
// // import { Subject } from 'rxjs';

// // export class Message {
// //   constructor(public author: string, public content: string) {}
// // }
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ChatService {

// //   constructor() { }


// //   conversation = new Subject<Message[]>();

// //   messageMap :any= {
// //     "Hi": "Hello",
// //     "Who are you": "My name is Agular Bot",
// //     "What is Angular": "Angular is the best framework ever",
// //     default: "I can't understand. Can you please repeat"
// //   };

// //   getBotAnswer(msg: string) {
// //     const userMessage = new Message("user", msg);
// //     this.conversation.next([userMessage]);
// //     const botMessage = new Message("bot", this.getBotMessage(msg));
// //     setTimeout(() => {
// //       this.conversation.next([botMessage]);
// //     }, 1500);  }


// //   getBotMessage(question: string) {
// //     let answer = this.messageMap[question];
// //     return answer || this.messageMap["default"];
// //   }
// // }


// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../environments/environment';


// export class Message {
//   constructor(
//     public author: 'user' | 'bot',
//     public content: string | { message: string; apartments: any[] }
//   ) { }
// }

// interface BotRequest {
//   text: string;
//   userId?: string | number;
//   context?: any;
// }

// interface BotResponse {
//   reply: string;
//   results?: any[]; // כש"מסיימים" – את מקבלת כאן רשימת דירות
// }

// @Injectable({ providedIn: 'root' })
// export class ChatService {

//   conversation = new Subject<Message[]>();
//   private readonly api = `${environment.apiBase}/api/bot/message`; // לדוגמה: http://localhost:5000/api/bot/message

//   constructor(private http: HttpClient) { }

//   /** שולח הודעה לבוט ומזרים לשיחה גם את הודעת המשתמש וגם את תגובת הבוט */
//   getBotAnswer(msg: string, userId: string = 'web-client-1', context?: any) {
//     const userMessage = new Message('user', msg);
//     this.conversation.next([userMessage]);

//     const body: BotRequest = { text: msg, userId, context };
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//     this.http.post<BotResponse>(this.api, body, { headers })
//       .subscribe({
//         next: (res) => {
//           // const botMessage = new Message('bot', res.reply || '—');
//           // this.conversation.next([botMessage]);

//           // // אם תרצי להציג תוצאות (דירות) כשיש "סיום", אפשר להזרים הודעה נוספת:
//           // if (Array.isArray(res.results) && res.results.length) {
//           //   const summary = new Message('bot', `נמצאו ${res.results.length} תוצאות מתאימות.`);
//           //   this.conversation.next([summary]);
//           //   // כאן אפשר לשמור תוצאות ב־store/Service ולהפנות למסך הדירות
//           // }
//           // הודעה רגילה
//           this.conversation.next([new Message('bot', res.reply || '—')]);

//           // אם יש תוצאות – הזרמי הודעה מורחבת
//           if (Array.isArray(res.results) && res.results.length) {
//             const resultMessage = new Message('bot', {
//               message: `נמצאו ${res.results.length} תוצאות מתאימות.`,
//               apartments: res.results
//             });
//             this.conversation.next([resultMessage]);
//           }

//         },
//         error: (err) => {
//           const botMessage = new Message('bot', 'אירעה שגיאה בתקשורת עם השרת.');
//           this.conversation.next([botMessage]);
//           console.error(err);
//         }
//       });
//   }
// }



import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceBase } from './http-service.base';

export class Message {
  constructor(
    public author: 'user' | 'bot',
    public content: string | { message: string; apartments: any[] }
  ) {}
}

// מכסה גם צורת תשובה חדשה מהבוט ({message, apartments})
// וגם ישנה ({reply, results})
type BotResponseAny =
  | { message: string; apartments?: any[] }
  | { reply: string; results?: any[] }
  | any;

interface BotRequest {
  text: string;
  userId?: string | number;
  context?: any;
}

@Injectable({ providedIn: 'root' })
export class ChatService extends HttpServiceBase{

  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/apartments`;
    // return `${this.config.ips.servicePath}/apartments`
  }

  conversation = new Subject<Message[]>();

  // constructor(private http: HttpClient) {}

  // getBotAnswer(msg: string, userId: string = 'web-client-1', context?: any) {
  //   // הודעת המשתמש
  //   this.conversation.next([new Message('user', msg)]);

  //   const body: BotRequest = { text: msg, userId, context };
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   this.http.post<BotResponseAny>(this.api, body, { headers }).subscribe({
  //     next: (res) => {
  //       // טקסט להצגה בצ'אט
  //       const text =
  //         (res && (res as any).message) ??
  //         (res && (res as any).reply) ??
  //         '—';

  //       // דחיפת הודעת טקסט רגילה
  //       this.conversation.next([new Message('bot', text)]);

  //       // שליפת מערך הדירות – תומך גם apartments וגם results
  //       const apartments: any[] | undefined =
  //         (res && (res as any).apartments) ??
  //         (res && (res as any).results);

  //       // אם יש דירות – דוחפים הודעה נוספת שה־content שלה הוא אובייקט כולל apartments
  //       if (Array.isArray(apartments) && apartments.length) {
  //         this.conversation.next([
  //           new Message('bot', {
  //             message: `נמצאו ${apartments.length} תוצאות מתאימות.`,
  //             apartments,
  //           }),
  //         ]);
  //       }
  //     },
  //     error: (_err) => {
  //       this.conversation.next([new Message('bot', 'אירעה שגיאה בתקשורת עם השרת.')]);
  //       console.error(_err);
  //     },
  //   });
  // }

  getBotAnswer(msg: string, userId: string = 'web-client-1', context?: any) {
    // דוחפים את הודעת המשתמש
    this.conversation.next([new Message('user', msg)]);
  
    const body = { text: msg, userId, context };
    this.http.post<any>(this._serverUrl, body).subscribe({
      next: (res) => {
        const text =
          (res && res.message) ??
          (res && res.reply) ??
          '—';
  
        // נשלוף דירות לפי שני הפורמטים האפשריים
        const apartments: any[] | undefined =
          (res && res.apartments) ??
          (res && res.results);
  
        // פליטה אחת שמכילה גם טקסט וגם הודעת results (אם קיימים)
        const batch: Message[] = [ new Message('bot', text) ];
        if (Array.isArray(apartments) && apartments.length) {
          batch.push(new Message('bot', { message: `נמצאו ${apartments.length} תוצאות מתאימות.`, apartments }));
        }
        this.conversation.next(batch); // פליטה יחידה – מצמצם race/timing
  
        //  אופציונלי אבל מומלץ: שמירה ישירה ב־Service משותף (מונע תלות ב־find)
        // suitableApartmentsService.setApartments(apartments);  <-- ראו שלב 2
      },
      error: (_err) => {
        this.conversation.next([new Message('bot', 'אירעה שגיאה בתקשורת עם השרת.')]);
        console.error(_err);
      },
    });
  }
  
}

