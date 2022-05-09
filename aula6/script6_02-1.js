//      0   1   2
var x=[2020,2,"Hoje"];
x[0]++;//2021
x[1]=x[0]%2;//1
x[2]+=" em dia";//Hoje em dia
document.querySelector("#dv1").innerHTML=x[0]+"<br>"+x[1];
document.querySelector(".teste").innerHTML=x[2];
/*
x[0] e x[1] saída para o id="dv1"
x[2] saída para a class="teste"
*/
//document.write(x[0]+"<br>");
//document.write(x[1]+"<br>");
//document.write(x[2]+"<br>");