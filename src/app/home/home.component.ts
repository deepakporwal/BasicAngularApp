import { Component, OnInit } from '@angular/core';
import { Appointments } from '../models/appointments';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    console.log('component initialzes');
  }
  
  componentName : string ='Home Component';
  appointments : Appointments[] = [];

  AddAppointment(){
    console.info('button clicked');
    localStorage.setItem("token","12345667834535435345");
    alert(this.appointments.length);
  }
}
