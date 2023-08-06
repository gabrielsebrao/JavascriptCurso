function verificar() {
    var currentYear = new Date().getFullYear()
    var userBirthYeartxt = document.getElementById("birthYear")
    var userBirthYear = Number(userBirthYeartxt.value)
    var result = document.getElementById("resultado")
    
    if (userBirthYeartxt.value.length == 0 || userBirthYear > currentYear) {
        window.alert('[ERRO] Insira valores validos!')
    } else {
        var age = currentYear - userBirthYear
        var sex = document.getElementsByName('radsex')
        var gender = ''
        var img = document.createElement('img')
        img.id = 'foto'
        if (sex[0].checked) {
            gender = 'Homem'
            document.body.style.background = "#87b7ff6c"
            if(age < 10) {
                img.src = 'homem-crianca.png'
            } else if (age < 21) {
                img.src = 'homem-jovem.png'
            } else if (age < 50) {
                img.src = 'homem-adulto.png'
            } else {
                img.src = 'homem-idoso.png'
            }
        } else {
            gender = 'Mulher'
            document.body.style.background = '#ff87ed6c'
            if(age < 10) {
                img.src = 'mulher-crianca.png'
            } else if (age < 21) {
                img.src = 'mulher-jovem.png'
            } else if (age < 50) {
                img.src = 'mulher-adulta.png'
            } else {
                img.src = 'mulher-idosa.png'
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML =`<p>Detectamos ${gender} com ${age} anos!`
        result.appendChild(img)
    }
}