import { Patient } from './../../../patients/patient.models';
import { Vital } from './../../vitals/vital.models';
import { Component, OnInit } from '@angular/core';
import { ConsultationsService } from '../consultations.service';
import { Consultation } from '../consultation.models';

@Component({
  selector: 'app-details-consultations',
  templateUrl: './details-consultations.component.html',
  styleUrls: ['./details-consultations.component.scss']
})
export class DetailsConsultationsComponent implements OnInit {

  constructor(public consultationsService: ConsultationsService) { }

  ngOnInit(): void {
  }

  // como hago para iniciar el servicio desde aqui, para que sea privado y no utilizarlo en html
  // public consultation: Consultation[] = this.consultationsService.consultationSelected$.

}
