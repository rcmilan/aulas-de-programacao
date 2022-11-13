// Função para ajudar a receber os valores
// textoDoPrompt: texto que será exibido no popup
function capturaEntrada(textoDoPrompt) {
  // window.prompt: função que abre um popup para que o usuário digite um valor
  //                esta função retorna o valor digitado pelo usuário
  // Number.parseInt: função que converte um valor, se possível, para o tipo "Int"

  return Number.parseInt(window.prompt(textoDoPrompt)); // retorna o número digitado
}

function somaNumeros() {
  const numero_A = capturaEntrada("Digite o 1º número");
  const numero_B = capturaEntrada("Digite o 2º número");

  const resultado = numero_A + numero_B;

  // window.alert: exibe um modal com um texto qualquer
  window.alert(resultado);
}