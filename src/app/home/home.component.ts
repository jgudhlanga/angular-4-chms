import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor( private authService: AuthService, private router: Router ) { }

    user: User;
    error: any;
    getUser(){
        if(this.authService.isLoggedIn){
            this.authService.getUser()
            .subscribe(
                user => { this.user = user },
                error => { this.error = error }
            )
        }
    }

    ngOnInit() {
        this.getUser();
    }
}
