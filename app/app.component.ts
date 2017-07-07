import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class= "container">
    <h1>{{currentProject}}</h1>
    <h3> Newly Admitted Animals: </h3>
    <animal-list [childAnimaList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <br>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentProject: string = 'Local Zoo';

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Tiger", "Tony", 10, "Carnivore", "San Diego", 3, "Male", "Being lazy in the sun", "Scratches behind his ears"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
