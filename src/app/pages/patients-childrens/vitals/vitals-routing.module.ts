import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsVitalsComponent } from './details-vitals/details-vitals.component';
import { VitalsComponent } from './vitals.component';
import { FormVitalsComponent } from './form-vitals/form-vitals.component';

const routes: Routes = [
  {
    path: '',
    component: VitalsComponent,
    children: [
      {
        path: ':id',
        component: DetailsVitalsComponent
      },
      {
        path: ':id/create',
        component: FormVitalsComponent,
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
export class VitalsRoutingModule { }
