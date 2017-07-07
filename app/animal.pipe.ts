import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})


export class AnimalPipe implements PipeTransform {


  transform(input: Animal[], age) {
    var output: Animal[] = [];
    if(age === "underFive") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].age < 5) {
        output.push(input[i]);
  }
}
    return output;
  } else if (age === "overFive") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].age >= 5) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
