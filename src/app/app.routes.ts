// import { Routes } from '@angular/router';

// export const routes: Routes = [];

//----

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { ProfileCrudComponent } from './profile-crud/profile-crud.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ExternalHomeComponent } from './external-home/external-home.component';

export const routes: Routes = [
  { path: 'users', component: UserCrudComponent, canActivate: [AuthGuard] },
  { path: 'profiles', component: ProfileCrudComponent, canActivate: [AuthGuard] },
  { path: 'external-home', component: ExternalHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserCrudComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/external-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
