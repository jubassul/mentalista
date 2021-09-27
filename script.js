let numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
const chutar = () => {
  let resultado = document.getElementById("resultado");
  let chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    resultado.innerHTML = " Você Acertou :)! ";
    tentativas = 3;
    numeroSecreto = parseInt(Math.random() * 11);
  } else if (chute > 10 || chute < 0) {
    tentativas = tentativas - 1;
    resultado.innerHTML =
      " Você deve digitar um número de 0 a 10, restam " +
      tentativas +
      "tentativas ";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    resultado.innerHTML =
      "O número é maior, tente novamente, restam " +
      tentativas +
      " tentativas ";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    resultado.innerHTML =
      "O número é menor, tente novamente, restam " +
      tentativas +
      " tentativas ";
  }
  if (tentativas == 0) {
    resultado.innerHTML =
      " Você excedeu as tentativas ! O número correto era " + numeroSecreto;
    tentativas = 3;
    numeroSecreto = parseInt(Math.random() * 11);
  }
};

//se o chute for igual ao número 3 a pessoa acertou.
//se o chute for igual a outro numero a pessoa erro.
//se a pessoa chutar com o número maior que 10, mandar  mensagem personalizada.
//se a pessoa chutar com o número menor que 0, mandar mensagem personalizada.

//let maximoTentativas = 3;
//let numeroErros = 0;
//if (numeroErros === maximoTentativas) {
// alert("Você Execedeu o número de tentativas")

//for (var i = 0; i === 3; i++) {
//alert("Você excedeu as tentativas !");
//}

//let tentativas = 3;
//if (tentativas > 3) {
//alert("Você excedeu as tentativas !");
//}