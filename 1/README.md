# Aula 1

* Para rodar o exemplo é necessário copiar os arquivos **index.html** e **index.js** para um mesmo diretório e abrir o arquivo html em qualquer browser

Exemplo para demonstrar como ler e retornar a soma de 2 valores.

Ao clicar no botão "Executar!", chamamos a função "somaNumeros" que solicita ao usuário digitar 2 números e então retorna a soma dos valores.

criei a função "capturaEntrada" para facilitar o input.

# Variáveis e Funções

```javascript
/* variáveis e constantes */

// exemplo em javascript

// variáveis são espaços na memória onde guardamos dados que serão utilizadas ao longo da execução do programa

// declaramos variáveis com a instrução 'let'
let variavel123;

// atribuimos um valor a variável usando '='
variavel123 = 1000;

// constantes não podem ser alteradas após serem definidas

// declaramos constantes com 'const'
const valorConstante = "abc";
```

```javascript
/* funções e métodos */

// exemplo em javascript

// funções/métodos são trechos de lógica que isolamos para que possam ser reutilizados em várias partes do programa

function textoAAAA() {
  return "AAAA"; // funções retornam valores
}

function metodoQualquer() {
  const a = 10;
  const b = 20;
  const c = a + b;

  // métodos não retornam valor
}

// funções/métodos podem receber parametros
function multiplica2numeros(n1, n2) {
  // esta função aceita 2 parametros, n1 e n2
  return n1 * n2;
}

// funções/métodos podem ser chamadas dentro de outras funções/métodos
function muliplica4numeros() {
  const x = multiplica2numeros(10, 30);
  const y = multiplica2numeros(20, 40);

  const z = x * y;
}
```
