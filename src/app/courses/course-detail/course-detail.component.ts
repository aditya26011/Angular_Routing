import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
selectedCourse:Course;
courseId:number;

courseService:CourseService=inject(CourseService);
activeRoute:ActivatedRoute=inject(ActivatedRoute);

ngOnInit(){
  // this.courseId=this.acticeRoute.snapshot.params['id'];
  this.courseId = +this.activeRoute.snapshot.paramMap.get('id')!;//+ bcs it returns string to convert to number
  this.selectedCourse = this.courseService.courses.find(
    course => course.id === this.courseId
  );
}

}