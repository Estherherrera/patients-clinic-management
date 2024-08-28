import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { DetailsConsultationsComponent } from './details-consultations/details-consultations.component';
import { ConsultationsComponent } from './consultations.component';
import { SharedModule } from '../../../shared/shared.module';
import { SearchAndFiltersComponent } from './search-and-filters/search-and-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormConsultationsComponent } from './form-consultations/form-consultations.component';


@NgModule({
  declarations: [
    DetailsConsultationsComponent,
    ConsultationsComponent,
    SearchAndFiltersComponent,
    FormConsultationsComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ConsultationsModule { }
