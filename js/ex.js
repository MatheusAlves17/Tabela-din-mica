// // var id;
// let funcionario = {id, nome, idade, cidade}
// let funcionarios = [];
// salvar = () => {
//     let leitura = lerDados();
    
//     if(validaDados(leitura)){
//         adicionar(funcionario)
//     }
//     listarTabela()
//     console.log(funcionarios)
// }

// lerDados = () => {
//     funcionario.id = parseInt(document.getElementById('id').value);
//     funcionario.nome = document.getElementById('nome').value
//     funcionario.idade = document.getElementById('idade').value
//     funcionario.cidade = document.getElementById('cidade').value
//     console.log(funcionario.id)
//     return funcionario;
// }

// adicionar = (funcionario) => {
//     funcionarios.push(funcionario)
//     funcionario.id++;
// }

// listarTabela = () => {
//     let tbody = document.getElementById('tbody')
//     tbody.innerText = '';
//     for(let i = 0; i < funcionarios.length; i++){
//         let tr = tbody.insertRow();
//         let tdId = tr.insertCell();
//         let tdNome = tr.insertCell();
//         let tdIdade = tr.insertCell();
//         let tdCidade = tr.insertCell();

//         tdId.innerText = funcionarios[i].id;
//         tdNome.innerText = funcionarios[i].nome;
//         tdIdade.innerText = funcionarios[i].idade;
//         tdCidade.innerText = funcionarios[i].cidade;
        
//     }
// }


// // Validação
// validaDados = (funcionario) => {
//     var msg = ''
//     if(funcionario.nome == ''){
//         msg+='- Preencha o nome do funcionário \n'
//     }
//     if(funcionario.idade == ''){
//         msg+='- Preencha a idade do funcionário \n'        
//     }
//     if(funcionario.cidade == ''){
//         msg+='- Preencha a cidade do funcionário \n'
//     }
//     if(msg != ''){
//             alert(msg)
//             return false
//     }
//     return true;
    
// }
