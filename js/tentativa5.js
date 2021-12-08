const criarElementoRemovedor = (idItem) =>{
    const removedor = document.createElement('input');
    removedor.setAttribute("type","button");
    removedor.value='(X)';
    return removedor;
}

const criarItem = (valor) => {
    const idItem = `item-${incrementoLista++}`;
    const itemElement = document.createElement('li');
    itemElement.innerText = valor;
    itemElement.setAttribute('id',idItem);
    const removedorItem = criarElementoRemovedor(idItem);
    itemElement.appendChild(removedorItem);
    return {valor, idItem, itemElement}
}


const addElement = (event) => {
    event.preventDefault();

    //captura valor
    const valor = event.target.elements[0].value;

    //limpa campo
    event.target.elements[0].value = "";

    //cria item
    const itemLista = criarItem(valor);
    funcionario.push(itemLista);

    renderizarLista();
}

const elementoForm = document.querySelector("form");
elementoForm.addEventListener('submit',addElement);