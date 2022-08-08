import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root',
})
export class AllUserService {
  allUsers: any = [];
  userData: any;
  usersData: any = [];

  constructor(private hClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllUser().subscribe((n: any) => (this.usersData = n));
  }

  getAllUser() {
    return this.hClient.get<IUser[]>('https://fakestoreapi.com/users');
  }

  getUserById(id: number): any {
    return this.hClient.get(`https://fakestoreapi.com/users/${id}`);
  }
  
}
