const getLocalStorage = () => JSON.parse(localStorage.getItem('db_person')) ?? [] // Faz a busca no banco
const setLocalStorage = (dbPerson) => localStorage.setItem("db_person", JSON.stringify(dbPerson)) // Envia novos dados
var id = null;
// ---------------------------------------------------------- CREATE
const createPerson = (person) => {
    const dbPerson = getLocalStorage()
    dbPerson.push(person) //atribui um novo valor
    setLocalStorage(dbPerson)
}
// ---------------------------------------------------------- READ
const readPerson = () => getLocalStorage()

// ---------------------------------------------------------- UPDATE
const updatePerson = (index, person) => {
    const dbPerson = readPerson()
    dbPerson[index] = person
    setLocalStorage(dbPerson)
}

// ---------------------------------------------------------- DELETE
const deletePerson = (index) => {
    const dbPerson = readPerson()
    dbPerson.splice(index, 1)
    setLocalStorage(dbPerson)
}


// ---------------------------------------------------------- INTERAÇÃO

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const savePerson = () => {
    if (id == null) {
        if (isValidFields()) {
            const person = {
                nome: document.getElementById('nome').value,
                idade: document.getElementById('idade').value,
                cidade: document.getElementById('cidade').value
            }
            createPerson(person)
            clearFields()
            updateTable()
        }
    } else {
        const index = document.getElementById(`nome`).dataset.index
        const person = {

        nome: document.getElementById(`nome${id}`).value,
        idade: document.getElementById(`idade${id}`).value,
        cidade: document.getElementById(`cidade${id}`).value
    }
    console.log(document.getElementById(`nome${id}`).value)
    updatePerson(id, person)
    updateTable()
    id = null
    }
}

 const createRow = (person, index) => {
    const newRow = document.createElement(`tr`)
    newRow.innerHTML = `
        <td id="indiceN${index}">${person.nome}</td>
        <td id="indiceI${index}">${person.idade}</td>
        <td id="indiceC${index}">${person.cidade}</td>
        <td><button><i class="fas fa-trash-alt" style="color: #ff3945;cursor:pointer" id="delete-${index}" onclick="deletar(${index})"></i></button></td>
        <td><button><i class="fas fa-edit" style="color: #ffbf2a;cursor:pointer" id="edit-${index}" onclick="editar(${index})"></i></button></td>
    `
    document.querySelector('#tableFuncionarios>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableFuncionarios>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbPerson = readPerson()
    clearTable()
    dbPerson.forEach(createRow)
}

const clearFields = () => {
    const fields = document.querySelectorAll('.insert')
    fields.forEach(field => field.value = "")
}

const fillFields = (person, index) => {
    document.getElementById(`nome${index}`).value = person.nome
    document.getElementById(`idade${index}`).value = person.idade
    document.getElementById(`cidade${index}`).value = person.cidade
    document.getElementById(`nome${index}`).dataset.index = person.index
}

    const editPerson = (index) => {
    const person = readPerson()[index]
    console.log(person, index)
}

editar = (index) => {
    const person = readPerson()[index]
    tdNome = document.getElementById(`indiceN${index}`)
    tdIdade = document.getElementById(`indiceI${index}`)
    tdCidade = document.getElementById(`indiceC${index}`)
    tdButton = '';
    tdNome.innerHTML = `<td id=indiceN${index}><input type="text" id="nome${index}" value="${person.nome}"/></td>`
    tdIdade.innerHTML = `<td id=indiceI${index}><input type="text" id="idade${index}" value="${person. idade}"/></td>`
    tdCidade.innerHTML = `<td id=indiceC${index}><input type="text" id="cidade${index}" value="${person.cidade}"/></td>`
    fillFields(person, index)
    id = index
    console.log("editando")
}
deletar = (index) => {
    deletePerson(index)
    console.log(index);
    updateTable()

}



updateTable()

        // ---------------------------------------------------------- EVENTOS
document.getElementById('salvar')
    .addEventListener('click', savePerson)
