import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAllData } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  private readonly http = inject(HttpClient);

  public getUserThreads(): Observable<IAllData> {
    return this.http.get<IAllData>('/api/threads');
  }
}
