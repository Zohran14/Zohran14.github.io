import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses() {
    return ["1", "2", "3"]
  }
}
