import { Component, inject } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Model/course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
courseService=inject(CourseService);
  AllCourses: Course[] = this.courseService.courses;

}
