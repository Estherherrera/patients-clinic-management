import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { Vital } from './vital.models';
import { PatientsService } from '../../patients/patients.service';
import { Patient } from '../../patients/patient.models';

@Injectable({
  providedIn: 'root'
})
export class VitalsService {
  vitalSelected$ = new BehaviorSubject<Vital | false>(false)
  vitalsFiltered$ = new BehaviorSubject<Vital[]>([])

  vitals = [
  {
    vitalsId:        1,
    patientId:       1,
    temperature:     45,
    weight:          45,
    respiratoryRate: 45,
    bloodPressure:   '100/150',
    heartRate:       '80',
    dateTaken:       '25/02/24',
  },
  {
    vitalsId:        2,
    patientId:       1,
    temperature:     55,
    weight:          55,
    respiratoryRate: 55,
    bloodPressure:   '60/100',
    heartRate:       '50',
    dateTaken:       '23/09/24',
  },
  {
    vitalsId:        3,
    patientId:       2,
    temperature:     33,
    weight:          33,
    respiratoryRate: 33,
    bloodPressure:   '80/120',
    heartRate:       '80',
    dateTaken:       '21/08/24',
  },

  ]

  loadVitals = new BehaviorSubject<boolean>(true)
  constructor(private http: HttpClient, private patientsService: PatientsService ) { }

  onFilterVitals() {
    const vitalsFilter = this.vitals.filter(vital => {
      return vital.patientId === this.patientsService.patientSelected$.value.patientId;
    })
     return this.vitalsFiltered$.next(vitalsFilter)
  }



  getVitals(): Observable<Vital[]>{
    this.onFilterVitals()
    return of()
  }

  postVital(vital: Vital): Observable<Vital> {
    this.vitals.push(vital)
    this.onFilterVitals()
    return of(vital)
  }


  putVital(newVital: Vital): Observable<Vital> {
    this.vitals = this.vitals.map(vitalItem =>
      vitalItem.vitalsId === newVital.vitalsId ? newVital : vitalItem
    )
    this.onFilterVitals()
    return of(newVital)
  }


}
