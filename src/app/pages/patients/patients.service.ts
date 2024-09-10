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
      name:             'Liliana',
      surname:          'Camargo',
      dateOfBirth:      '23-09-1998',
      phoneNumber:      '542698753',
      address:          'LLanes',
      email:            'Liliana@camargo.com',
      emergencyContact: 'Madre',
      medicalInsurance: 'LJ452269',
  },
  {
    patientId:        2,
      name:             'Andrés',
      surname:          'Villanueva',
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
      surname:          'Duarte',
      dateOfBirth:      '22-08-95',
      phoneNumber:      '789456123',
      address:          'La Grita',
      email:            'yoel@yoel.com',
      emergencyContact: 'Hermana',
      medicalInsurance: 'dfg4522',
  },
  {
    patientId:        4,
      name:             'Juan',
      surname:          'Brito',
      dateOfBirth:      '21-08-85',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'juan@brito.com',
      emergencyContact: 'Hermano',
      medicalInsurance: 'dfg8754',
  },
  {
    patientId:        5,
      name:             'Pedro',
      surname:          'Mejias',
      dateOfBirth:      '02-05-20',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'Pedr@mejias.com',
      emergencyContact: 'padre',
      medicalInsurance: 'dfg5896',
  },
  {
    patientId:        6,
      name:             'Juana',
      surname:          'Pinto',
      dateOfBirth:      '20-08-91',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'juana@pinto.com',
      emergencyContact: 'Madre',
      medicalInsurance: 'dfg2221',
  },
  {
    patientId:        7,
      name:             'Miguel',
      surname:          'Fuente',
      dateOfBirth:      '10-08-75',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'miguel@fuente.com',
      emergencyContact: 'Madre',
      medicalInsurance: 'dfg1545',
  },
  {
    patientId:        8,
      name:             'Pablo',
      surname:          'Bernabé',
      dateOfBirth:      '15-01-54',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'pablo@bernabe.com',
      emergencyContact: 'Madre',
      medicalInsurance: 'dfg1218',
  },
  {
    patientId:        9,
      name:             'Isabel',
      surname:          'Herrera',
      dateOfBirth:      '28-11-94',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'isabel@herrera.com',
      emergencyContact: 'Madre',
      medicalInsurance: 'dfg1218',
  },
  {
    patientId:        10,
      name:             'Mayari',
      surname:          'jimenez',
      dateOfBirth:      '15-10-94',
      phoneNumber:      '789456123',
      address:          'Oviedo',
      email:            'mayari@jimenez.com',
      emergencyContact: 'tía',
      medicalInsurance: 'dfg1218',
  },
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
    return of(patient)
  }

  deletePatient(id: number): Observable<any> { //borrar el paciente que tenga el mismo id que recibe
    this.patients = this.patients.filter(patient =>
      patient.patientId !== id
    )
    this.patientsFiltered$.next(this.patients)
    return of(true)
    // return this.http.delete(environment.baseURL + '/patients/'+ id)
  }

  putPatient(newpatient: Patient): Observable<Patient> {
      this.patients = this.patients.map(patientItem =>
      patientItem.patientId === newpatient.patientId ? newpatient : patientItem
    )
    this.patientsFiltered$.next(this.patients)
    return of(newpatient)
    // return this.http.put<Patient>(environment.baseURL + '/patients/' + patient.patientId, patient)
  }


}
