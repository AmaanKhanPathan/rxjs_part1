import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { UserSubjectService } from 'src/app/service/user-subject.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, OnDestroy {
  username! : string;
  unSubscribe$ : Subject<void> = new Subject<void>()

  constructor(private _userservice : UserSubjectService) { }
 

  ngOnInit(): void {
    this._userservice.userSubject$
            .subscribe(res => this.username=res)
            const interval$ = interval(1000);
            interval$
            .pipe(
              takeUntil(this.unSubscribe$)
            ).subscribe(
              res => console.log(`Getting value for first subscription and value is ${res}`)              
            )

            interval$
            .pipe(
              takeUntil(this.unSubscribe$)
            ).subscribe(
              res => console.log(`Getting value for second subscription and value is ${res}`)              
            )
            interval$
            .pipe(
              takeUntil(this.unSubscribe$)
            ).subscribe(
              res => console.log(`Getting value for third subscription and value is ${res}`)          
            )
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete()
  }

}
