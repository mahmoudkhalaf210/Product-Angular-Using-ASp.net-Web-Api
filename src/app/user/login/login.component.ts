import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllUserService } from '../all-user.service';
import { IUser } from '../iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // template driven form

  user = { userName: '', password: '' }

  users!: IUser[];

  userData?: IUser;

  // reactive from

  // userForm = new FormGroup({
  //   Name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl('', Validators.required),
  //   address: new FormGroup({
  //     city: new FormControl('', Validators.required),
  //     street: new FormControl('', Validators.required)
  //   })
  // })

  // get Name(){
  //   return this.userForm.get('Name') as FormControl ;
  // }

  constructor(private userService: AllUserService, private router: Router) { }

  ngOnInit(): void {
    //this.userForm.patchValue({ "Name": "abdelrahman", "email": "test@test.com", "address": { "city": "", "street": "" }})
    this.userService.getAllUser().subscribe((n: any) => this.users = n);
  }

  checkUser() {
    this.users.forEach(element => {
      if (element.username == this.user.userName && element.password == this.user.password) {
        this.userData = element;
        this.router.navigate(['/user/user-details', this.userData?.id])
        console.log(this.userData.id)
      }
    });
    console.log(this.users)
  }

}
