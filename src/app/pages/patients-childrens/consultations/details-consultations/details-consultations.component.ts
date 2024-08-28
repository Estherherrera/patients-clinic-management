import { Component, OnInit } from '@angular/core';
import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-details-consultations',
  templateUrl: './details-consultations.component.html',
  styleUrls: ['./details-consultations.component.scss']
})
export class DetailsConsultationsComponent implements OnInit {

  constructor(public consultationsService: ConsultationsService) { }

  ngOnInit(): void {
  }

}
