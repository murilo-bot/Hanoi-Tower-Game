// --- Criando os Discos e Torres --- //

const box = document.getElementById('box');
const button = document.getElementById('reset')


function criarTorres() {
  for (let i = 1; i < 4; i++) {
    const torreA = document.createElement('ul');
    torreA.className = `box_${i}`
    box.appendChild(torreA);
  }

}
criarTorres()

function criarDiscos() {
  for (let i = 3; i > 0; i--) {
    const discoA = document.createElement('li');
    discoA.className = `disco_${i}`
    document.getElementsByClassName('box_1')[0].appendChild(discoA);
  }

}
criarDiscos()


// --- Movimentação e Condição de movimento --- //


const torres = document.querySelectorAll("ul")
const disco = document.querySelector("li")

let discoAtual = "";
let torreSelecionaDestino = "";
let ultimoDiscoTorre = "";
let jogada = 0


for (let i = 0; i < torres.length; i++) {
  torres[i].addEventListener("click", moverDisco)

}

function moverDisco(evt) {

  if (jogada === 0) {
    jogada = 1
    discoAtual = evt.target.lastElementChild
  } else if (jogada === 1) {
    torreSelecionaDestino = evt.target
    ultimoDiscoTorre = torreSelecionaDestino.lastElementChild
    condicaoDeMovimento(discoAtual, ultimoDiscoTorre, torreSelecionaDestino)
    discoAtual = "";
    jogada = 0;
  }
}

function condicaoDeMovimento(discoAtual, ultimoDiscoTorre, torreSelecionaDestino) {

  if ((ultimoDiscoTorre === null) || (discoAtual.clientWidth < ultimoDiscoTorre.clientWidth)) {
    return torreSelecionaDestino.appendChild(discoAtual)
  } else {
    alert("Você não pode fazer este movimento")
  }
}

// --- BOTÃO RESET --- //

button.addEventListener("click", resetarJogo)


function resetarJogo (evt){   
  
    const torre1 = document.getElementsByClassName('box_1')
    const torre2 = document.getElementsByClassName('box_2')
    const torre3 = document.getElementsByClassName('box_3')    
    

    let a = torre1[0].lastElementChild
    let b = torre2[0].lastElementChild
    let c = torre3[0].lastElementChild
    
    while(a){      
      torre1[0].removeChild(a)
      a = torre1[0].lastElementChild
    }
  
    while(b){      
      torre2[0].removeChild(b)
      b = torre2[0].lastElementChild
    }

    while(c){     
      torre3[0].removeChild(c)
      c = torre3[0].lastElementChild
    }
    discoAtual = "";
    torreSelecionaDestino = "";
    ultimoDiscoTorre = "";
    jogada = 0 
    criarDiscos()     
}

