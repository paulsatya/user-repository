import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersRepositoryService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }
}
