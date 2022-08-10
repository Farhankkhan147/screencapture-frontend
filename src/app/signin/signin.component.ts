import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  datal: any;
  formvalue: any

  constructor(private coreservice: CoreService, private route: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  userLogin() {
    
    this.coreservice.post('http://localhost:8080/signin',
      this.loginForm.value).subscribe((result: any) => {
        this.datal = result
        sessionStorage.setItem("access_token", this.datal.token)
        if (this.datal.token) {
          sessionStorage.getItem(this.datal.token);
          this.route.navigate(['/sites/' + this.datal.user_id]);
        }
        if (!this.datal.token) {
          this.loginForm.reset();   
        }
      });

  }


  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

}


