let agora = new Date() /* utilizado para colocar data, hora, minutos, segundos, ... atual do sistema */
let hora = agora.getHours() /* utilizado para colocar hora */
let minutos = agora.getMinutes() /* utilizado para colocar minutos */
console.log(`Agora sao exatamente ${hora}:${minutos} horas.`)

if (hora < 0 || hora > 24){
    console.log('Hora inesistente')
} else if (hora < 5) {
    console.log('Boa noite!')
} else if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora <= 24){
    console.log('Boa noite!')
}