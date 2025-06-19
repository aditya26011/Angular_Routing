import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 activateRoute:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(){
    this.activateRoute.fragment.subscribe((frag)=>{
      console.log(frag);
      this.JumpToScare(frag);
    })
    
  }
  JumpToScare(section){
      document.getElementById(section).scrollIntoView({behavior:'smooth'});
    }

}
