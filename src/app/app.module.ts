import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {CoursesComponent} from './courses/courses.component'
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { PopularComponent } from './home/popular/popular.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseService } from './Services/course.service';
import { ServicesService } from './Services/services';
import { FormsModule } from '@angular/forms';

//Define Routes
// const routes:Routes=[
//   {path:'',component:HomeComponent},
//   // {path:'',redirectTo:'home',pathMatch:'full'},
//   {path:'home', component: HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'contact',component:ContactComponent},
//   {path:'courses',component:CoursesComponent}
  

// ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServicesComponent,
    TestimonyComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicesService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
