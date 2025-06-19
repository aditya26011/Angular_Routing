import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy{
selectedCourse:Course;
courseId:number;

courseService:CourseService=inject(CourseService);
activeRoute:ActivatedRoute=inject(ActivatedRoute);
paramsObs;
ngOnInit(){
  // this.courseId=this.acticeRoute.snapshot.params['id'];
  // this.courseId = +this.activeRoute.snapshot.paramMap.get('id')!;//+ bcs it returns string to convert to number
  

  this.paramsObs=this.activeRoute.params.subscribe((data)=>{
    this.courseId=+data['id'];
    this.selectedCourse = this.courseService.courses.find(
    course => course.id === this.courseId
  );
  })
}
ngOnDestroy(){
  this.paramsObs.unsubscribe();
}
}