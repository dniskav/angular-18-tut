import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { JsonPipe, CommonModule } from '@angular/common';
import { SocketComponent } from "../../shared/socket/socket.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, JsonPipe, SocketComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  dataService = inject(DataService);
  public data$ = this.dataService.dataSubject.asObservable();

  getDataSignal() {
    this.dataService.fetchData();
  }
}
