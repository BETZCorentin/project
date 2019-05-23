import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login.service';
import {User} from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user: User;
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.user.username = form.value['login'];
    this.user.password = form.value['password'];
    this.httpClient.post('https://captn-boat-api.herokuapp.com/login/login.json', this.user)
        .subscribe(
            () => {
              console.log('ça a marché');
            },
        (error) => {
              console.log(error);
        }
        );
  }
}
