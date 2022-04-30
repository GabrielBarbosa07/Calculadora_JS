var resultado = document.querySelector(".result")
var confirmar = document.querySelector(".igual")

//Adicionando o valor clicado no campo p
function insert(valor) {
    resultado.innerHTML += valor
}

//Limpando o campo p
function clean() {
    resultado.innerHTML = ""
}

function backspace() {
    if (resultado.textContent) {
        var result = document.getElementById("resultado").innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1)//pegando o campo p e excluindo o ultimo elemento
    }
}

//Se nao tiver um erro no conteudo do campo p, ele vai pegar o html do campo p, e vai fazer a operaçao com o html do campo p na funçao eval
function confirma() {
    if (resultado.textContent != "Erro") {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}

//Funçao para os keyCode do teclado
function key() {
    var tecla = event.keyCode

    if (tecla == 96 || tecla == 48) {
        resultado.innerHTML += "0"
    }
    if (tecla == 97 || tecla == 49) {
        resultado.innerHTML += "1"
    }
    if (tecla == 98 || tecla == 50) {
        resultado.innerHTML += "2"
    }
    if (tecla == 99 || tecla == 51) {
        resultado.innerHTML += "3"
    }
    if (tecla == 100 || tecla == 52) {
        resultado.innerHTML += "4"
    }
    if (tecla == 101 || tecla == 53) {
        resultado.innerHTML += "5"
    }
    if (tecla == 102 || tecla == 54) {
        resultado.innerHTML += "6"
    }
    if (tecla == 103 || tecla == 55) {
        resultado.innerHTML += "7"
    }
    if (tecla == 104 || tecla == 56) {
        resultado.innerHTML += "8"
    }
    if (tecla == 105 || tecla == 57) {
        resultado.innerHTML += "9"
    }
    if (tecla == 106) {
        resultado.innerHTML += " * "
    }
    if (tecla == 111) {
        resultado.innerHTML += " / "
    }
    if (tecla == 107) {
        resultado.innerHTML += " + "
    }
    if (tecla == 109) {
        resultado.innerHTML += " - "
    }
    if (tecla == 190) {
        resultado.innerHTML += "."
    }
    if (tecla == 13) {
        confirma()
    }
    if (tecla == 8 || tecla == 46) {
        backspace()
    }
}

addEventListener("keyup", key)
