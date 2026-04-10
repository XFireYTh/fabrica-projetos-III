// Constantes Necessárias

const dias = document.getElementById("dias")

// --------------------------------------------

// Variáveis Necessárias



// --------------------------------------------

// Funções Necessárias

// --------------------------------------------

// Funções Específicas

function meses(mes) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    return meses[mes]
}

function formarCalendario(tabela_DOM) {
    let data = new Date()
    const diaAtual = data.getDate()
    const diaSemana = data.getDay()
    const mesAtual = data.getMonth()
    const anoAtual = data.getFullYear()
    console.log(`${diaAtual}/${mesAtual}/${anoAtual}`)
    console.log(meses(mesAtual))

    document.getElementById("mes_resumo").innerHTML = `${meses(mesAtual)} ${anoAtual}`
}

// --------------------------------------------

// Área de Eventos

// --------------------------------------------

// Área de Automação

formarCalendario(dias)

// --------------------------------------------