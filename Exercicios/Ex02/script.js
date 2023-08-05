
function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var now = new Date()
    var currentHour = 19
    msg.innerHTML= `Agora sao ${currentHour} horas.`
    if(currentHour >= 0 && currentHour < 12) {
        msg.innerHTML += '<p><strong>Bom dia!'
        img.src = 'bomdia.png'
        document.body.style.background = "#EFDBC3"
    } else if(currentHour >= 12 && currentHour < 18){
        msg.innerHTML += '<p><strong>Boa tarde!'
        img.src = 'boatarde.png'
        document.body.style.background = "#E58C15"
    } else {
        msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
        img.src = 'boanoite.png'
        document.body.style.background = "#071532"
    }
}