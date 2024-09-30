import { soma, sub} from  './lib/math'
// console.log(soma(1,2))
// console.log(sub(2,1))


class Users { 
    // Contructor this called white create new instances for class
    constructor(name, age, addres) {
        this.name = name;
        this.age = age;
        this.addres = addres;
    }

    // Methods
    discribeObject(){
        document.body.innerHTML = JSON.stringify(this)
    }

    discribeKeys(){
        document.body.innerHTML = Object.keys(this)
    }

    discribeValues(){
        document.body.innerHTML = Object.values(this)
    }

    // Return array a keys and values
    discribeVectors(){
        document.body.innerHTML = JSON.stringify(Object.entries(this))
    }

    
}


const LucasMaciel7 = new Users('lucas', 15, 'Doutor aloisio procopio');
const LucasMaciel = new Users('LucasM', 15, {stret: "rua1", city: "ppg"})


// LucasMaciel7.discribeValues();















//Object
// const user = {
//     name:'Diego',
//     idade: 27,
//     address: {
//         street: 'Rua stret',
//         number: 176,
//     }
// }

// Return keys for objetct
// document.body.innerText= Object.keys(user)

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

// const array1 = [1,2,3,4,5,8];
// for (let i of array1){
//     console.log(i)
// }
// const array2 = ['a','b','c']
// const array3 = array1.concat(array2) 

// // Expected Output  [1,2,3,4,5,8,'a','b','c']

// const user = { 
//     name: "Lucas",
//     age: 19
// }

// for (let key in user){ 
//     console.log(key); // Expected output object keys 
// }

// for (let key in user){ 
//     console.log(user[key]); // Expected output values the object
// }

// const items = [1,2,3,4,5,7]
// const copyitems = []

// //before
// for (let i = 0; i < items.length; i++){
//     copyitems.push(items[i])
// }

// // after
// items.forEach((item) => {
//     copyitems.push(item);
// });
// console.log(copyitems) //// Expected output copyitems 1,2,3,4,5,7

//// Metodo .map  Retorna um novo array através de outro
// const array = [1,2,3,4,5]

// const NovoArray = array.map(item => {
//     if (item % 2 == 0){
//     }
// })

// console.log(NovoArray)


/////Filter (Filtra condição dentro do array)
// const array = [1,2,3,4,5]
// const novoArray = array.filter( (element) => {
//     return element < 2;
// })

// console.log(novoArray)


/////// Every (Retorna true ou false de acordo com a condição)
// const array = [1,2,3,4] 
// const allItensIsNumber = array.every((Element) => {
//     return typeof Element === 'number'
//  })

//  console.log(allItensIsNumber) // Expected output True

//// Some (Verifica se UM item satisfaz a condição)

// const UmItemNaoEumNumero = array.some(item => {
//     return typeof item != 'number'
// })

//////// Find(Encontra o primeiro item que satisfaz a condição)

// const par = array.find(item => item % 2 == 0);
// document.body.innerText = JSON.stringify(par)


////  Findindex (Retorna index encontrado)
const array = [1,2,3,4,5]
const par = array.findIndex(item => item % 2 == 0)
document.body.innerText = JSON.stringify(par) // Expected output first index satisfasing 1 = value 2 



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





