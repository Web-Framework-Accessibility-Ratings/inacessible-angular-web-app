import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-identification',
  templateUrl: './error-identification.component.html',
  styleUrls: ['./error-identification.component.css']
})
export class ErrorIdentificationComponent implements OnInit {

  constructor() { }

  isValid():void {
    const val = Number((<HTMLInputElement>document.getElementById('number')).value);
    if (val < 0 || val > 10) {
        alert('Invalid Input');
    }
  }

  ngOnInit(): void {
  }

}
