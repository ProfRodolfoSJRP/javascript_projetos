// Lista de Cartas com mensagens 
// VETOR 
const cartas = [
 {nome : "O Preguiçoso", mensagem:"Hoje é dia de Netflix. A Mimir"},
 {nome : "O Gato Malhado", mensagem:"MEAU!, Bora academia seu frango ?"},
 {nome : "O Café Estragado", mensagem:"Você vai fazer café e vai ficar Amargo"},
 {nome : "O WI-FI Puff", mensagem:"O Wifi vai cair quando fizer PIX"}
];

function girarCarta(){
    const carta = document.getElementById("carta")
    const verso = document.getElementById("verso")

    // Sorteia uma carta aleatoria
    const indice = Math.floor(Math.random() * cartas.length)
    const cartaSorteada = cartas[indice]

    // Atualiza o conteudo da Carta
    verso.innerHTML = `<strong>${cartaSorteada.nome}</strong><br>${cartaSorteada.mensagem}`
    
    // Gira a Carta
    carta.classList.toggle("virada")
}