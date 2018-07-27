//Haz un programa que pida 3 números y los ordene de menor a mayor.

var num1 = prompt ("Numero 1");
var num2 = prompt ("Numero 2");
var num3 = prompt ("Numero 3");


	var numeros =[num1, num2, num3];

	numeros = numeros.sort();
	document.write("Orden de menor a mayor ", numeros);