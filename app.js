let nome = prompt("Qual é o seu nome?");
let pergunta = Number(
  prompt(
    "Olá " +
      nome +
      "! Escolha um número de 1 a 4 para realizarmos operações, sendo 1 - Adição, 2 - Subtração, 3 - Multiplicação e 4 - Divisão"
  )
);

let x = Number(prompt("Digite o primeiro número para realizarmos o calculo."));
let y = Number(
  prompt("Agora digite o segundo número e logo em seguida teremos o resultado.")
);

if (!validarNumero(x) || !validarNumero(y) || x <= 0 || y <= 0) {
  alert(
    "O primeiro e segundo dígito devem ser números válidos e maiores que zero."
  );
} else {
  escolha(pergunta, x, y);
}

// Aqui estamos apenas atualizando a variável recomecar, sem a necessidade de redefinir
recomecar = prompt("Gostaria de realizar um novo cálculo, Sim ou Não?");

function escolha(pergunta, x, y) {
  if (pergunta == 1) {
    alert(calcularAdicao(x, y));
  } else if (pergunta == 2) {
    alert(calcularSubtracao(x, y));
  } else if (pergunta == 3) {
    alert(calcularMultiplicacao(x, y));
  } else if (pergunta == 4) {
    alert(calcularDivisao(x, y));
  } else {
    alert("Opção inválida! Escolha um número entre 1 e 4.");
  }
}

function calcularAdicao(x, y) {
  return x + y;
}

function calcularSubtracao(x, y) {
  return x - y;
}

function calcularMultiplicacao(x, y) {
  return x * y;
}

function calcularDivisao(x, y) {
  return x / y;
}

function validarNumero(valor) {
  return !isNaN(valor);
}

function recomecarCalculo() {
  while (recomecar.toLowerCase() === "sim") {
    let pergunta = Number(
      prompt(
        "Escolha um número de 1 a 4 para realizarmos operações, sendo 1 - Adição, 2 - Subtração, 3 - Multiplicação e 4 - Divisão"
      )
    );

    let x = Number(
      prompt(
        "Vamos precisar de dois números para realizarmos os cálculos, digite o primeiro número."
      )
    );
    let y = Number(
      prompt(
        "Agora digite o segundo número e logo em seguida teremos o resultado."
      )
    );

    if (!validarNumero(x) || !validarNumero(y) || x <= 0 || y <= 0) {
      alert(
        "O primeiro e segundo dígito devem ser números válidos e maiores que zero."
      );
    } else {
      escolha(pergunta, x, y);
    }

    // Aqui estamos apenas atualizando a variável recomecar, sem a necessidade de redefinir
    recomecar = prompt("Gostaria de realizar um novo cálculo, Sim ou Não?");
  }
}

// Chama a função para iniciar o processo
recomecarCalculo();
