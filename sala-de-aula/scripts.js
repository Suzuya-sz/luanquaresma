let produto = prompt("Insira o nome do produto: ").toLocaleLowerCase();
let quantidade = parseInt(prompt("Quantidade no estoque: "));


if (produto === "celular" && quantidade < 10) {
    alert("Reabastecer");
} else if (produto === "tablet" && quantidade < 8) {
    alert("Reabastecer");
} else if (quantidadFe === "tv" && quantidade < 5) {
    alert("Reabastecer");
} else if (produto === "laptop" && quantidade < 8) {

} else if (produto === "outors" && quantidade < 15) {

} else {
    alert("Estoque OK");
}


//let cria uma variavel
// & = e
// || = ou
// celular, tablet, tv e outros