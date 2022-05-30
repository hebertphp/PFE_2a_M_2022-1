const id_dv1=document.querySelector("#dv1");
const id_dv2=document.querySelector("#dv2");
const id_usuario=document.querySelector("#usuario");

var notas=[10,9,8];
var outras_notas=[4,3,2,1];
// document.write(notas+"<hr>"); direcionar para id="dv1"
id_dv1.innerHTML=notas;

var novas_notas=notas.concat(7,6,5);
// document.write(novas_notas+"<hr>"); direcionar para id="dv2"
id_dv2.innerHTML=novas_notas;

var junta_tudo=novas_notas.concat(outras_notas); 
// document.write(junta_tudo+"<hr>"); direcionar para id="usuario"
id_usuario.value+=junta_tudo;