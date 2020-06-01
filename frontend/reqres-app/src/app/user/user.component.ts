import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idUser;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;


  constructor(private reqresService: ReqresService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idUser = params.get("idUser");
    });
    this.getUserById(this.idUser);
  }

  getUserById(idUser){
    this.reqresService.getUserById(idUser).subscribe(
      res => {
        //La variable res contiene la respuesta del backend
        //Checa como sacar cada valor dentro del JSON de respuesta
        console.log(res["data"]);
        console.log(res["data"].id);
        console.log(res["data"].email);
        console.log(res["data"].first_name);
        console.log(res["data"].last_name);
        console.log(res["data"].avatar);

        //mira como igualo lo que viene del JSON y lo paso a una variable "name"
        this.email = res["data"].email;
        this.firstName = res["data"].first_name;
        this.lastName = res["data"].last_name;
        this.avatar = res["data"].avatar;

        //Ahora mira el HTML correspondiente user.component.html
      },
      err => {

      }
    );
  }

}
