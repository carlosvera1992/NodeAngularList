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
      
        this.idUser = res["data"].id;
        this.email = res["data"].email;
        this.firstName = res["data"].first_name;
        this.lastName = res["data"].last_name;
        this.avatar = res["data"].avatar;
        
      },
      err => {

      }
    );
  }

}
