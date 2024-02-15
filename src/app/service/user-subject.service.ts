import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectService {
  // userSubject : Subject<string> = new Subject<string>()
  private _userSubject: BehaviorSubject<string> = new BehaviorSubject<string>("July");
  public get userSubject(): BehaviorSubject<string> {
    return this._userSubject;
  }
  public set userSubject(value: BehaviorSubject<string>) {
    this._userSubject = value;
  }
  userSubject$ = this.userSubject.asObservable()
  

  constructor() { }
}
