
function reservar(btn) {

    // Obtém e altera a cor de fundo do botão
    let corAtual = window.getComputedStyle(btn).backgroundColor;

    if (corAtual === "rgb(255, 255, 0)") {
        btn.style.background = 'red'; // Reserva o lugar

    } else if (corAtual === "rgb(255, 0, 0)"){

        let desejaDesfazer = window.confirm("Esse lugar já foi ocupado. Deseja desfazer a reserva?");
        if (desejaDesfazer) {
            btn.style.background = 'yellow'; // Desfaz a reserva
            console.log("Reserva desfeita.");
        }
    }
}
      
function confirmar() {
    const msg = document.querySelector('#msg2')
    const elementos = document.querySelectorAll(".btn");
    codgo = []

    elementos.forEach((elemento) => {
        // Obtém a cor computada do elemento
        let corAtual = window.getComputedStyle(elemento).backgroundColor;

        // Verifica se a cor é vermelha (formato RGB)
        if (corAtual === "rgb(255, 0, 0)") { 
            elemento.style.backgroundColor = "blue"; // Troca para azul
            elemento.style.color = "white"; 
            
            
            
            codgo.push(elemento.innerText);
            msg.innerText = ''
            msg.innerText = `Acento ${codgo}, reservado com sucesso!!`       
        }
    });
}

