import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
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

  public inputControls = [
    {
      label: 'Nombre',
      formControlName: 'name'
    },
    {
      label: 'Apellido',
      formControlName: 'surname'
    },
    {
      label: 'Fecha de Nacimiento',
      formControlName: 'dateOfBirth'
    },
    {
      label: 'Teléfono',
      formControlName: 'phoneNumber'
    },
    {
      label: 'Dirección',
      formControlName: 'address'
    },
    {
      label: 'Correo Electrónico',
      formControlName: 'email'
    },
    {
      label: 'Contacto de emergencia',
      formControlName: 'emergencyContact'
    },
    {
      label: 'Seguro Médico',
      formControlName: 'medicalInsurance'
    },
  ]

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
      medicalInsurance: ['', [Validators.required,  Validators.minLength(3)]]
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

  isValidField( field: string): boolean | null{
    return this.formPatient.controls[field].errors &&
            this.formPatient.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if(!this.formPatient.controls[field]) return null

    const errors = this.formPatient.controls[field].errors || {}

    for(const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este Campo es requerido'

        case 'minLength':
          return `Mínimo ${errors['minLength'].requiredLength } Caracters`;
      }
    }
    return null
  }

  onSubmit(): void {
    if(this.formPatient.invalid){
      this.formPatient.markAllAsTouched();
      return
    }
    if(this.isNewPatient){
      this.patientsService.postPatient(this.formPatient.value)
      .subscribe(newPatient => {
        this.patientsService.patientSelected$.next(newPatient)
        this.patientsService.loadPatients.next(true)
      })

    }else{
    // console.log(this.patientsService.patientSelected$.value)
    this.patientsService.putPatient(this.formPatient.value)
    .subscribe(putPatient => {
      this.patientsService.patientSelected$.next(putPatient)
      this.patientsService.loadPatients.next(true)
    })
  }
  this.formPatient.reset()
  }


}
