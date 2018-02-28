export class Step {
  id: number;
  question: string;
  helpfulText: string;
  tag: string;
  options: Array<{ text: string, nextStep: number, previousStep: number }>;
}
