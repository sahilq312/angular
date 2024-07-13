import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputComponent } from './input/input.component';

export const routes: Routes = [
    {
        path : 'dashboard',
        component : DashboardComponent
    },
    {
        path : 'input',
        component : InputComponent
    }
];
