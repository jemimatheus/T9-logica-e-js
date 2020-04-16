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

// let valor;
// let salario = (prompt( 'Digite o seu salario'));
// let cargo = (salario < 5000)? "Junior":"Pleno";
// alert(` Seu cargo é ${cargo}  e seu salário é ${salario}`);

// Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
//  Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: 
//  caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”
//  e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do 
//  seu navegador. Crie também um default, que retornará uma mensagem de erro no console.


// let fruta = prompt('Escolha uma fruta[maca,kiwi,melancia]');

// switch (fruta) {
//     case 'maca':
//         alert('Não vendemos esta fruta aqui');
//         break;
//     case 'kiwi':
//         alert('Estamos com escassez de kiwis');
//         break;
//     case 'melancia ':
//         alert('Aqui está, são 3 reais o quilo');
//         break;
//     default:
//             alert('Error');           
// }



// let mes = parseInt(prompt('Digite um mês do ano[1-12]'));

// switch(mes) {
//     case 1:
//        mes = 'Janeiro'
//        break;
//     case 2:
//         mes = 'Fevereiro'
//         break;
//     case 3:
//         mes = 'Março'
//         break;
//     case 4:
//         mes = 'Abril'  
//         break;
//     case 1:
//             mes = 'Maio'
//         break;
//     case 2:
//              mes = 'Junho'
//         break;
//     case 3:
//              mes = 'Julho'
//         break;
//     case 4:
//              mes = 'Agosto'  
//          break;
//     case 5:
//             mes = 'Setembro'
//         break;
//     case 2:
//              mes = 'Outubro'
//         break;
//     case 3:
//              mes = 'Novembro'
//         break;
//     case 4:
//              mes = 'Dezembro'  
//          break;
//     default:
//       mes = 'Mes inválido'         
               
// } 
// alert(`O mes é ${mes}` );


// 3. Calcule o valor do salario do dev conforme valores abaixos.
// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario senior = salario base + 50% 



// let cargo = prompt('Digite o seu cargo').toLowerCase();
// let  base = 2500;
// let novosalario ='';
 

// switch (cargo){
//     case 'junior':
//         novosalario = parseInt( base * 1.20) ;
//         break;
//     case 'pleno':
//          novosalario = parseInt( base * 1.35) ;
//         break;
//     case 'senior':
//             novosalario = parseInt( base * 1.5) ;
//         break;        
//     default:
//          alert ('Não é um cargo válido');  

        
// }
// console.log (novosalario);



