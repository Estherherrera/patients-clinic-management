import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'list-patients',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'list-patients/:id/list-vitals',
    loadChildren: () =>
      import('./patients-childrens/vitals/vitals.module').then(
        (m) => m.VitalsModule
      ),
  },
  {
    path: 'list-patients/:patientId/list-consultations',
    loadChildren: () =>
      import('./patients-childrens/consultations/consultations.module').then(
        (m) => m.ConsultationsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'list-patients/0',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
