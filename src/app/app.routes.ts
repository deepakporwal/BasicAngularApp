import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveProgrammingComponent } from './reactive-programming/reactive-programming.component';

export const routes: Routes = [
    {
        path : '',component :LoginComponent
    },
    {
        path : 'home',component :HomeComponent
    },
    {
        path : 'reactive-programming',component :ReactiveProgrammingComponent
    },
];
