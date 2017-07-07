import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <label>Edit Animal:</label>
      <input [(ngModel)] = "childSelectedAnimal.species">
      <input [(ngModel)] = "childSelectedAnimal.name">
      <input [(ngModel)] = "childSelectedAnimal.diet">
      <input [(ngModel)] = "childSelectedAnimal.zooLocation">
      <input [(ngModel)] = "childSelectedAnimal.needCare">
      <input [(ngModel)] = "childSelectedAnimal.sex">
      <input [(ngModel)] = "childSelectedAnimal.oneLike">
      <input [(ngModel)] = "childSelectedAnimal.oneDislike">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
