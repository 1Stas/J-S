'use strict';
// let num = prompt();
// if (num < 0) {alert(-1);}
// if (num == 0) {alert(0);}
// if (num > 0) {alert(1);}

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

// let a = prompt('aaa', "");
// let b = prompt('bbb', "");
// let result = (a + b > 4) ? 'Мало' :
// 	(a + b < 4) ? 'Много' :
//   'Нормано';
// alert( result );

let result;
let a = prompt('aaa', "");
let b = prompt('bbb', "");

if (a + b < 4) {
	alert( 'Мало' );
}
if (a + b > 4) {
	alert(" Много ");
} 
if (a + b == 4) {
  alert( 'Номано' );
}

