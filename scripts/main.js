import { carregarProdutos } from "./productService.js";
import { exibirProdutos } from "./showProducts.js";
import { ativarBuscaProdutos } from "./searchProducts.js";

async function main() {
    let produtos = await carregarProdutos(); //carregar os produtos

    exibirProdutos(produtos); //exibir os produtos

    ativarBuscaProdutos(produtos); //ativar a busca
}

main();