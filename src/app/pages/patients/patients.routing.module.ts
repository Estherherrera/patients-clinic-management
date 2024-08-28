import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { PatientsComponent } from './patients.component';
import { FormPatientsComponent } from './form-patients/form-patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      {
        path: ':id',
        component: DetailsPatientComponent 
      },
      {
        path: ':id/create',
        component: FormPatientsComponent,
        data: {
          isNew: true
        }
      },
      {
        path: ':id/edit',
        component:FormPatientsComponent
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
