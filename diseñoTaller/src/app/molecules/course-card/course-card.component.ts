import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: any;
  @Input() showRegisterBtn: boolean = true;
  @Output() register = new EventEmitter<any>();

  progress: number = 0;

  ngOnInit(): void {
    if (!this.showRegisterBtn) {
      this.progress = Math.floor(Math.random() * 100);
    }
  }

  onRegister(course: any): void {
    this.register.emit(course);
  }
}
