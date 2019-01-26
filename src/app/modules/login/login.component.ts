import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { client } from 'src/config/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: string = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])], password: [null, Validators.compose([Validators.required])]
    });
  }

  login() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    this.authService.login(user)
      .subscribe(
        () => {
          this.router.navigate([client.DASHBOARD]);
        },
        error => this.message = 'Invalid email or password'
      );
  }
}
