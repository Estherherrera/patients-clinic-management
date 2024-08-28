import { Component, OnInit } from '@angular/core';
import { VitalsService } from './vitals.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
  tHead = {th1: 'Fecha', th2: 'Presión Arterial'}
  tBody = {tb1: 'dateTaken', tb2: 'bloodPressure'}

  constructor(public vitalsService: VitalsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(({patientId}) => {
        return this.vitalsService.getVitals()
      })
    )
    .subscribe(vitals => {
      this.vitalsService.vitalsFiltered$.next(vitals);
      this.vitalsService.vitals = vitals;
    })
  }

}
