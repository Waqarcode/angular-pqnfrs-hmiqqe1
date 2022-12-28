import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApicService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<any>('https://randomuser.me/api/portraits/men/75.jpg');
  }
}
