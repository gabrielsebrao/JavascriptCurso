var now = new Date()
var dayWeek = now.getDay()
switch (dayWeek) {
    case 0:
        console.log('Hoje e domingo!')
        break
    case 1:
        console.log('Hoje e segunda!')
        break
    case 2:
        console.log('Hoje e terca!')
        break
    case 3: 
        console.log('Hoje e quarta!')
        break
    case 4:
        console.log('Hoje e quinta!')
        break
    case 5:
        console.log('Hoje e sexta!')
        break
    case 6:
        console.log('Hoje e sabado!')
        break
}