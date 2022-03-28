/*
Comparar duas variáveis x , y
x = 2022;
y = "2022";
Saída
Igualdade: 
Idêntico:
Não igual: 
Não idêntico:
1 min....
*/
var x,y,res,res_A,res_B;
x=2022;
y="2022";
res=(x==y);
document.write("Igualdade: "+res+"<br>");
res=(x===y);
document.write("Idêntico: "+res+ "<br>");
res=(x!=y);
document.write("Não igual: "+res+ "<br>");
res=(x!==y);
document.write("Não indêntico: "+res+ "<br>");