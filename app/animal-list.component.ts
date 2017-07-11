import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="" selected="selected">Filter by:</option>
    <option value="allAnimals">All Animals:</option>
    <option value="overTwo">Over 2 Years Old:</option>
    <option value="underTwo">Under 2 Years Old:</option>
  </select>
  <ol>
    <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
    <label>Animal Species: </label>{{currentAnimal.species}}<br>
    <label>Animal Name: </label>{{currentAnimal.name}}<br>
    <label>Age: </label> {{currentAnimal.age}}<br>
    <label>Diet: </label>{{currentAnimal.diet}}<br>
    <label>Zoo Location: </label>{{currentAnimal.location}}<br>
    <label>Caretakers Needed: </label>{{currentAnimal.needCare}}<br>
    <label>Sex: </label>{{currentAnimal.sex}}<br>
    <label>One Like: </label>{{currentAnimal.oneLike}}<br>
    <label>One Dislike: </label>{{currentAnimal.oneDislike}}<br><br><br>
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal!</button></li>
  </ol>
  `
})
export class AnimalListComponent {
 @Input() childAnimalList: Animal[];
 @Output() clickSender = new EventEmitter();

 editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

 filterByAge: string = "ageAnimals";

 onChange(optionFromMenu) {
   this.filterByAge = optionFromMenu;
 }

 toggleDone(clickedAnimal: Animal, setAge: boolean) {
   clickedAnimal.done = setAge;
 }

 isDone(clickedAnimal: Animal) {
  if(clickedAnimal.done === true) {
  }
 }

}
