import { Component, OnInit } from '@angular/core';
import { UserSubjectService } from 'src/app/service/user-subject.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  username ! : string

  constructor(private _userservice : UserSubjectService) { }

  ngOnInit(): void {
    this._userservice.userSubject$
            .subscribe(res => this.username = res)
  }

}
