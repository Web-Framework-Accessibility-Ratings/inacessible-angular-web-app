import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consistent-identification',
  templateUrl: './consistent-identification.component.html',
  styleUrls: ['./consistent-identification.component.css']
})
export class ConsistentIdentificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('links').setAttribute('role', 'list')
  }

  ngOnDestroy(): void {
    document.getElementById('links').setAttribute('role', 'navigation')
  }

}
