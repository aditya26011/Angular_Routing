import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Model/course';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  AllCourses: Course[];
  searchString: string;

  ngOnInit() {
    //  this.searchString= this.activeRoute.snapshot.queryParams['search'];
    //  this.searchString= this.activeRoute.snapshot.queryParamMap.get('search');
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');
      console.log(this.searchString);
      if (
        this.searchString === undefined ||
        this.searchString === '' ||
        this.searchString === null
      ) {
        this.AllCourses = this.courseService.courses;
      } else {
        this.AllCourses = this.courseService.courses.filter((x) =>
          x.title.toLowerCase().includes(this.searchString.toLowerCase())
        );
      }
    });
  }
}
