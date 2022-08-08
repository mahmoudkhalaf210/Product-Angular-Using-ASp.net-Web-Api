import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  userData: any[] = [];
  newUserData: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  // print(data:string){
  //   console.log(data)
  // }

  insert(data: string) {
    this.userData.push({"id": this.userData.length, "name": data});
  }

  delete(id: number) {
    this.userData.splice(id,1);
    this.newUserData.splice(id,1);
  }

  filtering(data: string){
    this.newUserData = this.userData.filter(d => { if (d.name.includes(data)) return  d ; })
    console.log(data)
    console.log(this.userData)
  }

}
