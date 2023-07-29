import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public active : boolean = false;
  constructor() { } 
  ngOnInit(): void { }

  setActive(): void {
   this.active = !this.active;
  }

}
