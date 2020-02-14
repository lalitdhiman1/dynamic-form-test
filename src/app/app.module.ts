import { TextBoxComponent } from './reactive-form/elements/text';
import { SelectBoxComponent } from './reactive-form/elements/select';
import { FormCreateComponent } from './reactive-form/form-create/form-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CreateIdPipe } from './create-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormCreateComponent,
    SelectBoxComponent,
    TextBoxComponent,
    CreateIdPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
