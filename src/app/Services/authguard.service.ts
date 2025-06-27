import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate{

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
}

