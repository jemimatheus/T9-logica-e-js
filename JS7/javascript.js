
//////////////////////////////////ARRAY E OBJETO///////////////////////////////////////////////////////////


// 1. Crie um Objeto pessoa que receba as propriedades: nome, telefone, idade, altura e peso.


// let pessoa = {
//     nome: "Jemima",
//     telefone: "0000-0000",
//     idade:"34",
//     altura:"Pequena demais",
//     peso:"Só pela misericórdia",
// }



// 2. Crie um objeto animal que receba as propriedades: porte(pequeno, médio ou grande), especie, raça.
 
// let animal = {
//     porte: "grande",
//     especie:"cachorro",
//     raça:"vira-lata",
// }
// alert (JSON.stringify(animal.especie));

// 3. Crie um objeto curso que receba as propriedades: nome, período, professor(a).
//  let curso = new Object();
//      curso.nome = "Javascript";
//      curso.periodo =  "Manha,tarde e noite";
//      curso.professor = "Bruna";


// 1. Crie uma lista (string), que contenha o nome de 10 alunas da reprograma.
// Em seguida, verifique o tamanho, e qual aluna está na posição 5


// let alunas = ["jemima","maria","Debora","Vivi","Marisa","Giulia","Millena","Adela","Ariane","Nayla"];
// console.log(alunas [5])

// 2. Crie uma lista de matérias que contenha 6 matérias, e mostre qual matéria está na posição 4.

// let materias = ['css','boostrap','sei la mais oq','sem criativadade'];
// materias.push ('js');
// materias.push ('html5');
// console.log (materias);
// console.log (materias [3]);




// 3. Crie uma lista de números fora de ordem e ordene-a utilizando o método .sort();

//  let numeros = [1,10,50,12,29,70,100,99,2];
//  console.log (numeros.sort(function(a,b){return a-b}));
//   console.log (numeros.length);

// 4. Crie uma lista vazia e verifique se o length == 0 (se a lista estiver vazia) .push()
// inserindo algum valor dentro. Se o length for maior > 0 alert() mostrando o tamanho.


 let lista = [];

 if (lista.length == 0){
 lista.push('não está mais vazia');
 console.log(lista);
}
if (lista.length > 0){
    console.log(lista.length);
}