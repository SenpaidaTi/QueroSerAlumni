var itens = document.querySelectorAll('.convidado');



var totalDasIdades = 0;

for(var i = 0; i < itens.length; i++) {

    var idade = itens[i].querySelector('.idade').textContent;
    totalDasIdades+=parseInt(idade);
}

document.querySelector('.total').textContent = totalDasIdades;