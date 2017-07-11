import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="nav">
        <h1><img src="resources/img/zoboo.jpg" alt="Zoboomafoo"></h1>
      </div>
      <div class="content-main">
        <div class="animal">
          <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
          <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        </div>
        <div class="add-animal">
          <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
        </div>
      </div>
      <div class="footer">
        <h3>Animal Junction is the place to be! Thanks for visiting!</h3>
      </div>
    </div>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Tiger", "Tony", 10, "Carnivore", "San Diego", 3, "Male", "Being lazy in the sun", "Scratches behind his ears"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
