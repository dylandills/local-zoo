import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h1>Edit {{childSelectedAnimal.name}}</h1>
      <label>Species:</label><br>
      <input [(ngModel)]="childSelectedAnimal.species"><br>
      <label>Name:</label><br>
      <input [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Age:</label><br>
      <input [(ngModel)]="childSelectedAnimal.age"><br>
      <label>Diet:</label><br>
      <input [(ngModel)]="childSelectedAnimal.diet"><br>
      <label>Location:</label><br>
      <input [(ngModel)]="childSelectedAnimal.zooLocation"><br>
      <label>Number of Caretakers:</label><br>
      <input [(ngModel)]="childSelectedAnimal.needCare"><br>
      <label>Sex:</label><br>
      <input [(ngModel)]="childSelectedAnimal.sex"><br>
      <label>Likes:</label><br>
      <input [(ngModel)]="childSelectedAnimal.oneLike"><br>
      <label>Dislikes:</label><br>
      <input [(ngModel)]="childSelectedAnimal.oneDislike"><br>
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
