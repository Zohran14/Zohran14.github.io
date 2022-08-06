import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute, ParamMap} from "@angular/router";

interface TestObject {
  name: string,
  choices: Array<any>,
  correct: number
}
@Component({
  selector: 'app-test-viewer',
  templateUrl: './test-viewer.component.html',
  styleUrls: ['./test-viewer.component.css']
})
export class TestViewerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: string | null | undefined
  arr: Array<any> = []
  boolarr: Array<boolean> = []
  submit = false
  data: null | undefined | TestObject[] = undefined
  ngOnInit(): void {

    (async () => {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        try {
          const test = await axios.get(`https://json-server-z.herokuapp.com/tests/${this.id}`);
          const data2 = test.data;
          const data3 = data2.test;
          this.data = data3;
        } catch (e) {
          this.data = null
        }
      } else {
        this.data = null
      }
    })();
  }
  click() {
    if(this.data) {
      this.arr.forEach((val, index) => {
        // @ts-ignore
        this.boolarr[index] = (val.toString() === (this.data[index].correct - 1).toString())
      })
      this.submit = true
    }

  }
  getScore() {
    return this.boolarr.map(val => val ? 1: 0).reduce<number>((a, b) => a+b, 0);
  }
}
