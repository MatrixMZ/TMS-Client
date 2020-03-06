import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  expanded = false;

  constructor() { }

  ngOnInit() {
  }

  hide(): void {
    this.expanded = false;
  }

  show(): void {
    this.expanded = true;
  }
}
