import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/interfaces/course';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  course: Course | undefined;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("\\+?\\d{7,15}$")]]
    });
  }

  ngOnInit(): void {
    const courseId = +this.route.snapshot.params['id'];
    this.course = this.coursesService.getCourseById(courseId);
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);
    }
  }

  goToCourses(): void {
    this.router.navigate(['/']);
  }
}
