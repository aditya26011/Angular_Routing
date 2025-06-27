import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstName:string='';
  lastName:string='';
  country:string='USA';
  message:string='';

  isSubmitted:boolean=false;

  onSubmit(){
    this.isSubmitted=true
  }

  canExit(){
    if((this.firstName|| this.lastName||this.message)&& !this.isSubmitted){
      return confirm("Do you want to exit this page");
    }
    else{
      return true;
    }
  }
}
