import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";

@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild,CanDeactivate<ContactComponent>{

    authservice:AuthService=inject(AuthService);
    router:Router=inject(Router);

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
}

