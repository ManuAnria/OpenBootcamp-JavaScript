let valor = 1
let i = 1
while (true) {
    valor *= i
    i++
    if (i == 10) {
        break
    }
}
console.log(`El factorial de 10 es: ${valor}`)