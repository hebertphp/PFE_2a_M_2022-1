const id_result=document.querySelector("#result");
const id_n1=document.querySelector("#n1");
const id_n2=document.querySelector("#n2");
const id_op=document.querySelector("#op");

function calcula(){
    id_result.innerHTML=id_n1.value;
}

function calc(n1,n2,op){
    if(op=="+"){
        return n1+n2;
    }
    else if(op=="-"){
        return n1-n2;
    }   
    else if(op=="*"){
        return n1*n2;
    } 
    else if(op=="/"){
        return n1/n2;
    } 
    else if(op=="%"){
        return n1%n2;
    } 
    else{
        return "Operador não conhecido: "+op;
    } 
    
}


