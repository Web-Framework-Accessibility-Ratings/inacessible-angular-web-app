import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-role-value',
  templateUrl: './name-role-value.component.html',
  styleUrls: ['./name-role-value.component.css']
})
export class NameRoleValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
    (<HTMLInputElement> document.getElementById("name")).value = ""
  }

}
