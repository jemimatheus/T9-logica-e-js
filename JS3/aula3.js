//Exercícios simples



//1. Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código,
// uma utilizando if-else e outra utilizando switch-case);

// const alfaletra = prompt('Digite uma letra [a-z]');

// switch (alfaletra) {
// case 'a':
// case 'e':
// case 'i':
// case 'o':
// case 'u':
//     alert('vogal');
//     break;
// default:
//     alert('consoante');
// }

//

// const alfaletra = prompt('Digite uma letra [a-z]');

// if (alfaletra === 'a'
// || alfaletra === 'e'
// || alfaletra === 'i'
// || alfaletra === 'o'
// || alfaletra === 'u'){
// alert('vogal');

// } else {
// alert('consoante');
// }




// 2. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente;

// const diaSemana = parseInt(prompt('Digite o dia da semana [1-7]'));

// switch (diaSemana) {
//     case 1:
//         alert(`Domingo`);
//         break;
//     case 2:
//         alert(`Segunda-Feira`);
//         break;
//     case 3:
//         alert(`Terça-Feira`);
//         break;
//     case 4:
//         alert(`Quarta-Feira`);
//         break;
//     case 5:
//         alert(`Quinta-Feira`);
//         break;
//     case 6:
//         alert(`Sexta-Feira`);
//         break        
//     case 7:
//         alert(`Sábado`);
//         break;
//     default:
//         alert(`Dia de São Nunca`);
// }
// 3. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem;

// const numero = parseInt(prompt('Digite um numero (entre 1 e 12)'));

// if (numero === 1) {
//     alert(`O mes é Janeiro e ele possui 31 dias`);
// } else if (numero === 2) {
//     alert(`O mes é Fevereiro e ele possui 28 dias`);

// } else if (numero === 3) {
//     alert(`O mes é Março e ele possui 31 dias`);

// } else if (numero === 4) {
//     alert(`O mes é Abril e ele possui 31 dias`);

// } else if (numero === 5) {
//     alert(`O mes é Maio e ele possui 31 dias`);

// } else if (numero === 6) {
//     alert(`O mes é Junho e ele possui 30 dias`);

// } else if (numero === 7) {
//     alert(`O mes é Julho e ele possui 31 dias`);

// } else if (numero === 8) {
//     alert(`O mes é Agosto e ele possui 31 dias`);

// } else if (numero === 9) {
//     alert(`O mes é Setembro e ele possui 30 dias`);

// } else if (numero === 10) {
//     alert(`O mes é Outubro e ele possui 31 dias`);

// } else if (numero === 11) {
//     alert(`O mes é Novembro e ele possui 30 dias`);

// }else if {
//     alert(`O mes é Dezembro e ele possui 31 dias`);
// }else {
//     alert(`Mes não existe!`);
// }



// 4. Escreva um código que receba dois número e determine qual o maior entre eles;

// const num1 = prompt('Digite o primeiro número:');
// const num2 = prompt('Digite o segundo número:');

// if (num1 > num2) {
//     alert(`${num1} é maior que ${num2}`);
// } else if (num1 === num2) {
//     alert(`${num1} é igual a ${num2}`);
// } else {
//     alert(`${num2} é maior que ${num1}`);
// }
// 5. Escreva um código que receba um número e determine se ele é par ou ímpar, e se é negativo ou positivo;

// const numero = parseInt(prompt('Digite um numero'));
// const sobra = (numero/2);
// if (numero%2 === 0 && numero > 0){ 
//     alert(`${numero} Par e positivo`);
// }else if   (numero%2 === 0 && numero < 0){ 
//     alert(`${numero} Par e negativo`);  
// }else if   (numero%2 !== 0  && numero < 0){ 
//     alert(`${numero} Impar e negativo`);
// }else if( numero%2 !== 0  && numero > 0){
//   alert(`${numero} Impar e positivo`);
// } else{
//     alert(`${numero} é um numero neutro`);
// }

// 6. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.

// const angulo1 = parseFloat(prompt('Digite o primeiro angulo'));
// const angulo2 = parseFloat(prompt('Digite o segundo angulo'));
// const angulo3 = parseFloat(prompt('Digite o terceiro angulo'));
// const soma = (angulo1 +angulo2 + angulo3)
//      if (soma === 180){
//         alert(`${soma}º É um triangulo válido`);
//      } else {
//         alert(`${soma}º É um Triangulo inválido`);
     
//     }




// 7.. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.


// const a = parseFloat(prompt('Digite o valor A'));
// const b = parseFloat(prompt('Digite o valor B'));


// if (a%b === 0 )  {
//     alert(`Numeros ${a} e ${b}  são multiplos entre si`);
// } else if (b%a === 0 ) {
//     alert(`Numeros ${a} e ${b} não são multiplos entre si`);
// }



// 8. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo.
//  (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu,
// não recebe nada.)

//const pontos = parseInt(prompt('Digite o valor B'));





// 9. Elabore um programa que dada a idade de um nadador classifica-o em uma das seguintes categorias:

// Infantil A = 5 - 7 anos
// Infantil B = 8-10 anos
// Juvenil A = 11-13 anos
// Juvenil B = 14-17 anos
// Adulto = maiores de 18 anos
// 10. Faça um algoritmo que dado um número, retorne a classificação do ângulo. (Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto: ângulo com medida igual a 90°; Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; Ângulo raso: ângulo com medida igual a 0° ou 180°; Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo: ângulo com medida igual a 360°).