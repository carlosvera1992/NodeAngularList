import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: any;

  constructor(private reqresService: ReqresService) { 
    this.getUsers();
  }

  ngOnInit(): void { }

  getUsers(){
    this.reqresService.getUsers().subscribe(
      res => {
        this.users = res["data"];
      },
      err => {

      }
    );
  }

}
