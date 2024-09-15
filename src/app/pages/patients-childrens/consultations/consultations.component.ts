import { Component, OnInit } from '@angular/core';
import { ConsultationsService } from './consultations.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PatientsService } from '../../patients/patients.service';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  tHead = {th1: 'Fecha de la Consulta', th2: 'Razón de la Consulta'}
  tBody = {tb1: 'consultationDate', tb2: 'reasonForConsultation'}

  constructor(public consultationsService: ConsultationsService, private route: ActivatedRoute, public patientsService: PatientsService) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(({patientId}) => {
        return this.consultationsService.getConsultations()


      })
    )
    .subscribe(consultations => {
      // this.consultationsService.consultationsFiltered$.next(consultations);
    })
  }

}
