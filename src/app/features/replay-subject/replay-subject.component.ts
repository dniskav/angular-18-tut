import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { messageInterface } from '../../common/interfaces/message.interface';
import { DataService } from '../../core/services/data.service';
import { SocketComponent } from "../../shared/socket/socket.component";

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [CommonModule, SocketComponent],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {
  dataService = inject(DataService);
  public data$ = this.dataService.dataBehaviorSubject.asObservable();
  
  getDataSignal() {
    this.dataService.fetchData();
  }
}
