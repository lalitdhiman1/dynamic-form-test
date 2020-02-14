import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import *  as  data  from './data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;

  public fields: any  = (data  as  any).default;
   
   

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    

  }

   
  getFields() {
    return this.fields;
  }

   
}
