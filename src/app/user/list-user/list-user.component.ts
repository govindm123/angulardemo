import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

   users:any;
   status: number;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
console.log("hi");;
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data.data;
        console.log(this.users);
      });
    }
}
