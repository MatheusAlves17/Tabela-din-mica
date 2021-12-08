// var cont = 0;
// let funcionario = {id, nome, idade, cidade};
// var funcionarios = [funcionario];

// salvar = () => {
//     let list = document.getElementById("tbody").innerHTML;
//     cont =  cont + 1;
//     let id = cont;

//     funcionarios = {id: id, nome:  document.getElementById("nome").value, idade:  document.getElementById("idade").value, cidade:  document.getElementById("cidade").value};
    
//     list += `<tr><td>${funcionarios.id}</td><td>`+funcionarios.nome+`</td><td>`+funcionarios.idade+`</td><td>`+funcionarios.cidade+`</td><td><button onclick='deletar(${id})'<i class='fas fa-trash-alt' style='color: #4793e3';></i></button></td><td><button onclick='alterar(${funcionarios.id})'><i class='fas fa-edit' style='color: #4793e3;'></i></button></td></tr>`;
//     document.getElementById("tbody").innerHTML = list;
    
//     document.getElementById("nome").value = null;
//     document.getElementById("idade").value = null;
//     document.getElementById("cidade").value = null;
    
//     console.log(funcionarios);
// }

// alterar = (id) => {
//     let list = document.getElementById("tbody").innerHTML;
//     console.log(funcionarios.id, funcionarios.nome)
// }
// deletar = (id) => {

//     for(let i = 0; i < funcionarios; i++){
//         if(funcionarios[i].id == id){
//             console.log(funcionarios[i])
//         }
//     }

// }

