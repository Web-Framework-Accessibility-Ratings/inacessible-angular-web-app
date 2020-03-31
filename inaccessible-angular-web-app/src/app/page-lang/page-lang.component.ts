import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-lang',
  templateUrl: './page-lang.component.html',
  styleUrls: ['./page-lang.component.css']
})
export class PageLangComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementsByTagName('html')[0].removeAttribute('lang')
  }

  ngOnDestroy(): void {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en')
  }

}
