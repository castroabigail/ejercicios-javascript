//ejercicio bien condicionales
/*Haz un programa que pida 2 números. 
Si el primero es mayor al segundo hacer las operaciones de suma y resta.
Si el segundo es mayor al primero hacer las operaciones de multiplicación y división.
Si los numeros son iguales pedir otros diferentes.*/

	var num1 = prompt ("Primer numero");
	var num2 = prompt ("Segundo numero");

		if (num1 > num2){
			var operacion1 = parseInt(num1) + parseInt(num2);
			var operacion2 = parseInt(num1) - parseInt(num2);
			document.write(" Resultado Suma " + operacion1);
			document.write(" Resultado Resta " + operacion2);
			}else if (num1 < num2){
				var operacion3 = parseInt(num1) * parseInt(num2);
				var operacion4 = parseInt(num1) / parseInt(num2);
				document.write(" Resultado Multiplicación " + operacion3);
				document.write(" Resultado división " + operacion4);
			}else {
			document.write("Son iguales poner números diferentes");}
		

			
			