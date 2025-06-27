import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { Course } from "../Model/course";
import { CourseService } from "./course.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild,CanDeactivate<ContactComponent>,Resolve<Course[]>{

    authservice:AuthService=inject(AuthService);
    router:Router=inject(Router);
    courseservice:CourseService=inject(CourseService)

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
:boolean | Observable<boolean>|Promise<boolean>{
 if(this.authservice.IsAuthenticated()){
    return true;
 }
 else{
    this.router.navigate(['/login'])
    return false;
 }
}  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean| Observable<boolean> | Promise<boolean> {
   return this.canActivate(childRoute,state)
      
  }

  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {
      return component.canExit();
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[]| Observable<Course[]>| Promise<Course[]> {
    
      return this.courseservice.getAllcourses();
  }
}

