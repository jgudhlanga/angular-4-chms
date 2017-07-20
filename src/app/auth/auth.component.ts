import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }

  error: any;
  formLogin: any;
  loading: boolean;

  ngOnInit() {
      this.formLogin = new FormGroup({
          email: new FormControl("", Validators.compose([
              Validators.required, Validators.minLength(5)
          ])),
          password: new FormControl("", Validators.required)
      })
  }

  login(data: any){
      this.loading = true;
      this.authService.login(data)
       .subscribe(
            data => { data },
            error => { error },
            () => {
                this.loading=false;
                this.router.navigate(['/home']);
            }
        );

  }

}
