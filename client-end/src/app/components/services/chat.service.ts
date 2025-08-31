// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// export class Message {
//   constructor(public author: string, public content: string) {}
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {

//   constructor() { }


//   conversation = new Subject<Message[]>();

//   messageMap :any= {
//     "Hi": "Hello",
//     "Who are you": "My name is Agular Bot",
//     "What is Angular": "Angular is the best framework ever",
//     default: "I can't understand. Can you please repeat"
//   };

//   getBotAnswer(msg: string) {
//     const userMessage = new Message("user", msg);
//     this.conversation.next([userMessage]);
//     const botMessage = new Message("bot", this.getBotMessage(msg));
//     setTimeout(() => {
//       this.conversation.next([botMessage]);
//     }, 1500);  }


//   getBotMessage(question: string) {
//     let answer = this.messageMap[question];
//     return answer || this.messageMap["default"];
//   }
// }


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


export class Message {
  constructor(public author: 'user' | 'bot', public content: string) {}
}

interface BotRequest {
  text: string;
  userId?: string | number;
  context?: any;
}

interface BotResponse {
  reply: string;
  results?: any[]; // כש"מסיימים" – את מקבלת כאן רשימת דירות
}

@Injectable({ providedIn: 'root' })
export class ChatService {

  conversation = new Subject<Message[]>();
  private readonly api = `${environment.apiBase}/api/bot/message`; // לדוגמה: http://localhost:5000/api/bot/message

  constructor(private http: HttpClient) {}

  /** שולח הודעה לבוט ומזרים לשיחה גם את הודעת המשתמש וגם את תגובת הבוט */
  getBotAnswer(msg: string, userId: string = 'web-client-1', context?: any) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);

    const body: BotRequest = { text: msg, userId, context };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<BotResponse>(this.api, body, { headers })
      .subscribe({
        next: (res) => {
          const botMessage = new Message('bot', res.reply || '—');
          this.conversation.next([botMessage]);

          // אם תרצי להציג תוצאות (דירות) כשיש "סיום", אפשר להזרים הודעה נוספת:
          if (Array.isArray(res.results) && res.results.length) {
            const summary = new Message('bot', `נמצאו ${res.results.length} תוצאות מתאימות.`);
            this.conversation.next([summary]);
            // כאן אפשר לשמור תוצאות ב־store/Service ולהפנות למסך הדירות
          }
        },
        error: (err) => {
          const botMessage = new Message('bot', 'אירעה שגיאה בתקשורת עם השרת.');
          this.conversation.next([botMessage]);
          console.error(err);
        }
      });
  }
}

