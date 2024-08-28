import { Component, OnInit } from '@angular/core';
import { ConsultationsService } from '../consultations.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrls: ['./search-and-filters.component.scss']
})
export class SearchAndFiltersComponent implements OnInit {
  inputFilter = new FormControl('', {nonNullable: true})

  constructor(private consultationsService: ConsultationsService) { }

  ngOnInit(): void {
    this.inputFilter.valueChanges.pipe(
      startWith(''),
      map((text) => this.search(text)),
    ).subscribe(consultationsFiltered => {
      this.consultationsService.consultationsFiltered$.next(consultationsFiltered)
    })
  }

  search(text: string): any {
    console.log(text);
   return this.consultationsService.consultations.filter((consultation: any) => {
      const term = text.toLowerCase();
      return (
        consultation.consultationDate.toLowerCase().includes(term) ||
        consultation.reasonForConsultation.toLowerCase().includes(term)
      );
    });
  }
}
