import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";

export const canActivate=()=>{
const authService=inject(AuthService);
const router=inject(Router)

if(authService.IsAuthenticated()){
    return true;
 }
 else{
    router.navigate(['/login'])
    return false;
 }
}


export const canActivateChild=()=>{
    canActivate();
}

export const resolve=()=>{
    const coursesrvice=inject(CourseService)

          return coursesrvice.getAllcourses();

}