let selecionarDengue = true
let selecionarEscorpiao = false
let selecionarOutros = false

let botaoDengue = document.getElementById("dengue")
let botaoEscorpiao = document.getElementById("escorpiao")
let botaoOutros = document.getElementById("outros")
let imgDengue = document.getElementById("img-dengue")
let imgEscorpiao = document.getElementById("img-escorpiao")
let imgOutros = document.getElementById("img-outros")

let tituloConscientizacao = document.getElementById("titulo")
let botoesConscientizacao = document.querySelectorAll("#main-acoes")
let txtTituloConscientizacao = document.getElementById("titulo-text")
let descricaoConscientizacao = document.getElementById("descricao")

function changeInfo() {
    if (selecionarDengue) {
        botaoDengue.style.backgroundColor = "#DA2A2A"
        botaoDengue.style.border = "none"
        imgDengue.src = "../resources/images/dengue 1.png"

        botaoEscorpiao.style.backgroundColor = "#ffffff"
        botaoEscorpiao.style.border = "4px solid #FFD900"
        imgEscorpiao.src = "../resources/images/escorpiao 2.png"

        botaoOutros.style.backgroundColor = "#ffffff"
        botaoOutros.style.border = "4px solid #00AD00"
        imgOutros.src = "../resources/images/outros 2.png"

        txtTituloConscientizacao.textContent = "Dengue"

        tituloConscientizacao.style.backgroundColor = "#DA2A2A"
        botoesConscientizacao[0].style.backgroundColor = "#DA2A2A"
        botoesConscientizacao[1].style.backgroundColor = "#DA2A2A"
        botoesConscientizacao[0].style.border = "none"
        botoesConscientizacao[1].style.border = "none"

    } else if (selecionarEscorpiao) {
        botaoDengue.style.backgroundColor = "#ffffff"
        botaoDengue.style.border = "4px solid #DA2A2A"
        imgDengue.src = "../resources/images/dengue 2.png"

        botaoEscorpiao.style.backgroundColor = "#FFD900"
        botaoEscorpiao.style.border = "none"
        imgEscorpiao.src = "../resources/images/escorpiao 1.png"

        botaoOutros.style.backgroundColor = "#ffffff"
        botaoOutros.style.border = "4px solid #00AD00"
        imgOutros.src = "../resources/images/outros 2.png"

        txtTituloConscientizacao.textContent = "Escorpião"

        tituloConscientizacao.style.backgroundColor = "#FFD900"
        botoesConscientizacao[0].style.backgroundColor = "#FFD900"
        botoesConscientizacao[1].style.backgroundColor = "#FFD900"
    } else {
        botaoDengue.style.backgroundColor = "#ffffff"
        botaoDengue.style.border = "4px solid #DA2A2A"
        imgDengue.src = "../resources/images/dengue 2.png"

        botaoEscorpiao.style.backgroundColor = "#ffffff"
        botaoEscorpiao.style.border = "4px solid #FFD900"
        imgEscorpiao.src = "../resources/images/escorpiao 2.png"

        botaoOutros.style.backgroundColor = "#00AD00"
        botaoOutros.style.border = "none"
        imgOutros.src = "../resources/images/outros 1.png"

        txtTituloConscientizacao.textContent = "Outras Peçonhas"

        tituloConscientizacao.style.backgroundColor = "#00AD00"
        botoesConscientizacao[0].style.backgroundColor = "#00AD00"
        botoesConscientizacao[1].style.backgroundColor = "#00AD00"
    }
}

botaoDengue.addEventListener("click", () => {
    selecionarDengue = true
    selecionarEscorpiao = false
    selecionarOutros = false

    changeInfo()
})

botaoEscorpiao.addEventListener("click", () => {
    selecionarDengue = false
    selecionarEscorpiao = true
    selecionarOutros = false

    changeInfo()
})

botaoOutros.addEventListener("click", () => {
    selecionarDengue = false
    selecionarEscorpiao = false
    selecionarOutros = true

    changeInfo()
})

changeInfo()