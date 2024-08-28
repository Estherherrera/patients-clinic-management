import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { VitalsService } from '../vitals.service';

@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrls: ['./search-and-filters.component.scss']
})
export class SearchAndFiltersComponent implements OnInit {
  inputFilter = new FormControl('', {nonNullable: true})

  constructor(private vitalsService: VitalsService) { }

  ngOnInit(): void {
    this.inputFilter.valueChanges.pipe(
      startWith(''),
      map((text) => this.search(text)),
    ).subscribe(vitalsFiltered => {
      this.vitalsService.vitalsFiltered$.next(vitalsFiltered)
    })
  }

  search(text: string): any {
    console.log(text);
   return this.vitalsService.vitals.filter((vital: any) => {
      const term = text.toLowerCase();
      return (
        vital.dateTaken.toLowerCase().includes(term) ||
        vital.bloodPressure.toLowerCase().includes(term)
      );
    });
  }
}
