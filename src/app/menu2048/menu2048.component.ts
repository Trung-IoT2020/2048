import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu2048',
  templateUrl: './menu2048.component.html',
  styleUrls: ['./menu2048.component.scss']
})
export class Menu2048Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  runGame(): any {
    this.router.navigate(['/game/2048']);
  }
}
