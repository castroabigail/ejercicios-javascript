//Haz un programa que calcule el factorial de cualquier número
	
	var n = prompt ("Numero para calcular factorial", "");
	var fact = 1;

	for (var i=1; i<=n ;i++){
		//document.write (fact + "x" +i+"="); // muestra todo el proceso

		//fact x 1=
		fact = fact*i;

		//document.write(fact+"</br>"); //muestra los resultados

	}
	document.write("El valor factorial de "+n+" es igual a " + fact) //muestra el
    //ultimo valor de fat