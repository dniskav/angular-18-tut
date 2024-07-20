import { messageInterface } from './../../common/interfaces/message.interface';
import { CommonModule } from '@angular/common';
import { Component, Output, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-socket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socket.component.html',
  styleUrl: './socket.component.css'
})
export class SocketComponent {
  @Output() messages: messageInterface[] = [];
  userSignal = signal<string>('');
  dataService = inject(DataService);
  dataSignal = this.dataService.dataSignal;
  websocketMessages: string[] = [];
  
  sendMessage(text: string) {
    const message: messageInterface = { user: this.user, message: text };
    this.dataService.sendMessage(message);
  }

  ngOnInit(): void {
    this.dataService.socket$.subscribe(message => {
      this.websocketMessages.push(message);
    });
  }
  
  get user() {
    return this.userSignal();
  }

  set user(event: any) {
    this.userSignal.set(event.target.value);
  }
}
