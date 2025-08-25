import { Component, inject } from '@angular/core';
import {  ChatService, Message } from '../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-speak-with-bot',
  imports: [FormsModule,CommonModule],
  templateUrl: './speak-with-bot.component.html',
  styleUrl: './speak-with-bot.component.scss'
})
export class SpeakWithBotComponent {

  messages: Message[] = [];
  value :any= '';
  router = inject(Router); 
  
  constructor(public chatService: ChatService) { }


  readonly dialog = inject(MatDialog)

  refresh(): void {
    
    // Refresh logic here
  }

  close(): void {
    this.dialog.closeAll()
  }

  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  //לשאול את המורה אם כפתור זה מיותר
  continue(path:string) {
    this.router.navigate([path]);
 }
  

}
