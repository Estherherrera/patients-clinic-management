import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VitalsRoutingModule } from './vitals-routing.module';
import { DetailsVitalsComponent } from './details-vitals/details-vitals.component';
import { VitalsComponent } from './vitals.component';
import { SharedModule } from '../../../shared/shared.module';
import { SearchAndFiltersComponent } from './search-and-filters/search-and-filters.component';
import { FormVitalsComponent } from './form-vitals/form-vitals.component';





@NgModule({
  declarations: [
    DetailsVitalsComponent,
    VitalsComponent,
    SearchAndFiltersComponent,
    FormVitalsComponent
  ],
  imports: [
    CommonModule,
    VitalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ]
})
export class VitalsModule { }
