function carregar() {
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
/* let hora = data.getHours() */
let hora = 14
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'manha1.webp'
    document.body.style.background = '#e9cc9f'
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'tarde1.webp'
    document.body.style.background = '#fe8d38'
} else {
    //BOA NOITE!
    img.src = 'noite1.webp'
    document.body.style.background = '#0e0e0c'
}
}