import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrls: ['./search-and-filters.component.scss']
})
export class SearchAndFiltersComponent implements OnInit {
  inputFilter = new FormControl('', { nonNullable: true });

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.inputFilter.valueChanges.pipe(
      startWith(''),
      map((text) => this.search(text)),
    ).subscribe(patientsFiltered => {
      this.patientsService.patientsFiltered$.next(patientsFiltered)
    })
  }

  search(text: string): any {
    console.log('text');
   return this.patientsService.patients.filter((patient: any) => {
      const term = text.toLowerCase();
      return (
        patient.name.toLowerCase().includes(term) ||
        patient.surname.toLowerCase().includes(term)
      );
    });
  }

}
