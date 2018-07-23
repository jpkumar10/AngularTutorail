import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }
  onKeyUP() {
    console.log(this.title);
  }

}
