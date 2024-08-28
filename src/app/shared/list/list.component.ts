import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsService } from '../../pages/patients/patients.service';
import { TBody, THead } from './list.interface';
import { VitalsService } from '../../pages/patients-childrens/vitals/vitals.service';
import { ConsultationsService } from '../../pages/patients-childrens/consultations/consultations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input('itemsFiltered$') itemsFiltered$!: Observable<any>
  @Input('tHead') tHead!: THead;
  @Input('tBody') tBody!: TBody;

  numberRowSelected!: number

  constructor(private router: Router, private patientsService: PatientsService, private vitalsService: VitalsService, private consultationsService: ConsultationsService) { }

  ngOnInit(): void {
  }

  itemSelect(itemSelected: any, i: number): void{
    this.numberRowSelected = i;

    if(itemSelected.name){
        this.patientsService.patientSelected$.next(itemSelected)
    }
    if (itemSelected.dateTaken){
      this.vitalsService.vitalSelected$.next(itemSelected)
    }
    if(itemSelected.consultationDate){
      this.consultationsService.consultationSelected$.next(itemSelected)
    }
  }

}
