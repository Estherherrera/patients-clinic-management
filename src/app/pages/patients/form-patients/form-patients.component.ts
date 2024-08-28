import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-form-patients',
  templateUrl: './form-patients.component.html',
  styleUrls: ['./form-patients.component.scss']
})
export class FormPatientsComponent implements OnInit {
  isNewPatient: boolean = false
  formPatient!: FormGroup


  constructor(private route: ActivatedRoute, private fB: FormBuilder, private patientsService: PatientsService) { }

  ngOnInit(): void {
    let { isNew } = this.route.snapshot.data
    this.isNewPatient = isNew
    this.formPatient = this.fB.group({
      patientId: [],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      emergencyContact: ['', Validators.required],
      medicalInsurance: ['', Validators.required]
    })
    if(!isNew){
      this.initForm()
    }
  }

  initForm(): void{
    this.formPatient.setValue({
      ...this.patientsService.patientSelected$.value
    }) 
  }

  onSubmit(): void {
    if(this.isNewPatient){
      this.patientsService.postPatient(this.formPatient.value)
      .subscribe(newPatient => {
        this.patientsService.patientSelected$.next(newPatient)
        this.patientsService.loadPatients.next(true)
        console.log(newPatient)
      })

    }else{
    // console.log(this.patientsService.patientSelected$.value)
    this.patientsService.putPatient(this.formPatient.value)
    .subscribe(putPatient => {
      this.patientsService.patientSelected$.next(putPatient)
      this.patientsService.loadPatients.next(true)
      console.log(putPatient)
    })
  }
  }


}
