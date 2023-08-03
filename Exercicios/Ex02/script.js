
function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var now = new Date()
    var currentHour = now.getHours()
    msg.innerHTML= `Agora sao ${currentHour} horas`
    if(currentHour >= 0 && currentHour < 12) {
        msg.innerHTML += '<p><strong>Bom dia!'
        img.src = 'omoridia.png'
        document.body.style.background = "#e2dc9f"
    } else if(currentHour >= 12 && currentHour < 18){
        msg.innerHTML += '<p><strong>Boa tarde!'
        img.src = 'basilmari.png'
        document.body.style.background = "#b9846f"
    } else {
        msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
        img.src = 'omorinoite.png'
        document.body.style.background = "#515154"
    }
}