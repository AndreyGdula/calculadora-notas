function calcular() {
    const inputNota1 = document.querySelector("input#nota1")
    const inputNota2 = document.querySelector("input#nota2")
    const divFinal = document.querySelector("div.final")
    const inputFinal = document.querySelector("input#nota-final")

    const nota1 = Number((inputNota1).value)
    const nota2 = Number((inputNota2).value)

    if (!nota1) {
        alert("Erro! Nota 1 não foi informado!")
    } else if (nota1 > 10 || nota2 > 10) {
        alert("Erro! A nota mencionada é maior que 10. Tente novamente!")
    } else if (!nota2) {
        divFinal.style.display = "none"
        const notaFinal2 = (10 - (2 / 3) * nota1).toFixed(1)
        inputNota2.placeholder = `${notaFinal2.toString().replace('.', ',')}`
    } else {
        const notaFinal = ((nota1 * 0.4) + (nota2 * 0.6)).toFixed(1)

        divFinal.style.display = "grid"
        inputFinal.placeholder = `${notaFinal}`
    }
}