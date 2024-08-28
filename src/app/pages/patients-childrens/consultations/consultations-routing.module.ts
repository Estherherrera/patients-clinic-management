import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsConsultationsComponent } from './details-consultations/details-consultations.component';
import { ConsultationsComponent } from './consultations.component';
import { FormConsultationsComponent } from './form-consultations/form-consultations.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultationsComponent,
    children: [
      {
        path: ':id',
        component: DetailsConsultationsComponent 
      },
      {
        path: ':id/create',
        component: FormConsultationsComponent,
        data: {
          isNew: true
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
