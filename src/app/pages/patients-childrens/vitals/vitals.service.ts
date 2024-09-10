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
    temperature:     55,
    weight:          55,
    respiratoryRate: 55,
    bloodPressure:   'string',
    heartRate:       'string',
    dateTaken:       'string',
  },
  {
    vitalsId:        2,
    patientId:       1,
    temperature:     55,
    weight:          55,
    respiratoryRate: 55,
    bloodPressure:   'string',
    heartRate:       'string',
    dateTaken:       'string',
  },
  {
    vitalsId:        3,
    patientId:       2,
    temperature:     55,
    weight:          55,
    respiratoryRate: 55,
    bloodPressure:   '80/120',
    heartRate:       '80',
    dateTaken:       '21/08/24',
  },

  ]

  loadVitals = new BehaviorSubject<boolean>(true)
  constructor(private http: HttpClient, private patientsService: PatientsService ) { }

  getVitals(): Observable<Vital[]>{
    // console.log('patientSelected:::', this.patientsService.patientSelected$.value)
    const vitalsFilter = this.vitals.filter(vital => {
      return vital.patientId === (this.patientsService.patientSelected$.value as any).patientId;
    })
    this.vitalsFiltered$.next(vitalsFilter)
    // console.log('vitalsFiltered$', this.vitalsFiltered$)
    // console.log('paciente seleccionado:',  (this.patientsService.patientSelected$.value as any).patientId)
    // console.log('this.vital despues del filter', this.vitals)
    return of(vitalsFilter)
  }

  postVital(vital: Vital): Observable<Vital> {
    this.vitals.push(vital)
    this.vitalsFiltered$.next(this.vitals)
    return of(vital)
  }

  deleteVital(id: number): Observable<any> {
    this.vitals =this.vitals.filter(vital =>
      vital.vitalsId !== id
     )
     this.vitalsFiltered$.next(this.vitals)
     return of(true)
  }

  putVital(newVital: Vital): Observable<Vital> {
    this.vitals = this.vitals.map(vitalItem =>
      vitalItem.vitalsId === newVital.vitalsId ? newVital : vitalItem
    )
    this.vitalsFiltered$.next(this.vitals)
    return of(newVital)
  }


}
