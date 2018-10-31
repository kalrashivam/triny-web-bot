import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from '../chat.service'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/scan'

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  constructor(private chat: ChatService) { }

  messages: Observable<Message[]>;
  formValue: string;

  ngOnInit() {
    console.log(this.chat.talk())
  }

}
