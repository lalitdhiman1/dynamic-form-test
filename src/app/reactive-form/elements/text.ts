import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-text-input',
    template: `
      <div [formGroup]="form">
        <input 
            *ngIf="!field.multiline" 
            [attr.type]="field.type" 
            class="form-control"
            [placeholder]="field.place_holder"  
            [id]="field.id" 
            [name]="field.id" 
            [formControlName]="field.id">
      </div> 
    `
})
export class TextBoxComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.field.id].valid; }
    get isDirty() { return this.form.controls[this.field.id].dirty; }
    constructor() {}
}