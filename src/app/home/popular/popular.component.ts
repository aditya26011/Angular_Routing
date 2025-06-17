import { Component,inject, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
courseService = inject(CourseService)
popularCourses: Course[] = [];

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
}
