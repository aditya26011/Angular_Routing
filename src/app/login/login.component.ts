import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authservice:AuthService=inject(AuthService);
  router:Router=inject(Router);
  activeRoute:ActivatedRoute=inject(ActivatedRoute);
  @ViewChild('username') username:ElementRef;
    @ViewChild('password') password:ElementRef;

    ngOnInit(){
      this.activeRoute.queryParamMap.subscribe((queries)=>{
        const logout=Boolean(queries.get('logout'));
        if(logout){
          this.authservice.logout();
        }
      })
    }

    onLoginClicked(){
      const username=this.username.nativeElement.value;
      const password=this.password.nativeElement.value;

      const user=this.authservice.login(username,password);

      if(user===undefined){
        alert('Wrong Credentials');
      }
      else{
        alert('welcome'+ user.name + 'You are logged in')
        this.router.navigate(['/courses'])
      }
    }

}
