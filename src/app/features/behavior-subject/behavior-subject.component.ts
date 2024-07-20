import { Component, inject, signal } from '@angular/core';
import { messageInterface } from '../../common/interfaces/message.interface';
import { DataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { SocketComponent } from "../../shared/socket/socket.component";

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [CommonModule, SocketComponent],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent {
  dataService = inject(DataService);
  public data$ = this.dataService.dataBehaviorSubject.asObservable();
  
  getDataSignal() {
    this.dataService.fetchData();
  }
}
