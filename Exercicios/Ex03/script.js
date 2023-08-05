function verificar() {
    var currentYear = new Date().getFullYear()
    console.log(currentYear)
    var userBirthYeartxt = document.getElementById("birthYear")
    console.log(userBirthYeartxt)
    var userBirthYear = Number(userBirthYeartxt.value)
    console.log(userBirthYear)
    if (userBirthYear > 2000) {
        console.log(`oiii`)
    }
}