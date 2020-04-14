// const num = prompt( 'Digite um numero');
// if (num%2 === 0){
//     alert( num +`Numero par `);
// }else{
//     alert( num + `numero impar`);
// }


// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.


// const nota1 = parseFloat(prompt( 'Digite a primeira nota'));
// const nota2 = parseFloat(prompt( 'Digite a segunda nota'));
// let media = parseFloat(nota1+nota2)/2;
// if (media < 7){
//     alert ('Reprovado');
// }else if (media >= 7 && media <= 9){
//     alert('Aprovado'); 
// }else if (media ===  10){
// alert ('Aprovado com Distinção');
// }else{
//     alert(`Nota Invalida`);
// }


// 3. Faça um script que leia três números inteiros e mostre o maior deles.

// const num1 = parseInt(prompt( 'Digite o primeiro numero'));
// const num2 = parseInt(prompt( 'Digite o segundo numero'));
// const num3 = parseInt(prompt( 'Digite o terceiro numero'));
// let numMaior = 0

// if (num1> num2 && num1 > num3){
//     alert(`O numero maior é o 1º ${numMaior = num1}`);
//  } else if (num2 > num1 && num2 > num3) {
//     numMaior = num2;
//  } else {
//      numMaior = num3;
//      alert( `O maior numero é  ${numMaior}`)
//  }
 

// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
// Fazer duas variáveis trocarem de valores entre si - Variável Auxiliar


// let x = parseInt(prompt( 'Digite o primeiro numero'));
// let y = parseInt(prompt( 'Digite o segundo numero'));
// let aux;

// alert (`Os valores inseridos são ${x} e ${y}`);

//  aux=x;
//  x =y;
//  y = aux;
//  aux=0

//  alert(`Os novos valores são ${x} e ${y}`);
 

// IF TERNÁRIO

// 1.  Transforme os ifs abaixo em if ternario (condicao ? exp 1 : exp2 ).

// 
// if(a > 0) {
// resultado = "valor maior que 0";
// } else {
// resultado = "valor = 0";
// }

//  let a = 10
// let cond = (a > 0)? 'valor é maior 0' : 'valor igual zero';

// alert = (cond);


// 2.
// if(sexo === 'feminino') {
// alert('seja bem vinda');
// } else {
// alert('seja bem vindo')
// }

// let sexo = prompt( 'Qual seu sexo?')
// let entrada = (sexo === 'feminino')? ' Seja bem vinda!':'Seja bem vindo!';
// alert(entrada);

// 3.
// let isIphone = true;
// let os;

// if (isIphone) {
//   os = "iOS";
// } else {
//   os = "Android";
// }

// let isIphone = false;
// let os;
// os  = (isIphone)? 'Android':'iOS';

// console.log (os);


// 4.
// if(salario < 5000) {
// 	cargo = "junior"
// } else {
// 	cargo = "pleno"
// }

let valor;
let salario = (prompt( 'Digite o seu salario'));
let cargo = (salario < 5000)? "Junior":"Pleno";
alert(` Seu cargo é ${cargo}  e seu salário é ${salario}`);



