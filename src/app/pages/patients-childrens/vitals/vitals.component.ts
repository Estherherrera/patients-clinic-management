import { Component, OnInit } from '@angular/core';
import { VitalsService } from './vitals.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PatientsService } from '../../patients/patients.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
  tHead = {th1: 'Fecha', th2: 'Presión Arterial'}
  tBody = {tb1: 'dateTaken', tb2: 'bloodPressure'}

  // public name: string = (this.patientsService.patientSelected$.value as any).name

  constructor(public vitalsService: VitalsService, private route: ActivatedRoute, public patientsService: PatientsService) { }


  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(({patientId}) => {
        // console.log('getVitals:', this.vitalsService.getVitals())
        return this.vitalsService.getVitals()

      })
    )
    .subscribe(vitals => {
      // console.log('vitals subscribe::', vitals)
      this.vitalsService.vitalsFiltered$.next(vitals);
      this.vitalsService.vitals = vitals;
    })
  }

}
