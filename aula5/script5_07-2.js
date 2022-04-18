var destino;
destino=prompt("Digite seu destino: ");//São Paulo
//toUpperCase()
if(destino == "São Paulo"){
    document.write("--Seja bem vindo a cidade que nunca para!");
}
else if(destino == "New York"){
    document.write("--Seja bem vindo a Big Apple!");
}
else{
    document.write("--Não encontramos seu destino!");
}
/*
switch (destino) {
    case "São Paulo":
        document.write("Seja bem vindo a cidade que nunca para!");
        break;
    case "New York":
        document.write("Seja bem vindo a Big Apple!");
        break;
    default:
        document.write("Não encontramos seu destino!");
}
*/