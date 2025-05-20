function buy() {
    let typeTicket = document.getElementById('type-ticket');
    let quantity = parseInt(document.getElementById('quantity').value);

    if (typeTicket.value == 'pista') {
        buyPista(quantity);
    } else if (typeTicket.value == 'superior') {
        buySuperior(quantity);
    } else {
        buyInferior(quantity);
    }
}

function buyPista(quantity) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantity > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        alert('Compra realizada com sucesso!');
        qtdPista = qtdPista - quantity;
        document.getElementById('qtd-pista').textContent = qtdPista;  
    }
}

function buySuperior(quantity) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantity > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        alert('Compra realizada com sucesso!');
        qtdSuperior = qtdSuperior - quantity;
        document.getElementById('qtd-superior').textContent = qtdSuperior;  
    }
}


function buyInferior(quantity) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantity > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        alert('Compra realizada com sucesso!');
        qtdInferior = qtdInferior - quantity;
        document.getElementById('qtd-inferior').textContent = qtdInferior;  
    }
}