const id_dv1=document.querySelector("#dv1");
const id_dv2=document.querySelector("#dv2");
var x = [10     ,   20  ,   30];
//      0  0 1 2  1 0 1 2  2 0 1 2   
var m = [ [1,2,3], [4,5,6], [7,8,9]];
/*
var m = [
[1,2,3],
[4,5,6],
[7,8,9]
];
*/
id_dv1.innerHTML=x[0];
id_dv2.innerHTML=m[1][2];//6