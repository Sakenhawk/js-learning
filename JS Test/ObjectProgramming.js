/*
function Calculator(){
  this.read = function(){
    this.a = + prompt("Введите первое число","");
    this.b = + prompt("Введите второе число","");
  }
  this.sum = function(a,b){
    return this.a + this.b;
  }
  this.mul = function(a,b){
    return this.a * this.b;
  }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );
*/

//Task4 Калькулятор
let calculator = {
  read(){
     this.numb1 = +prompt("Введите первое число");
     this.numb2 = +prompt("Введите второе число",'');
      },
  sum(numb1, numb2){
    return this.numb1 + this.numb2 ;
  },
  mul(){
    return this.numb1 * this.numb2;
  }
};
calculator.read();
alert( "Сумма чисел: " + calculator.sum() );
alert( calculator.mul() );
