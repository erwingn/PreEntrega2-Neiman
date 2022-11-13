
const min = 1
let totalPartidas = 0
let partidasGanadas = 0
let winRate = 0
let seguirJugando = true

//
const palosCarta =['Oro','Basto','Copa','Espada'];
const numerosCarta = [1,2,3,4,5,6,7,8,9,10,11,12];
let mazo = [];
let mazoCartasSeleccionadas = [];

class naipes {
    constructor(palo, numero) {
        this.palo = palo
        this.numero = numero
    }
}

palosCarta.forEach(p=>{
    numerosCarta.forEach(n=>{
        let naipe = new naipes(p,n)
        mazo.push(naipe)
    })
})


function cartaAleatoria(mi, ma) {
    return Math.trunc(Math.random() * (ma - mi) + mi)
  }


function generarCarta(){
    let numeroAleatorio = cartaAleatoria(min, mazo.length)
    carta = mazo[numeroAleatorio]
    mazo.splice(numeroAleatorio,1)
    mazoCartasSeleccionadas.push(carta)
    return carta
}


  while(seguirJugando===true && mazo.length>0){
    
    carta1 = generarCarta()

    do{
        prediccion = parseInt(prompt(`La carta actual es ${carta1.numero} ${carta1.palo}. Indicar si la proxima carta sera: 1-mayor, 2-igual o 3-menor`))
        if(prediccion>=1 && prediccion<=3 ){

        } else {
            alert('Error de datos. Por favor ingrese un valor entre 1 y 3')
        }
    } while(prediccion<1 || prediccion>3 || isNaN(prediccion)) 
    
    carta2 = generarCarta()
    totalPartidas++

    if(prediccion===1){
        if(carta2.numero>carta1.numero){
            partidasGanadas++
            alert(`Correcto. La carta ${carta2.numero} ${carta2.palo}  es mayor a la ${carta1.numero} ${carta1.palo} `)
        } else {
            alert(`Incorrecto. La carta ${carta2.numero} ${carta2.palo}  NO es mayor a la ${carta1.numero} ${carta1.palo}`)
        }
    } else if (prediccion===2){
        if(carta2.numero===carta1.numero){
            partidasGanadas++
            alert(`Correcto. La carta ${carta2.numero} ${carta2.palo}  es igual a la ${carta1.numero} ${carta1.palo}`)
        } else {
            alert(`Incorrecto. La carta ${carta2.numero} ${carta2.palo}  NO es igual a la ${carta1.numero} ${carta1.palo}`)
        }
    } else {
        if(carta2.numero<carta1.numero){
            partidasGanadas++
            alert(`Correcto. La carta ${carta2.numero} ${carta2.palo} es menor a la ${carta1.numero} ${carta1.palo}`)
        } else {
            alert(`Incorrecto. La carta ${carta2.numero} ${carta2.palo} NO es menor a la ${carta1.numero} ${carta1.palo}`)
        }
    }


    do{
        decision = parseInt(prompt(`Desea seguir jugando: 1-Si o 2-No`))
        if (decision===1){
            seguirJugando = true
        } else if (decision===2 ) {
            seguirJugando = false
            winRate = partidasGanadas/totalPartidas*100
            alert(`Felicitaciones la partida ha finalizado. Usted jugo ${totalPartidas} partidas y su winrate es de ${winRate.toFixed(2)} %`)
        } else{ 
            alert('Error de ingreso de datos. Por favor ingrese un valor entre 1 y 2')
        }
    } while(decision>2 || decision<1 || isNaN(decision))
    
}
