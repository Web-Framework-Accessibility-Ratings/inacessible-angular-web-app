import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consistent-navigation',
  templateUrl: './consistent-navigation.component.html',
  styleUrls: ['./consistent-navigation.component.css']
})
export class ConsistentNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('links').style.flexDirection = 'column-reverse';
  }

  ngOnDestroy(): void {
    document.getElementById('links').style.flexDirection = 'column';
  }

}
