import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-consultations',
  templateUrl: './form-consultations.component.html',
  styleUrls: ['./form-consultations.component.scss']
})
export class FormConsultationsComponent implements OnInit {
  isNewConsultation: boolean = false
  formConsultation!: FormGroup


  constructor(private route: ActivatedRoute, private fB: FormBuilder) { }

  ngOnInit(): void { 
    let { isNew } = this.route.snapshot.data
    this.isNewConsultation = isNew
    this.formConsultation = this.fB.group({
      consultationDate: ['', Validators.required]
    })
  }

  onSubmit(): void{
    console.log(this.formConsultation.value)
  }

}
