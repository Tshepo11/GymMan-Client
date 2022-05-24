import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { ForgetPasswordComponent } from './components/account/forget-password/forget-password.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LeadsComponent } from './components/leads/leads.component';
import { UsersComponent } from './components/users/users.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot_password', component: ForgetPasswordComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'signUp', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
