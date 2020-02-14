import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  template: `
  <div class="form-group row" [formGroup]="form">
    <label class="col-md-12 form-control-label" [attr.for]="field.id">
      {{field.label}}
      <strong class="text-danger" *ngIf="!field.optional">*</strong>
    </label>
    <div class="col-md-12" [ngSwitch]="field.type">
      <app-text-input *ngSwitchCase="'text'" [field]="field" [form]="form"></app-text-input>
       <app-select-box *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></app-select-box>
       <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div>
    </div>
  </div>
  `
})
export class FormCreateComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;
  

  get isValid() { return this.form.controls[this.field.id].valid; }
    get isDirty() { return this.form.controls[this.field.id].dirty; }

  constructor() {   }

  ngOnInit() {
  }

}
