function carregar() {
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()
/* let hora = 4 */
msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'manha3.webp'
    document.body.style.background = '#6f815b'
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'tarde3.webp'
    document.body.style.background = '#fe8d38'
} else {
    //BOA NOITE!
    img.src = 'noite3.webp'
    document.body.style.background = '#252a30'
}
}