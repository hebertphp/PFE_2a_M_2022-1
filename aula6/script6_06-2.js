var i;
for (i=128512;i<=128580;i++){
   /* document.write("&#"+i+" - "+i+"<br>"); comentado */
    document.querySelector("#tb1").innerHTML+="<tr><td>&#"+i+"</td><td>"+i+"</td></tr>";
}

/*
        <tr>
            <td>&#128512</td>
            <td>128512</td>
        </tr>
Desafio 2
Criar um looping para pegar e mostrar os emojis:
Saída em tabela!
Emoji   Valor em decimal
:)      128512

de: 128512
até:128580

*/