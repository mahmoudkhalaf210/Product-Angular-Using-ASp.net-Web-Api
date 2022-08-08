import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent} from './login/login.component';
import { AllClientComponent } from '../user/all-client/all-client.component'
import { UserDetailsComponent } from '../user/user-details/user-details.component'

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'login', component: LoginComponent},
  { path: 'allclient', component: AllClientComponent},
  { path: 'user-details/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
