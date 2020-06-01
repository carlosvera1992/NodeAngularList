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
        //La variable res contiene la respuesta del backend
        //data en el JSON contiene la lsita de usuarios
        console.log(res["data"]);

        //haré que la data vaya a una variable para iterar sobre ella en una
        //tabla en el HTML correspondiente index.component.html
        this.users = res["data"];
      },
      err => {

      }
    );
  }

}
