// Criamos uma variavel que vai guardar o nome que o usuario digitar
let nomeTurista = prompt("Digite o seu nome");
// Criamos uma variavel que vai guardar as cidades visitadas
let cidades = "";
// Criamos um contador para iterar sobre o while
let contagem = 0;
// Aqui temos um variavel que funcionará como condição mais pra frente
let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)");
// Criamos um while, que enquanto o usuario nao terminar de colocar as cidades que visitou
// O codigo se manterá perguntando e armazenando os resultados
while (continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  // Aqui temos a segunda pergunta que vai medir se o codigo vai finalizar ou nao
  continuar = prompt("Você alguma outra cidade? (Sim/Não)");
}
// Aqui temos o resultado apresentado dentro de um alert
alert(
  "Turista: " +
    nomeTurista +
    "\nQuantidade de cidades visitadas " +
    contagem +
    "\nCidades visitadas:\n" +
    cidades
);
