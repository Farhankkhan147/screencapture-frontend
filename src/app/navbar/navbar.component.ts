import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  isLoggedOut(){
    sessionStorage.removeItem('access_token')
    this.route.navigate(['/signin'])
  }

  isLoggedOut1(){
    sessionStorage.removeItem('access_token')
    this.route.navigate([''])
  }

  isLoggedOut2(){
    sessionStorage.removeItem('access_token')
    this.route.navigate(['/help'])
  }

}
