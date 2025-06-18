import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
router:Router=inject(Router)
activeRoute:ActivatedRoute=inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
  navigateToCourses(){
    //Both are absoulte path by default
    // this.router.navigate(['courses'],{relativeTo: this.activeRoute});// Now this will be relative path
    this.router.navigateByUrl('courses')
  }
}
