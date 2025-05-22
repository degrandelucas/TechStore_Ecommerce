import { exibirProdutos } from "./showProducts.js";

export function ativarBuscaProdutos(listaDeProdutos){
    let inputBusca = document.getElementById('searchInput');

    inputBusca.addEventListener('input', (event) => {
        let valorBusca = event.target.value.toLowerCase();
        let produtosFiltrados = listaDeProdutos.filter(
            cadaProduto => {
                return cadaProduto.nome.toLowerCase().includes(valorBusca);
            }
        );
        exibirProdutos(produtosFiltrados);
    });
}