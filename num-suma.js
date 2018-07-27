//Haz un programa que te pida 10 números y luego sume estos valores
	
	function suma()

	{
		var num1=Number(document.getElementById('n1').value);
		var num2=Number(document.getElementById('n2').value);
		var num3=Number(document.getElementById('n3').value);
		var num4=Number(document.getElementById('n4').value);
		var num5=Number(document.getElementById('n5').value);
		var num6=Number(document.getElementById('n6').value);
		var num7=Number(document.getElementById('n7').value);
		var num8=Number(document.getElementById('n8').value);
		var num9=Number(document.getElementById('n9').value);
		var num10=Number(document.getElementById('n10').value);
		
		var res=num1+num2+num3+num4+num5+num6
			+num7+num8+num9+num10;
			document.getElementById('res').value=res;
	}
	