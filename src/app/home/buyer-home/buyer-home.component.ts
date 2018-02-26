import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  constructor(private router: Router, private nav : NavHeaderService) { }

  ngOnInit() {
    this.nav.hide();
  }

  navigateToSignUp(): void {
    this.router.navigate(['/BuyerRegistration' ]);

  }
  navigateToSignIn(): void {
    this.router.navigate(['/BuyerSignin' ]);

  }
}
