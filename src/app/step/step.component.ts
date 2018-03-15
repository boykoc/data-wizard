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
  stepsLength = Object.keys(this.steps).length;
  
  answers = [];

  filteredAnswers = [];

  step: Step = this.steps[1];

  visible = true;

  constructor() { }

  ngOnInit() {
  }

  onSelect(step: Step, option: number) {
    this.answers.push({step: step.id, answer: option});
    this.step = this.steps[step.id + 1];
  }

  onToggle() {
    this.filterAnswers();
    this.visible = !this.visible;
  }

  filterAnswers() {
      this.filteredAnswers = this.answers.filter((answer) => 
        this.steps[answer.step].options[answer.answer].finishText !== ''
      )
  }

  onPrint() {
    window.print();
  }
}
