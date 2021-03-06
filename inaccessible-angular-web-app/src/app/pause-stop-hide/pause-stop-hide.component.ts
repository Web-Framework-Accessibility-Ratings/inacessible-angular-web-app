import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause-stop-hide',
  templateUrl: './pause-stop-hide.component.html',
  styleUrls: ['./pause-stop-hide.component.css']
})
export class PauseStopHideComponent implements OnInit {

  constructor() { }

  private x: number;
  private background: any;

  ngOnInit(): void {
    this.background = setInterval(()=>{
      let color;
      if (this.x === 1) {
          color = "#9E0000";
          this.x = 2;
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
