import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { Vital } from './vital.models';

@Injectable({
  providedIn: 'root'
})
export class VitalsService {
  vitalSelected$ = new BehaviorSubject<Vital | false>(false)
  vitalsFiltered$ = new Subject<Vital[]>()

  vitals = [
  {
    vitalsId:        55,
    patientId:       55,
    height:          55,
    weight:          55,
    respiratoryRate: 55,
    bloodPressure:   'string',
    heartRate:       'string',
    dateTaken:       'string',
  }
  ]

  constructor(private http: HttpClient ) { }

  getVitals(): Observable<Vital[]>{
    //return this.http.get<Vital[]>('http://localhost:8080/api/v1/vitals/patients/' + id)
    this.vitalsFiltered$.next(this.vitals)
    return of(this.vitals)
  }
}
