import { CommonModule, JsonPipe } from '@angular/common';
import { DataService } from './../../core/services/data.service';
import { Component, OnInit, inject, signal } from '@angular/core';
import { messageInterface } from '../../common/interfaces/message.interface';
import { SocketComponent } from "../../shared/socket/socket.component";

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, JsonPipe, SocketComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  dataService = inject(DataService);
  dataSignal = this.dataService.dataSignal;

  getDataSignal() {
    this.dataService.fetchData();
  }
}
