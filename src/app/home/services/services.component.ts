import { Component, inject } from '@angular/core';
import { ServicesService } from 'src/app/Services/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
servicesService = inject(ServicesService);
    services: {title: string, image: string, description: string}[] = [];

    ngOnInit(){
        this.services = this.servicesService.services;
  }

}
