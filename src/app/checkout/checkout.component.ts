import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
activateRoute:ActivatedRoute=inject(ActivatedRoute);
router:Router=inject(Router);
course;

ngOnInit(){
  // this.activateRoute.data.subscribe((data)=>{
  //   this.course=data
  // })

  this.course=history.state;
}

}
