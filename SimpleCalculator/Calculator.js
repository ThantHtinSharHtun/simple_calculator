function getNumber(num){
	var inputvar=document.getElementById("input");
	switch(num)
	{
	case 1:inputvar.value+='1';
	break;
	case 2:inputvar.value+='2';
	break;
	case 3:inputvar.value+='3';
	break;
	case 4:inputvar.value+='4';
	break;
	case 5:inputvar.value+='5';
	break;
	case 6:inputvar.value+='6';
	break;
	case 7:inputvar.value+='7';
	break;
	case 8:inputvar.value+='8';
	break;
	case 9:inputvar.value+='9';
	break;
	case 0:inputvar.value+='0';
	break;
		
	}
}
function clearScreen(){
	document.getElementById("input").value="";
	document.getElementById("answer").value="";
}
function getOperand(operand){
	var inputvar=document.getElementById("input");
	switch(operand)
	{
	case '+':inputvar.value+='+';
	break;
	case '-':inputvar.value+='-';
	break;
	case 'x':inputvar.value+='*';
	break;
	case '/':inputvar.value+='/';
	break;
	case '+/-':inputvar.value+='-'+inputvar.value;
	break;
}
}
function backspace()
{
	var inputvar=document.getElementById("input");
	var x=inputvar.value;
	if(x.length>0){x=x.substring(0,x.length-1);
	inputvar.value=x;
	}
	}
function compute(){
	var inputvar=document.getElementById("input");
	ans= Math.floor(eval(input.value));
	document.getElementById("answer").value= '='+ans;
}
var i=0;
function bracket()
{
  var inputvar=document.getElementById("input");
  if(i==0){inputvar.value+='(';
  			i=1;}
  else if(i==1){inputvar.value+=')';
	i=0;}
}