import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-project';
  form = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl('')
  })
  value = 'generate';
  submit = false;
  arr: Array<any> = [];
  onSubmit() {
    this.arr = [];
    console.log(this.form.controls.name, this.form.controls.comment);
    this.arr.push(this.form.controls.name.value, this.form.controls.comment.value);
    this.submit = true;
  }
}
