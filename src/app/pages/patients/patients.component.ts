import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import { Router } from '@angular/router';
import { Subscribable, Subscriber, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, OnDestroy {

  tHead = {th1: 'Nombre', th2: 'Apellido'}
  tBody = {tb1: 'name', tb2: 'surname'}
  subscription!: Subscription

  constructor(public patientsService: PatientsService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.patientsService.loadPatients.subscribe(() => {
      this.getPatients()
      // this.router.navigate(['/list-patients/0'])
      console.log("Hola")
    })
    console.log('Hola222')
    this.getPatients()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getPatients(): void {
    this.patientsService.getPatients()
    .subscribe(patients => {
      this.patientsService.patientsFiltered$.next(patients);
      this.patientsService.patients = patients;
    })
  }



}
