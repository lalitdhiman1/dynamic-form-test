import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-select-box',
    template: `
      <div [formGroup]="form">
        <select class="form-control" [id]="field.id" [formControlName]="field.label | createid">
          <option [selected]="true">Choose...</option>
          <option *ngFor="let opt of field.options" [value]="opt.value">{{opt.label}}</option>
        </select>
      </div>
    `
})
export class SelectBoxComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;

    constructor() {

    }
}