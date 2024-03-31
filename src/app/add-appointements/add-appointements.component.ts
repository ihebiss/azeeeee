import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointementService } from '../appointement.service';
import { Appointements } from '../Appointement.model';

@Component({
  selector: 'app-add-appointements',
  templateUrl: './add-appointements.component.html',
  styleUrls: ['./add-appointements.component.css']
})
export class AddAppointementsComponent implements OnInit {

  appointements : Appointements = new Appointements();


saveAppointements(){
  var id = Number(localStorage.getItem('id'));
  this.appointementS.AddAppointements(this.appointements , id,14).subscribe();
  this.router.navigate(['/ListAppointments']);
}





  constructor(private appointementS : AppointementService,private router: Router){}


  ngOnInit(){

  }

}
