import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/interfaces/course';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  goToRegister(course: any): void {
    this.router.navigate(['/register', course.id]);
  }
}
