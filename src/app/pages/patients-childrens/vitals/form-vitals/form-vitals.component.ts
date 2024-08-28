import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-vitals',
  templateUrl: './form-vitals.component.html',
  styleUrls: ['./form-vitals.component.scss']
})
export class FormVitalsComponent implements OnInit {
  isNewVital: boolean = false
  formVital!: FormGroup

  constructor(private route: ActivatedRoute, private fB: FormBuilder) { }

  ngOnInit(): void {
    let { isNew } = this.route.snapshot.data
    this.isNewVital = isNew
    this.formVital = this.fB.group({
      dateTaken: ['', Validators.required]
    })
  }
  onSubmit(): void {
    console.log(this.formVital.value)
  }

}
