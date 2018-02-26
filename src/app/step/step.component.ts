import { Component, OnInit } from '@angular/core';
import { Step } from './step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  step: Step = {
    id: 1,
    question: 'Question text',
    helpfulText: 'Helpful text',
    options: [{text: 'Option 1 text', nextStep: 2, previousStep: 0}]
  };

  constructor() { }

  ngOnInit() {
  }

}
