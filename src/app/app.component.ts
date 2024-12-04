import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  providers: [LoginService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BasicAngularApp';
}
