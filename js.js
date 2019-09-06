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


// let a = prompt('aaa', "");
// let b = prompt('bbb', "");

// if (a + b < 4) {
// 	alert( 'Мало' );
// }
// else if (a + b > 4) {
// 	alert( 'Много' );
// } 
// else if (a + b == 4) {                               ????????????????
//   alert( 'Номано' );
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
//  (login == 'Директор') ? 'Здравствуйте' :
//  (login == '') ? 'Нет логина' :
//  '';

let result;
let a = Number(prompt('Назови первое число', ""));
let b = Number(prompt('Назови второе число', ""));
result = (a + b < 20) ? 'Мало' : 
result = (a + b > 20) ? 'Много' : 
result = (a + b == 20) ? 'Номано' : 
console.log( result );


