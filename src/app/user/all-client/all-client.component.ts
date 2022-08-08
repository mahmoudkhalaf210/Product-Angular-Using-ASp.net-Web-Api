import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../all-user.service';
import { IUser } from '../iuser'

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.css']
})
export class AllClientComponent implements OnInit {

  allUsers?: IUser[];
  NewUser: any;

  constructor(private userService: AllUserService) { }

  ngOnInit(): void {
    //this.userService.getAllUsers().subscribe( data => this.allUsers = data)
  }

  // newUser() {
  //   this.userService.addUser().subscribe(n => {
  //     this.NewUser = n;
  //     console.log(this.NewUser);
  //   });
  // }
}
