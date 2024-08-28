import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Consultation } from './consultation.models';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService { 
  consultationSelected$ = new BehaviorSubject<Consultation | false>(false)
  consultationsFiltered$ = new Subject<Consultation[]>()
  consultations: Consultation[] = []
 
  constructor(private http: HttpClient) { }

  getConsultations(id:  number): Observable<Consultation[]>{
    return this.http.get<Consultation[]>('http://localhost:8080/api/v1/consultation/patients/' + id)
  }
}
