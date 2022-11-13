# Aula 2

* Para rodar o exemplo é necessário copiar os arquivos **index.html** e **index.js** para um mesmo diretório e abrir o arquivo html em qualquer browser.

* Recomendado baixar também o **index.css** pro resultado ficar bonitão

Exemplo para demonstrar como funcionam condicionais (if, else if, else, switch) e laços de repetição (for, foreach, while, do while). Para isso eu fiz uma implementação do problema [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz)

A página tem um campo de input e um botão para chamar a função FizzBuzz usando o número digitado pelo usuário

# Condicionais

```javascript
/* Condicionais */

// Usamos condicionais para controlar o fluxo de execução do programa

// IF, ELSE IF, ELSE

const condicao = true;

if(condicao) { // a variavél 'condicao' ja é uma booleana, portanto não é necessário escrever 'condicao === true'. mas se quiser pode
    return "passa por aqui somente se a condição for verdadeira (true)";
}
else {
    return "passa por aqui somente se a condição for falsa (false)";
}

const numero = 100;

if (numero > 100)
    // instruções IF, ELSE IF, ELSE não precisam de {} se executarem apenas uma linha
    return "maior que 100";
else if (numero === 100)
    return "igual 100";
else
    // passa por aqui se número não for verdadeiro em nenhuma das condições anteriores
    return "menor que 100";

// SWITCH
const palavra = "abcd";

switch (palavra)
{
    case "aaaa":
        // passa por aqui apenas se 'palavra' for igual "aaaa"
        return 10;
        break; // break é opcional
    case "bbbb":
        // passa por aqui apenas se 'palavra' for igual "bbbb"
        return 20;
        break;
    case "cccc":
        // passa por aqui apenas se 'palavra' for igual "cccc"
        return 30;
        break;
    case "dddd":
        // passa por aqui apenas se 'palavra' for igual "dddd"
        return 40;
        // break; // break é opcional se o case tiver um return
    default:
        // passa por aqui se não encontrar nenhum case correspondente
        return "qualquer coisa";
}

// OPERADORES TERNÁRIOS

// podemos usar os caracteres ? e : para realizar verificações em uma linha

const x = 100;
const y = x === 100 ? "x é igual 100" : "x é diferente de 100";

// o código acima /\
// faz exatamente o mesmo que o abaixo \/

const x = 100;
var y = "";

if(x === 100)
{
    y = "x é igual 100";
}
else
{
    y = "x é diferente de 100";
}

```

# Laços de Repetição

```javascript
// Usamos laços de repetição para definir trechos de código que serão executados várias vezes

//FOR

// Inicializamos uma variavél para usarmos de contador
// let i = 0

// Definimos uma condição. O laço será executado enquanto essa condição for TRUE, a condição é validada NO COMEÇO de cada repetição 
// i < 100

// Adicionamos uma expressão que será validada NO FINAL de cada execução do laço
// i++ ([i++] é o mesmo que [i = i + 1])

for (let i = 0; i < 100; i++) {
  console.log(i); // esta linha será executada 100 vezes
}

// WHILE

// laços WHILE são executados enquanto sua condição for TRUE, a condição é validada NO COMEÇO de cada repetição

let condicao = true;

while (condicao) {
    console.log("passou por aqui!!");

    condicao = false; // definimos 'condicao' como FALSE para que o laço se encerre, do contrário será executado infinitas vezes
}
```