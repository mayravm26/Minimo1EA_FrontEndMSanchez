import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = 'http://localhost:3000/api/sessions';

  constructor(private http: HttpClient) {}

  startSession(userId: string, activityDescription: string): Observable<Session> {
    return this.http.post<Session>(`${this.apiUrl}/start`, { userId, activityDescription });
  }

  endSession(sessionId: string): Observable<Session> {
    return this.http.post<Session>(`${this.apiUrl}/end`, { sessionId });
  }

  getUserSessions(userId: string): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.apiUrl}/${userId}`);
  }
}
