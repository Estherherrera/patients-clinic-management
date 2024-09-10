import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { FormPatientsComponent } from './form-patients/form-patients.component';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients.routing.module';
import { SearchAndFiltersComponent } from './search-and-filters/search-and-filters.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    PatientsComponent,
    DetailsPatientComponent,
    SearchAndFiltersComponent,
    FormPatientsComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
  ]
})
export class PatientsModule { }
