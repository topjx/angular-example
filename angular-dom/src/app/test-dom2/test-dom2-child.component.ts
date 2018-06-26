import { Component } from '@angular/core';

@Component({
  selector:'test-dom2-child',
  template:`<div></div>`,
  styles:[`
    div{
      width:100px;
      height:100px;
    }
  `]
})
export class TestDom2ChildComponent {
  constructor() {
  }
}