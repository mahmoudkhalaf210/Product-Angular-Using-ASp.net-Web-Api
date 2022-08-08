import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllUserService } from '../all-user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: AllUserService
  ) {
    this.activeRoute.params.subscribe((params) => {
      if (params['id']) {
        this.userService.getUserById(params['id']).subscribe((n: any) => (this.userDetails = n));
      }
    });
  }

  ngOnInit(): void {}
}
