import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Router } from '@angular/router';
import { client } from 'src/config/client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate([client.LOGIN]);
  }

}
