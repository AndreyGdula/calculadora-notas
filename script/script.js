function calcular() {
    const inputNota1 = document.querySelector("input#nota1")
    const inputNota2 = document.querySelector("input#nota2")

    const nota1 = Number((inputNota1).value)
    const nota2 = Number((inputNota1).value)

    const notaFinal2 = (10 - (2 / 3) * nota1).toFixed(1)

    inputNota2.placeholder = `${notaFinal2}`
    inputNota2.style.textAlign = "center"
    inputNota1.style.textAlign = "center"
    
}