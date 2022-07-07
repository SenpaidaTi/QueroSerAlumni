
function pulaLinha(){
    document.write("<br><br>");
}
/*function mostra(text){
    document.write(text);
    pulaLinha();
}*/

/*
const NumerosPares = () =>{
    let numero = 0;

    for(numero <= 100; numero % 2 ; numero ++){
        mostra(numero);
        
    }
    console.log(numero);
}
*/


const NumerosPares = ()=>{
    //var numero = parseInt(document.getElementById("numero").value);
    var resposta = document.getElementById('Resposta');
    var numeropar = 0;


    while( numeropar <=100){
        if(numeropar % 2 ==0){
            document.write(numeropar);
        }else{
            document.write(" , ")
        }
        numeropar++;
    }

    document.write("<br><br> <p>Fim</p>")

    let par = 0;
    while(par < 100) {
		document.write((par+=2) + " ");
	}
    resposta.innerHTML = par;
    document.write("<br><p>FIM<p>");
    //resposta.innerHTML = numeroPar;

}











