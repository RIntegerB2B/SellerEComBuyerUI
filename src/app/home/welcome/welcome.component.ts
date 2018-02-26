import { Component, OnInit } from '@angular/core';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private nav : NavHeaderService) { }

  ngOnInit() {
    this.nav.show()
  }

}
