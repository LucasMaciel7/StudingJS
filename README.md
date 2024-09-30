
# Repository for JS Study

## Requirements
- **npm**: [Download and Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **Node.js**: [Install Node.js](https://nodejs.org/en/download/package-manager)
- **Vitejs**: [Vite.js Installation Guide](https://vitejs.dev/guide/#manual-installation)

## Start the Project

1. Install dependencies:
   ```bash
   npm install
   ```
   
2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser:
   ```
   http://localhost:5173/
   ```

## Importing Modules
To import the functions `soma` and `sub` from the file `./lib/math`, use the following code:

```js
// Import modules in JS
import { soma, sub } from './lib/math';
console.log(soma(1, 2));
console.log(sub(2, 1));
```

## Classes in JavaScript
There are two ways to create objects in JavaScript.

### 1. Creating an Object Directly
```js
const user = {
    name: 'Diego',
    age: 27,
};
```
This method is useful for simple cases where you need a quick data structure. However, when code reuse is important, using a constructor class is more beneficial.

### 2. Constructor Class
```js
class Users { 
    // Constructor is called when a new instance of the class is created
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Methods
    describeObject() {
        document.body.innerHTML = JSON.stringify(this);
    }

    describeKeys() {
        document.body.innerHTML = Object.keys(this);
    }

    describeValues() {
        document.body.innerHTML = Object.values(this);
    }

    // Return an array of keys and values
    describeVectors() {
        document.body.innerHTML = JSON.stringify(Object.entries(this));
    }
}
```
This approach allows for better code reuse and object instantiation.

### Object Instantiation
```js
const LucasMaciel7 = new Users('Lucas', 15, 'street');
```

### Calling Methods
To call the methods on the object, use the following syntax:

```js
LucasMaciel7.describeObject();
```

This method returns the object in JSON format.

#### Console Output
```json
{
    "address": "street",
    "age": 15,
    "name": "Lucas"
}
```

### Returning Keys from the Object
You can use the method `describeKeys` to return the keys of the object.

- **Method**:
```js
describeKeys() {
    document.body.innerHTML = Object.keys(this);
}
```

#### Output:
```bash
name, age, address
```

### Returning Values from the Object
You can use the method `describeValues` to return the values of the object.

- **Method**:
```js
describeValues() {
    document.body.innerHTML = Object.values(this);
}
```

#### Output:
```bash
Lucas, 15, Doutor Aloísio Procopio
```

### Destrutuction for Json
If there is no nickname, it creates a key with the value 'Fernando'
```js
function  mostraidade({ idade, nickname = 'fernando' }){
    return idade, nickname;
}

```


## Rest Operator (...rest)
Returns rest of Json information

### Example for object 
```js
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

```js
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
```js
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

```js
// If there is an address inside user, call the function if it exists inside address
 document.body.innerText = user.address?.Showfulladress?.()
```

### Example: 
Print state if exists key 

```js
const key = 'state';
document.body.innerText = user.address?.[key]
```


## Array 

It's simple array in  JavaScript
```js
const array = [1,2,3,4,5];
```
We can check array lenght for

```js
console.log(array.lenght) // Output 5
```
to concatenate there array, we use this mehtod `concat()`<br>
#### Example
```js
const array1 = [1,2,3,4,5,8];
const array2 = ['a','b','c']
const array3 = array1.concat(array2) 
console.log(array3)
// Expected Output  [1,2,3,4,5,8,'a','b','c']
```
### Methods: 
- Map
- Filter
- Every
- Some
- Find
- Find index
- Reduce

### Array




### Simple `For`
It can be used to iterate over anything, including `arrays, objects, strings`

#### Sintax
it is method interate of elements within `array` 

- `for... of` interates  over the elements of the `array`
```js
array = [1,2,3,4,5]
for (const i of array){ 
     console.log(i) // Expected output 1, 2, 3, 4, 5
}
```

- `for... in` interates over keys the `object` or array index 

Example array 
```js
array = [1,2,3,4,5]
for (const i in array){
   console.log(i) // Expected output 0,1,2,3,4(Returns array index)
}
```

Example object

```js
const user = { 
    name: "Lucas",
    age: 19
}

for (let key in user){
   console.log(key) // Expected output 
} 
```
or 

```js
for (let key in user){ 
    console.log(user[key]); // Expected output values the object
}
```

### For each
is used exclusively for iterating over elementes array.

```js
const array = [1,2,3,4,5,7]
array.forEach((element) => console.log(element)) // Expected Output 1,2,3,4,5,7
```
- Second example
```js
const items = [1, 2, 3, 4, 5, 7];
const copyitems = [];

// Before
for (let i = 0; i < items.length; i++) {
    copyitems.push(items[i]);
}

// After
items.forEach((item) => {
    copyitems.push(item);
});
console.log(copyitems); // Expected output: [1, 2, 3, 4, 5, 7]
```
You can use `ForEach` to iterate over the elements of an array, passing the parameters to this `function` for each element in the iteration.
- `(item) => {}` is an arrow function used in the `ForEach` method
 


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

