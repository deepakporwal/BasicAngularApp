import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-reactive-programming',
  imports: [],
  templateUrl: './reactive-programming.component.html',
  styleUrl: './reactive-programming.component.css'
})
export class ReactiveProgrammingComponent implements OnInit {
  
  users : Users[] = [];
  constructor(private loginService: LoginService){

  }
  ngOnInit(): void {
    // calling the get call directly as normal response
    // this.loginService.getUsers().subscribe((result)=>{
    // });

    // return the response as : getUsers2() : Observable<Users[]> from service in the desired format
    this.loginService.getUsers2().subscribe(result=>{
      this.users = result;
      console.table(this.users);
    })
  }

}
