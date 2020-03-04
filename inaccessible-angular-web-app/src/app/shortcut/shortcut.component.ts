import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {

  constructor() { }

  handleKeyup(e: any): void {
    if(e.code === "KeyA") {
      window.setTimeout(() => document.getElementById('name').focus())
    }
  }

  ngOnInit(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keyup', this.handleKeyup)
  }

}
