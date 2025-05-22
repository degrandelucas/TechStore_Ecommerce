export function exibirProdutos(listaDeProdutos) {
    console.log(listaDeProdutos);

    let container = document.querySelector('.produtos');
    container.innerHTML = ''; // Limpa o conteúdo anterior
     
    if  (!listaDeProdutos || listaDeProdutos.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    for (let produto of listaDeProdutos) {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco}</p>
            <button class="btn-comprar">Comprar</button>
        `;

        container.appendChild(card);
    }
}
