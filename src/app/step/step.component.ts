import { Component, OnInit } from '@angular/core';
import { Step } from './step';
import { STEPS } from '../steps';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  steps = STEPS;
  
  answers = [];

  step: Step = this.steps[1];

  constructor() { }

  ngOnInit() {
  }

  onSelect(step: Step, option: number) {
    this.answers.push({step: step.id, answer: option});
    this.step = this.steps[step.id + 1];
  }
}
