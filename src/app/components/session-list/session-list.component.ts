import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  userId = '12345'; // Reemplazar con el ID del usuario
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.sessionService.getUserSessions(this.userId).subscribe((data) => this.sessions = data);
  }

  startSession(): void {
    this.sessionService.startSession(this.userId, 'Nueva actividad').subscribe(() => this.loadSessions());
  }

  endSession(sessionId: string): void {
    this.sessionService.endSession(sessionId).subscribe(() => this.loadSessions());
  }
}
