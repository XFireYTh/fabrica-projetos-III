// Constantes Necessárias

const dias = document.getElementById("dias_resumo")

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

    let semanas = 0
    let semanaDiaCounter = 0
    let dia = 1
    let limiteDias = new Date(anoAtual, mesAtual + 1, 0).getDate()
    let diaSemanaTrava = new Date(anoAtual, mesAtual, 1).getDay()

    while (semanas < 6 || dia < limiteDias) {
        if (diaSemanaTrava > 6) {
            diaSemanaTrava = 0
        }
        if (semanaDiaCounter > 6) {
            semanaDiaCounter = 0
        }
        dias.innerHTML += `
            <tr id="${semanas}sc">

            </tr>
        `

        while (semanaDiaCounter <= 6) {
            if (semanaDiaCounter == diaSemanaTrava && dia <= limiteDias) {
                document.getElementById(`${semanas}sc`).innerHTML += celulaPreenchida(dia)
                dia++
                semanaDiaCounter++
                diaSemanaTrava++
            } else {
                document.getElementById(`${semanas}sc`).innerHTML += celulaVazia()
                semanaDiaCounter++
            }
        }

        semanas++
        
    }

    let monitorDias = 0
    for(let td in document.getElementById(`${semanas}sc`).innerHTML) {
        if (monitorDias == 0) {
            td.id = "dia_inicial_semana"
        }
    }
}

function celulaVazia() {
    return "<td></td>"
}

function celulaPreenchida(valor) {
    return `<td>${valor}</td>`
}

// --------------------------------------------

// Área de Eventos

// --------------------------------------------

// Área de Automação

formarCalendario(dias)

// --------------------------------------------