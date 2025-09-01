import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuitableApartmentsService } from '../../service/suitable-apartments.service';
import { ChatService, Message } from '../../service/chat.service';

@Component({
  selector: 'app-speak-with-bot',
  imports: [FormsModule, CommonModule],
  templateUrl: './speak-with-bot.component.html',
  styleUrl: './speak-with-bot.component.scss'
})
export class SpeakWithBotComponent {

  messages: Message[] = [];
  value: any = '';
  router = inject(Router);


  constructor(public chatService: ChatService, private apartmentService: SuitableApartmentsService) { }


  readonly dialog = inject(MatDialog)

  refresh(): void {

    // Refresh logic here
  }

  close(): void {
    this.dialog.closeAll()
  }

  // ngOnInit() {
  //   this.chatService.conversation.subscribe((val) => {
  //     this.messages = this.messages.concat(val);
  //   });
  // }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);

      const objMsg = val.find(m => typeof m.content === 'object'
                                && m.content
                                && 'apartments' in m.content);
      if (objMsg) {
        const apts = (objMsg.content as { apartments: any[] }).apartments || [];
        this.apartmentService.setApartments(apts); // ✅ שמירה ישירה לשירות
      }
    });
  }




  // extractApartmentsFromMessages(): any[] {
  //   const matchMessage = this.messages.find(m =>
  //     typeof m.content === 'object' &&
  //     m.content !== null &&
  //     'apartments' in m.content
  //   );
  //   console.log("match");
  //   console.log(matchMessage);
  //   console.log((matchMessage?.content as { apartments: any[] })?.apartments || []);
  //   return (matchMessage?.content as { apartments: any[] })?.apartments || [];
  // }

  extractApartmentsFromMessages(): any[] {
    const matchMessage = this.messages.find(
      m => typeof m.content === 'object' && m.content !== null && 'apartments' in m.content
    );
    console.log("match");
    console.log(matchMessage);
    console.log((matchMessage?.content as { apartments: any[] })?.apartments || []);
    return (matchMessage?.content as { apartments: any[] })?.apartments || [];
  }

  shouldShowApartmentsButton(): boolean {
    return this.apartmentService.hasApartments(); // ✅ במקום startsWith וכו'
  }

  continueToApartments() {
    this.router.navigate(['/suitable-apartments']);
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  //לשאול את המורה אם כפתור זה מיותר
  continue(path: string) {
    this.router.navigate([path]);
  }
}


