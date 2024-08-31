import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './modals/alert/alert.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ListComponent,
    NavbarComponent,
    AlertComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    ListComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
