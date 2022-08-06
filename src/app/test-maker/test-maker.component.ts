import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {v4} from 'uuid';
@Component({
  selector: 'app-test-maker',
  templateUrl: './test-maker.component.html',
  styleUrls: ['./test-maker.component.css']
})
export class TestMakerComponent implements OnInit {
  test: {name: string, choices: string, correct: number}[] = [{name: '', choices: '', correct: 0}]
  testDupli: {name: string, choices: string[], correct: number}[] = [{name: '', choices: [''], correct: 0}];
  id: undefined | string = undefined
  constructor() { }

  ngOnInit(): void {
  }
  async submit() {
    this.test.forEach((val, i) => {
      this.testDupli[i].name = val.name;
      this.testDupli[i].choices = val.choices.split(",");
      this.testDupli[i].correct = val.correct;
    })
    const test = await axios.post("https://json-server-z.herokuapp.com/tests", {
      "test": this.testDupli,
      "id": v4()
    });
    this.id = test.data.id
  }
}
