import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-input',
  templateUrl: './on-input.component.html',
  styleUrls: ['./on-input.component.css']
})
export class OnInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  private temp = 0
  changeContext(): void {
      if (this.temp < 1){
          window.open('http://www.google.com');
          this.temp = 1;
      }
  }
}
