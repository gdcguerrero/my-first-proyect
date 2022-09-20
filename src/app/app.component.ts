import { Component } from '@angular/core';
// import { character } from "./models/character.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  // basicTypes(){}

  // arraysAndObjects(){
  //   let skill : string[] = ['punch','kick','damage','special mov'];
  //   console.log(skill);
    
  //   const character : Character {
  //     name : 'Waluigi',
  //     healthPoints : 100,
  //     live : true,
  //     skill : skill
  //   }

  //   character.name = 'Mario';
  //   character.color = 'red';

  //   console.log(character);
    
  // }

  // ifStatement(){
  //   console.log('ifStatement');
  //   let x : number = 20, y : number =10;

  //   if(x > y){
  //     console.log('x es mayor a y');
  //   }
  //   else if (x < y) {
  //     console.log('x es menor a y');
  //   }
  //   else if (x == y){
  //     console.log('x es igual a y');
  //   }
  //   else {
  //     console.log('error en los parametros o en la comparacion');
  //   }
  // }

  // switchStatement(){
  //   let a : number = 20, b : number = 10;

  //   switch (a-b) {
  //     case 0:
  //       console.log('Resultado es 0');
  //       break;
  //     case 5:
  //       console.log('Resultado es 5');
  //       break;
  //     case 10:
  //       console.log('Resultado es 10');
  //       break;
  //     case 15:
  //       console.log('Resultado es 15');
  //       break;
  //     default:
  //       console.log('mas alla');
  //       break;
  //   }
  // }

  // whileStatement(){
  //   let counter : number = 1;
  //   while (counter == 10) {
  //     console.log('Ejecucion: ' + counter);
  //     counter++;
  //   }

  //   array.forEach(function (value,index) {
  //     console.log(value);
  //     console.log(index);
  //   });
  // }

  // tryCatchStatement(){
  //   try {
  //     console.log('hola');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  basicFunctions(){
    function sumNumbers (a: number, b: number) : number {
      return a+b;
    }
    console.log(sumNumbers(1,2));

    const ARROW_NUM = (a: number, b: number) : number => {return a+b}
    console.log(ARROW_NUM(1,8));

    function multiplyNumbers (a: number, b: number, c?: number) : number {
      return a*b* (c ?? 1);
    }
    console.log(multiplyNumbers(2,2));
    console.log(multiplyNumbers(2,2,3));
    
    const RESULT : number = multiplyNumbers(2,2);

    function printNumber(a:number) : void {
      console.log(a);
    }
    printNumber(8);
  }

  arrayDestructuring(){
    const AVENGERS : string[] = ['Cap', 'Iron', 'viuda'];
    const [p1] = AVENGERS;
    const [ , p2 , ] = AVENGERS;

    console.log('1: '+ p1);
    console.log('2: '+ p2);
    console.log('3: '+ AVENGERS[2]);
  }

  constructor(){
    this.arrayDestructuring();
  }
}