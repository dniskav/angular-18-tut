import { Routes } from '@angular/router';
import { SignalComponent } from './features/signal/signal.component';
import { SubjectComponent } from './features/subject/subject.component';
import { BehaviorSubjectComponent } from './features/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './features/replay-subject/replay-subject.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signal', pathMatch: 'full' },
  { path: 'signal', component: SignalComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: '**', redirectTo: 'signal' }
];
