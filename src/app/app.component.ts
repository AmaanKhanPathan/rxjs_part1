import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title : any = 'angular'
  
  data1 : any;
  data2 : any;
  data3 : any;

  constructor(private _http : HttpClient){}

  ngOnInit(): void {
    let call1 = this._http.get('https://jsonplaceholder.typicode.com/posts');
    let call2 = this._http.get('https://jsonplaceholder.typicode.com/users');
    let call3 = this._http.get('https://jsonplaceholder.typicode.com/photos')

    forkJoin([call1, call2]).subscribe(results=>{
      this.data1 = results[0];
      this.data2 = results[1];
      this.data3 = results[0];
      console.log(this.data1, this.data2, this.data3);
      
    })
  }
}
