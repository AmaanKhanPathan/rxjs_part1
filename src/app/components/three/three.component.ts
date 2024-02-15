import { Component, OnInit } from '@angular/core';
import { UserSubjectService } from 'src/app/service/user-subject.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  username! : string

  constructor(private _userservice : UserSubjectService) { }

  ngOnInit(): void {
    this._userservice.userSubject$
            .subscribe(res => this.username = res);
  }

}
