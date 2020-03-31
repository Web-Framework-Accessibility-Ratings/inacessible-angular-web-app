import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-flashes-below-threshold',
  templateUrl: './three-flashes-below-threshold.component.html',
  styleUrls: ['./three-flashes-below-threshold.component.css']
})
export class ThreeFlashesBelowThresholdComponent implements OnInit {

  constructor() { }

  private x: number;
  private background: any;
  private counter: number = 100;

  ngOnInit(): void {
    this.background = setInterval(()=>{
      let color;
      if (this.x === 1 && this.counter > 0) {
          color = "#9E0000";
          this.x = 2;
          this.counter--;
      } else {
          color = "green";
          this.x = 1;
      }

      document.getElementById("flashingBackground").style.background = color;
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.background)
  }

}
