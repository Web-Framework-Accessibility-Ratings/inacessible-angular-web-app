import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-adjustable',
  templateUrl: './time-adjustable.component.html',
  styleUrls: ['./time-adjustable.component.css']
})
export class TimeAdjustableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.setTimeout(()=>{window.location.href="/"}, 1000)
  }

}
