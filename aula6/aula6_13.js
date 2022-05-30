const id_dv1=document.querySelector("#dv1");
const id_dv2=document.querySelector("#dv2");
var x = [10     ,   20  ,   30];
//      0  0 1 2  1 0 1 2  2 0 1 2   
var m = [ [1,2,3,44,55], [4,5,6], [7,8,[9,99]]];
/*
var m = [
[1,2,3],
[4,5,6],
[7,8,9]
];
*/
id_dv1.innerHTML=x[0];
id_dv2.innerHTML=m.length+"<hr>"+m[0].length;//3 <hr> 5
// length tamanho ou quantidade de valores, por dimensão
// m.length será igual a 3, pois na primeira dimensão temos 3 conjuntos de valores
// m[0].length será igual a 5, pois tem 5 valores nas dimensão [0]