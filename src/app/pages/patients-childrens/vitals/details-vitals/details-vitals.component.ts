import { Component, OnInit } from '@angular/core';
import { VitalsService } from '../vitals.service';

@Component({
  selector: 'app-details-vitals',
  templateUrl: './details-vitals.component.html',
  styleUrls: ['./details-vitals.component.scss']
})
export class DetailsVitalsComponent implements OnInit {

  constructor(public vitalsService: VitalsService) { }

  ngOnInit(): void {
  }

}
