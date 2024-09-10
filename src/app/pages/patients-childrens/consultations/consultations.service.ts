import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { Consultation } from './consultation.models';
import { PatientsService } from '../../patients/patients.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {
  consultationSelected$ = new BehaviorSubject<Consultation | false>(false)
  consultationsFiltered$ = new BehaviorSubject<Consultation[]>([])
  // consultations: Consultation[] = []

  consultations = [
    {
    consultationId:        1,
    patientId:             1,
    reasonForConsultation: 'dolor de Cabeza',
    physicalExam:          'Tomografía',
    nameOfDiagnosis:       'Tumor cerebral',
    categoryOfDiagnosis:   'grave',
    medicalPrescription:   'Cirujia',
    medicalInstructions:   'dol y preparación quirurgica',
    consultationDate:      '25-07-2024',
    dateOfNextVisit:       '13-09-2024',
 },
 {
  consultationId:        1,
  patientId:             2,
  reasonForConsultation: 'dolor en el oido',
  physicalExam:          'Auditivo',
  nameOfDiagnosis:       'Timpanos dañados',
  categoryOfDiagnosis:   'grave',
  medicalPrescription:   'glicerina',
  medicalInstructions:   'tres veces al dia',
  consultationDate:      '21-06-2024',
  dateOfNextVisit:       '21-09-2024',
 },
 {
  consultationId:        1,
  patientId:             3,
  reasonForConsultation: 'dolor de muela',
  physicalExam:          'nervios dañados',
  nameOfDiagnosis:       'sacar las coordales',
  categoryOfDiagnosis:   'mejorable',
  medicalPrescription:   'ibuprofeno',
  medicalInstructions:   'cada ocho horas',
  consultationDate:      '03-09-2024',
  dateOfNextVisit:       '21-09-2024',
 },
 ]


  loadConsultations = new BehaviorSubject<boolean>(true)
  constructor(private http: HttpClient, public patientsService: PatientsService) { }

  getConsultations(): Observable<Consultation[]>{
    // return this.http.get<Consultation[]>('http://localhost:8080/api/v1/consultation/patients/' + id)
    const consultationsFilter = this.consultations.filter(consultation => {
      return consultation.patientId === (this.patientsService.patientSelected$.value as any).patientId;
    })
    this.consultationsFiltered$.next(consultationsFilter)
    return of(consultationsFilter)
  }

  postConsultation(consultation: Consultation): Observable<Consultation>{
    this.consultations.push(consultation)
    this.consultationsFiltered$.next(this.consultations)
    return of()
  }


  deleteConsultation(id: number): Observable<any>{
    this.consultations = this.consultations.filter(consultation =>
      consultation.patientId !== id
    )
    this.consultationsFiltered$.next(this.consultations)
    return of(true)
  }

  putConsultation(newConsultation: Consultation): Observable<Consultation> {
    this.consultations = this.consultations.map(consultationItem =>
      consultationItem.patientId === newConsultation.patientId ? newConsultation : consultationItem
    )
    return of()
  }


}
