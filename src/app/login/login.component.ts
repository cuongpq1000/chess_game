import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loading = false;
  submitted = false;
  error = '';

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log("register");
  }

}
