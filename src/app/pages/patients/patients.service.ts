import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Patient } from './patient.models';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patientSelected$ = new BehaviorSubject<Patient | false>(false)
  patientsFiltered$ = new BehaviorSubject<Patient[]>([])

    patients = [
    {
      patientId:        1,
      name:             'string',
      surname:          'string',
      dateOfBirth:      'string',
      phoneNumber:      'string',
      address:          'string',
      email:            'string',
      emergencyContact: 'string',
      medicalInsurance: 'string',
  },
  {
    patientId:        2,
      name:             'Andrés',
      surname:          'Herrera',
      dateOfBirth:      '21-02-89',
      phoneNumber:      '123456789',
      address:          'Gijon',
      email:            'andres@gmail.com',
      emergencyContact: 'madre',
      medicalInsurance: 'abc8140',
  },
  {
    patientId:        3,
      name:             'Yoel',
      surname:          'Peréz',
      dateOfBirth:      '22-08-95',
      phoneNumber:      '789456123',
      address:          'La Grita',
      email:            'yoel@yoel.com',
      emergencyContact: 'Hermana',
      medicalInsurance: 'dfg4522',
  }
  ]

  loadPatients = new BehaviorSubject<boolean>(true)
  constructor(private http: HttpClient) {

  }

  getPatients(): Observable<Patient[]> {

    //contruir 3 patients con datos reales, guardar pacientes en patientsFiltered y patients
    this.patientsFiltered$.next(this.patients)
    return of(this.patients)
  }

  postPatient(patient: Patient): Observable<Patient> {
    this.patients.push(patient)
    this.patientsFiltered$.next(this.patients)
    return of()
  }

  deletePatient(id: number): Observable<any> { //borrar el paciente que tenga el mismo id que recibe
    this.patients = this.patients.filter(patient =>
      patient.patientId !== id
    )
    this.patientsFiltered$.next(this.patients)
    return of()
    // return this.http.delete(environment.baseURL + '/patients/'+ id)
  }

  putPatient(newpatient: Patient): Observable<Patient> { //actualizar al paciente que corresponda con el id que se recibe y guardar al paciente
    this.patients = this.patients.map(patientItem =>
      patientItem.patientId === newpatient.patientId ? newpatient : patientItem
    )
    return of()
    // return this.http.put<Patient>(environment.baseURL + '/patients/' + patient.patientId, patient)
  }


}
