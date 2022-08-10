import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { CoreService } from '../service/core.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerData: any;

  constructor(private coreservice : CoreService) { }

  ngOnInit(): void {
  }



  signinForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    company : new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  get name(){
    return this.signinForm.get('name');
  }
  get company(){
    return this.signinForm.get('company');
  }
  get email(){
    return this.signinForm.get('email');
  }
  get password(){
    return this.signinForm.get('password');
  }

  userSignin(){
       this.registerData = this.signinForm.value;
       console.log(this.registerData);
       
      this.coreservice.post('http://localhost:8080/signup',
      this.registerData).subscribe((result: any) => {
           console.log(result); 
      this.signinForm.reset();         
    }); 
          }
  }


