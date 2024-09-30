import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { VitalsService } from '../vitals.service';
import { PatientsService } from '../../../patients/patients.service';

@Component({
  selector: 'app-form-vitals',
  templateUrl: './form-vitals.component.html',
  styleUrls: ['./form-vitals.component.scss']
})
export class FormVitalsComponent implements OnInit {
  isNewVital: boolean = false
  formVital!: FormGroup

  public inputControls =[
    {
      label: 'Fecha de Toma',
      formControlName: 'dateTaken'
    },
    {
      label: 'Temperatura',
      formControlName: 'temperature'
    },
    {
      label: 'Peso',
      formControlName: 'weight'
    },
    {
      label: 'Frecuencia Respiratoria',
      formControlName: 'respiratoryRate'
    },
    {
      label: 'Presión Arterial',
      formControlName: 'bloodPressure'
    },
    {
      label: 'Frecuencia Cardiaca',
      formControlName: 'heartRate'
    },

  ]

  constructor(
        private route: ActivatedRoute,
        private fB: FormBuilder,
        private vitalsService: VitalsService,
        private patientsService: PatientsService) { }


  ngOnInit(): void {
    let { isNew } = this.route.snapshot.data
    console.log('isNew Vitals', isNew)
    this.isNewVital = isNew
    this.formVital = this.fB.group({
      vitalsId:    [],
      patientId:   [(this.patientsService.patientSelected$.value.patientId)],
      dateTaken:        ['', Validators.required],
      temperature:      ['', Validators.required],
      weight:           ['', Validators.required],
      respiratoryRate:  ['', Validators.required],
      bloodPressure:    ['', Validators.required],
      heartRate:        ['', Validators.required]
    })
    if (!isNew){
      this.initForm()
    }
  }

  initForm(): void {
    this.formVital.setValue({
      ...this.vitalsService.vitalSelected$.value
    })
  }

  isValidField( field: string): boolean | null{
    return this.formVital.controls[field].errors &&
          this.formVital.controls[field].touched
  }

  onSubmit(): void {
    if(this.formVital.invalid){
      this.formVital.markAllAsTouched()
      return
    }
    if(this.isNewVital){
      this.vitalsService.postVital(this.formVital.value)
      .subscribe(newVital => {
        this.vitalsService.vitalSelected$.next(newVital)
        this.vitalsService.loadVitals.next(true)
      })
    }else{
      this.vitalsService.putVital(this.formVital.value)
      .subscribe(putVital => {
        this.vitalsService.vitalSelected$.next(putVital)
        this.vitalsService.loadVitals.next(true)

      })
    }
    this.formVital.reset()
  }

}
