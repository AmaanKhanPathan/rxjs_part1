import { Component, OnInit } from '@angular/core';
import { UserSubjectService } from 'src/app/service/user-subject.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _userservice : UserSubjectService) { }

  ngOnInit(): void {
  }

  onAddUser(un:string){
    if(un){
      this._userservice.userSubject.next(un)
    }
  }

}
