# Repository for JS study


## Requirements
- npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- node.js : https://nodejs.org/en/download/package-manager
- Vitejs : https://vitejs.dev/guide/#manual-installation

## Start

- ``` npm install ```
- ``` npm run dev ```
- http://localhost:5173/


## Import modules
Import functions soma, sub in ./lib/match

``` 
//Import modules im JS
import { soma, sub} from  './lib/math'
console.log(soma(1,2))
console.log(sub(2,1))

``` 

## Object
Syntax for creating objects
```
const user = {
    name:'Diego',
    idade: 27,
    address: {
        street: 'Rua stret',
        number: 176,
    }
}
```
### Return keys for objetct 
```
document.body.innerText= Object.keys(user)
```

### Return values for object

```
document.body.innerText= Object.values(user)
```

### Returns vectors
```
Document.body.innerText= JSON.stringify(Object.entries(user))
```

### Destrutuction for Json
If there is no nickname, it creates a key with the value 'Fernando'
```
function  mostraidade({ idade, nickname = 'fernando' }){
    return idade, nickname;
}

```


## Rest Operator (...rest)
Returns rest of Json information

### Example for object 
```
const { name, ...rest } = user
```

### Example for array 

```
const arrays = [ 1,2,3,4,5,6,7,8,9,10];
const [first, , third, ...rest] = arrays; 
```
- First : Receive the first index of the array
- " ,  , "  : Jump second index
-  Third: Receive third index of the array
- ...rest : Rest for array



## Short Sintax
Variable inside object = key + value

```
const name ='Diego';
const age = 27;

// Object
const user = {
    name,
    age

}
```

## Optional Chaning
Object:
```
const user = {
    name:'Diego',
    idade: 27,
    address: {
        street: 'Rua teste',
        number: 176,
        zip:{
            code:'3766900',
            city:'Rio do Sul'
        },
        Showfulladress(){
            return 'ok'
        }
    }
}
```

Operator " ? " = If

```
// If there is an address inside user, call the function if it exists inside address
 document.body.innerText = user.address?.Showfulladress?.()
```

### Example: 
Print state if exists key 

```
const key = 'state';
document.body.innerText = user.address?.[key]
```


## Array methods
### Methods: 
- Map
- Filter
- Every
- Some
- Find
- Find index
- Reduce

### Array
```
const array = [1,2,3,4,5];
```

### Simple For
It can be used to iterate over anything, including `arrays, objects, strings`
```
for (const i of array){
  document.body.innerText +=i
}
```
Can be interrupted with `Break` 

### For each
is used exclusively for iterating over arrays.
```
 array.forEach( item => {
     document.body.innerText +=item;
})

```
`Cannot be interrupted`


### .Map ( Create new array from another) 

```
const NovoArray = array.map(item => {
    if (item % 2 == 0){
        return item * 10;
    }
    return item;
})

```

### Filter ( Filters a condition within the array )

```
// Create new array with even numbers
const newArray = array
    .filter(item => item % 2 === 0)
    .map(item => item * 10)

```


### Every (Return boulean value)
```
const TodosItensSaoNumeros = array.every(item => typeof item  == 'number');
```

### Some ( Validates if `ONE` item satisfies the condition ) 

```
const UmItemNaoEumNumero = array.some(item => {
     return typeof item != 'number'
})

```

### Find  ( Find the `first` item that satisfies the condition) 

```
const par = array.find(item => item % 2 == 0);
document.body.innerText = JSON.stringify(par)
```

### Find Inder (Return index item)

```
const par = array.findIndex(item => item % 2 == 0)
document.body.innerText = JSON.stringify(par)
```

### Reduce (Create a new data structure based on the array ) 

´´´
const soma = array.reduce((acc, item) => {
     return acc + item
}, 0)
document.body.innerText = JSON.stringify(soma)
´´´

## Template Literals (How to concatenate strings) 

```
const name = null;
const message = `Bem-vindo, ${name ? name:'visitante'}`;
document.body.innerText= message
```


## Promisses

An object that represents the eventual completion or failure of an asynchronous operation

States: 

- Pending
- Fulfilled
- Rejected 

### Chaning 
`.then()`: Used to handle the successful resolution of a Promise.
`.catch()`: Used to handle failures in a Promise.

### Example : 

```
// Every async function returns a Promise

async function searchData() {
    try {
        const response = await fetch('https://api.github.com/users/LucasMaciel7');
        const body = await response.json();
        return body.name;
    } catch (err) {
        // Error handling if the promise is rejected
        console.log(err);
    } finally {
        // Runs regardless of the promise outcome
        console.log('Operation complete');
    }
}

// .then (If the promise resolves successfully)
searchData().then(name => {
    console.log(name);
});

```



# References

- https://www.youtube.com/watch?v=37SwqREHRGI&t=1s

