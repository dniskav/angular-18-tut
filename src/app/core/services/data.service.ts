import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  private wsUrl = 'wss://cypress-even-denim.glitch.me/';
  private api$: Observable<any> = this.http.get(this.apiUrl);

  public dataSignal = signal(null);
  public dataSubject = new Subject<any>();
  public dataBehaviorSubject = new BehaviorSubject<any>(null);
  public dataReplaySubject = new ReplaySubject<any>(1);

  public socket$: WebSocketSubject<any>;


  constructor() {
    this.socket$ = new WebSocketSubject(this.wsUrl);
  }

  ngOnInit(): void {
    this.setOservables();
  }

  setOservables() {
    this.socket$.subscribe(
      (message) => {
        this.dataSignal.set(message);
        this.dataSubject.next(message);
        this.dataBehaviorSubject.next(message);
        this.dataReplaySubject.next(message);
      },
      (err) => console.error(err),
      () => console.info('completed'),
    );
  }

  fetchData() {
    this.api$.subscribe(data => {
      this.dataSignal.set(data);
      this.dataSubject.next(data);
      this.dataBehaviorSubject.next(data);
      this.dataReplaySubject.next(data);    
    })
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }
}
