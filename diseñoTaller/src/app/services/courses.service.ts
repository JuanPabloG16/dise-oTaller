import { Injectable } from '@angular/core';
import { Course } from 'src/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
    { id: 1, title: 'Taller de HTML', description: 'Lorem ipsum dolor sit amet. Nam ducimus unde ea pariatur minus ut velit earum? Id temporibus exercitationem est asperiores', color: '#0038C8' },
    { id: 2, title: 'Taller de CSS', description: 'Lorem ipsum dolor sit amet. Nam ducimus unde ea pariatur minus ut velit earum? Id temporibus exercitationem est asperiores', color: '#F100F5' },
    { id: 3, title: 'Taller de JS', description: 'Lorem ipsum dolor sit amet. Nam ducimus unde ea pariatur minus ut velit earum? Id temporibus exercitationem est asperiores', color: '#F50000' },
    { id: 4, title: 'Metodologías CSS', description: 'Lorem ipsum dolor sit amet. Nam ducimus unde ea pariatur minus ut velit earum? Id temporibus exercitationem est asperiores', color: '#F50000' },
    { id: 5, title: 'Frameworks Frontend', description: 'Lorem ipsum dolor sit amet. Nam ducimus unde ea pariatur minus ut velit earum? Id temporibus exercitationem est asperiores', color: '#E8A702' },
    { id: 6, title: 'Atomic Design', description: 'Lorem ipsum dolor sit amet. Nam ducimus unde ea pariatur minus ut velit earum? Id temporibus exercitationem est asperiores', color: '#F56700' },
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
