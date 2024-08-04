// Import modules im JS
// import { soma, sub} from  './lib/math'
// console.log(soma(1,2))
// console.log(sub(2,1))






// Object
// const user = {
//     name:'Diego',
//     idade: 27,
//     address: {
//         street: 'Rua stret',
//         number: 176,
//     }
// }

//// Return keys for objetct
//document.body.innerText= Object.keys(user)

/////Return values for object
//document.body.innerText= Object.values(user)

////Return vetores
//ocument.body.innerText= JSON.stringify(Object.entries(user))



/////Destrutuction ( Quebra o Json) 
// function  mostraidade({ idade, nickname = 'fernando' }){
//     return idade, nickname;
// }



///// Rest Operator

//const { name, ...rest } = user
//const arrays = [ 1,2,3,4,5,6,7,8,9,10];
//const [first, , third, ...rest] = arrays;  // Pula o segundo indice do array com a virgula vazia

//document.body.innerText = JSON.stringify({first,third,rest})




////////Short Sintax

// const name ='Diego';
// const age = 27;
// Mesmo nome para chave e variavel
// const userid = {
//     name,
//     age

//}



//////// Optional Chaning


// const user = {
//     name:'Diego',
//     idade: 27,
//     address: {
//         street: 'Rua teste',
//         number: 176,
//         zip:{
//             code:'3766900',
//             city:'Rio do Sul'
//         },
//         Showfulladress(){
//             return 'ok'
//         }
//     }
// }

////// Operador " ? " Verifica se a função existe
// document.body.innerText = user.address?.Showfulladress?.()

// Printa caso exista a key
// const key = 'state';
// document.body.innerText = user.address?.[key]



/////// Metodos de array

//// map, filter, every, some, find, find index, reduc

// const array = [1,2,3,4,5,];

// for (const i of array){
//     document.body.innerText +=i
// }


// array.forEach( item => {
//     document.body.innerText +=item;
// })


////// Metodo .map  Retorna um novo array através de outro
// const NovoArray = array.map(item => {
//     if (item % 2 == 0){
//         return item * 10;
//     }
//     return item;
// })


///////Filter (Filtra condição dentro do array)

// const novoArray = array
//     .filter(item => item % 2 === 0)
//     .map(item => item * 10)


/////// Every (Retorna true ou false de acordo com a condição)
// const TodosItensSaoNumeros = array.every(item => typeof item  == 'number');


//// Some (Verifica se UM item satisfaz a condição)

// const UmItemNaoEumNumero = array.some(item => {
//     return typeof item != 'number'
// })

//////// Find(Encontra o primeiro item que satisfaz a condição)

// const par = array.find(item => item % 2 == 0);
// document.body.innerText = JSON.stringify(par)


//////  Findindex (Retorna index encontrado)
// const par = array.findIndex(item => item % 2 == 0)
// document.body.innerText = JSON.stringify(par)



////////Reduce (Criar uma nova estrutura de dados combase no array dentro do acc) 

// const soma = array.reduce((acc, item) => {
//     return acc + item
// }, 0)
// document.body.innerText = JSON.stringify(soma)


//// Template literals ( Forma de manusear strings)
// const name = null;
// const message = `Bem-vindo, ${name ? name:'visitante'}`;
// document.body.innerText= message



// Promisses (É uma promessa de que algo vai ser feito, ele não para todo o seu codigo para esperar um resultado, funciona de forma assincrona) 


///// Toda Função async se torna um Promisse

//// async function SeachData(){

//         try{
//         
          ///await aguarda a promisse finalizar para seguir com o codigo

//         const response = await fetch('https://api.github.com/users/LucasMaciel7');
//         const body = await response.json();
//         return body.name;
           
           // Cath ( Tratativa de erro caso a promisse não de certo)
//         } catch (err) {  
//             console.log(err)

           // Finally ( Roda independente do resultado da promisse)
//         } finally {  
//             console.log('Deu bom')
//         }        
// }

/// .then ( Caso dê certo a promisse)
// SeachData().then(name => {
//     console.log(name)
// })





