import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultationsService } from '../consultations.service';
import { PatientsService } from '../../../patients/patients.service';

@Component({
  selector: 'app-form-consultations',
  templateUrl: './form-consultations.component.html',
  styleUrls: ['./form-consultations.component.scss']
})
export class FormConsultationsComponent implements OnInit {
  isNewConsultation: boolean = false
  formConsultation!: FormGroup

  public inputControls =[
    {
      label: 'Fecha de la Consulta',
      formControlName: 'consultationDate'
    },
    {
      label: 'Razón de la Consulta',
      formControlName: 'reasonForConsultation'
    },
    {
      label: 'Examen Físico',
      formControlName: 'physicalExam'
    },
    {
      label: 'Diagnóstico',
      formControlName: 'nameOfDiagnosis'
    },
    {
      label: 'Categoría del diagnóstico',
      formControlName: 'categoryOfDiagnosis'
    },
    {
      label: 'Prescripción Médica',
      formControlName: 'medicalPrescription'
    },
    {
      label: 'Instrucciones Médicas',
      formControlName: 'medicalInstructions'
    },
    {
      label: 'Fecha de la proxima Consulta',
      formControlName: 'dateOfNextVisit'
    },

  ]


  constructor(
          private route: ActivatedRoute,
          private fB: FormBuilder,
          public consultationsService: ConsultationsService,
          private patientsService: PatientsService) { }

  ngOnInit(): void {
    let { isNew } = this.route.snapshot.data
    console.log('isNew', isNew)
    this.isNewConsultation = isNew
    this.formConsultation = this.fB.group({
      consultationId:        [ ],
      patientId:             [ this.patientsService.patientSelected$.value.patientId ],
      consultationDate:      ['', Validators.required],
      reasonForConsultation: ['', Validators.required],
      physicalExam:          ['', Validators.required],
      nameOfDiagnosis:       ['', Validators.required],
      categoryOfDiagnosis:  ['', Validators.required],
      medicalPrescription:   ['', Validators.required],
      medicalInstructions:   ['', Validators.required],
      dateOfNextVisit:       ['', Validators.required],
    })
    if(!isNew){
      console.log('!isNew', isNew)
      this.initForm();
    }
  }

  initForm(): void {
    this.formConsultation.setValue({
      ...this.consultationsService.consultationSelected$.value
    })
  }

  isValidField( field: string): boolean | null {
    return this.formConsultation.controls[field].errors &&
            this.formConsultation.controls[field].touched
  }

  onSubmit(): void{
    if(this.formConsultation.invalid){
      this.formConsultation.markAllAsTouched()
      return
    }
    if(this.isNewConsultation){
      this.consultationsService.postConsultation(this.formConsultation.value)
      .subscribe(newConsultation => {
        this.consultationsService.consultationSelected$.next(newConsultation)
        this.consultationsService.loadConsultations.next(true)
      })
    }else{
      this.consultationsService.putConsultation(this.formConsultation.value)
      .subscribe(putConsultation => {
        this.consultationsService.consultationSelected$.next(putConsultation)
        this.consultationsService.loadConsultations.next(true)
      })
    }
    this.formConsultation.reset()
  }

}
