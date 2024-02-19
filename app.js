function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    let intervalo = ate - de + 1;

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }
      
    if (quantidade > intervalo) {
        alert ('A quantidade de números a serem sorteados não pode ser maior que o intervalo de números possíveis');
        return;
    }
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    if (quantidade > 1) {
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    } else {
        resultado.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${sorteados.join(', ')}</label>`;
    }

    alterarStatusDoBotao()
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao')
        
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        
    }
}

function reiniciar() {
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
   document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
   alterarStatusDoBotao();
}
