import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Services/authguard.service';
import { canActivate, canActivateChild, resolve } from './auth.guard';

  const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent,canDeactivate:[(comp:ContactComponent)=>{return comp.canExit()}] },
  { path: 'courses', component: CoursesComponent, resolve:{courses:resolve} },
  // { path: 'courses/course/:id', component: CourseDetailComponent },
  {path:'courses',canActivateChild:[canActivateChild],children:[
    {path:'course/:id',component:CourseDetailComponent},
    {path:'popular',component:PopularComponent},
    {path:'checkout',component:CheckoutComponent,canActivate:[canActivate]}
  ]},
      {path:'login',component:LoginComponent},
  { path: '**', component: NotfoundComponent } // fallback route
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
