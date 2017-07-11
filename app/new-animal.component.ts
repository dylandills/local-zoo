import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'new-animal',
  template: `
    <div id="newAnimal">
      <h1>Add a new animal to our zoo!</h1>
      <label>Enter the Species of the Animal:</label>
      <input #newSpecies>
      <label>Enter the Name of the Animal:</label>
      <input #newName>
      <label>Enter the Age:</label>
      <input #newAge>
      <label>Enter Diet:</label>
      <input #newDiet>
      <label>Enter Zoo Location:</label>
      <input #newZooLocation>
      <label>Enter Number of Caretakers Needed:</label>
      <input #newNeedCare>
      <label>Enter Sex:</label>
      <input #newSex>
      <label>Likes:</label>
      <input #newOneLike>
      <label>Dislikes:</label>
      <input #newOneDislike>
      <br><br><br>
      <button (click)="submitForm(
      newSpecies.value,
      newName.value,
      newAge.value,
      newDiet.value,
      newZooLocation.value,
      newNeedCare.value,
      newSex.value,
      newOneLike.value,
      newOneDislike.value);
      newSpecies.value ='';
      newName.value='';
      newAge.value='';
      newDiet.value='';
      newZooLocation.value='';
      newNeedCare.value='';
      newSex.value='';
      newOneLike.value='';
      newOneDislike.value='';">Add!</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, zooLocation: string, needCare: number, sex: string, oneLike: string, oneDislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, zooLocation, needCare, sex, oneLike, oneDislike);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
