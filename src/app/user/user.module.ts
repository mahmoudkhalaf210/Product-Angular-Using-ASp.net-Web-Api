import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AllClientComponent } from './all-client/all-client.component'
import { AllUserService } from './all-user.service';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    AllClientComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AllUserService]
})
export class UserModule { }
