

# 📚 **Repository for JS Study**

## 🛠️ **Requirements**
- **npm**: [Download and Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **Node.js**: [Install Node.js](https://nodejs.org/en/download/package-manager)
- **Vitejs**: [Vite.js Installation Guide](https://vitejs.dev/guide/#manual-installation)

## 🚀 **Start the Project**

1. Install dependencies:
   ```bash
   npm install
   ```
   
2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser:
   ```bash
   http://localhost:5173/
   ```

## 📦 **Importing Modules**
To import the functions `soma` and `sub` from the file `./lib/math`, use the following code:

```js
// Import modules in JS
import { soma, sub } from './lib/math';
console.log(soma(1, 2));  // Output: 3
console.log(sub(2, 1));  // Output: 1
```

## 🧑‍💻 **Classes in JavaScript**
There are two ways to create objects in JavaScript.

### 1️⃣ **Creating an Object Directly**
```js
const user = {
    name: 'Diego',
    age: 27,
};
```
This method is useful for simple cases where you need a quick data structure. However, when code reuse is important, using a constructor class is more beneficial.

### 2️⃣ **Constructor Class**
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

### 🧑‍🏫 **Object Instantiation**
```js
const LucasMaciel7 = new Users('Lucas', 15, 'street');
```

### 🔎 **Calling Methods**
To call the methods on the object, use the following syntax:

```js
LucasMaciel7.describeObject();
```

This method returns the object in JSON format.

#### 📝 **Console Output**
```json
{
    "address": "street",
    "age": 15,
    "name": "Lucas"
}
```

### 🔑 **Returning Keys from the Object**
You can use the method `describeKeys` to return the keys of the object.

- **Method**:
```js
describeKeys() {
    document.body.innerHTML = Object.keys(this);
}
```

#### 📝 **Output**:
```bash
name, age, address
```

### 🔄 **Returning Values from the Object**
You can use the method `describeValues` to return the values of the object.

- **Method**:
```js
describeValues() {
    document.body.innerHTML = Object.values(this);
}
```

#### 📝 **Output**:
```bash
Lucas, 15, Doutor Aloísio Procopio
```

### 🔧 **Destructuring for JSON**
If there is no nickname, it creates a key with the value 'Fernando'.
```js
function  mostraidade({ idade, nickname = 'Fernando' }){
    return idade, nickname;
}
```

## 🌐 **Rest Operator (`...rest`)**
Returns the rest of the information from the object.

### Example for object:
```js
const { name, ...rest } = user;
```

### Example for array:
```js
const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = arrays;
```
- `first`: Receives the first element of the array.
- `, ,`: Skips the second element.
- `third`: Receives the third element of the array.
- `...rest`: Receives the rest of the array.

## 📝 **Short Syntax**
Variable inside object = key + value

```js
const name ='Diego';
const age = 27;

// Object
const user = {
    name,
    age
};
```

## ❔ **Optional Chaining**
Object:
```js
const user = {
    name: 'Diego',
    idade: 27,
    address: {
        street: 'Rua teste',
        number: 176,
        zip: {
            code: '3766900',
            city: 'Rio do Sul'
        },
        showFullAddress() {
            return 'ok';
        }
    }
};
```

Operator `?` (Optional chaining):
```js
// If there is an address inside user, call the function if it exists inside address
document.body.innerText = user.address?.showFullAddress?.();
```

### 🗺️ **Example**: 
Print state if the key exists.

```js
const key = 'state';
document.body.innerText = user.address?.[key];
```

## 📋 **Arrays in JavaScript**

A simple array in JavaScript:
```js
const array = [1, 2, 3, 4, 5];
```
We can check array length like this:

```js
console.log(array.length); // Output: 5
```

To concatenate arrays, use the `concat()` method:
#### Example:
```js
const array1 = [1, 2, 3, 4, 5, 8];
const array2 = ['a', 'b', 'c'];
const array3 = array1.concat(array2);
console.log(array3); // Output: [1, 2, 3, 4, 5, 8, 'a', 'b', 'c']
```

### 🔧 **Array Methods**: 
- `map()`
- `filter()`
- `every()`
- `some()`
- `find()`
- `findIndex()`
- `reduce()`


### 🔁 **Simple `for`**
It can be used to iterate over anything, including arrays, objects, and strings.

#### 🔄 **Syntax**
- `for...of` iterates over the elements of the array:
```js
const array = [1, 2, 3, 4, 5];
for (const i of array) {
    console.log(i); // Output: 1, 2, 3, 4, 5
}
```

- `for...in` iterates over the keys (index for arrays, properties for objects).

Example for array:
```js
const array = [1, 2, 3, 4, 5];
for (const i in array) {
    console.log(i); // Output: 0, 1, 2, 3, 4 (Returns array indices)
}
```

Example for object:
```js
const user = { 
    name: "Lucas",
    age: 19
};

for (const key in user) {
    console.log(key); // Output: name, age
}

for (const key in user) {
    console.log(user[key]); // Output: Lucas, 19
}
```

###  **`forEach`**
`forEach` is used exclusively for iterating over array elements.

```js
const array = [1, 2, 3, 4, 5, 7];
array.forEach((element) => console.log(element)); // Output: 1, 2, 3, 4, 5, 7
```

- Another example:
```js
const items = [1, 2, 3, 4, 5, 7];
const copyItems = [];

// Before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
}

// After
items.forEach((item) => {
    copyItems.push(item);
});
console.log(copyItems); // Output: [1, 2, 3, 4, 5, 7]
```

### 🌟 **.map**
This method allows us to create a new array from another, just like `forEach`, by passing a function as a parameter. The difference is that `.map()` returns a new array based on the return value of the function provided.

```js
const array = [1, 2, 3, 4, 5];
const newArray = array.map(item => {
    if (item % 2 === 0) {
        console.log(item); // Expected output: [2, 4]
    }
});
```

### 🔍 **.filter**
This method allows us to filter each element by returning `true` or `false` for each element. Only the elements that return `true` will be included in the new array.

```js
const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(element => element < 3);
console.log(filteredArray); // Expected Output: [1, 2]
```

### 🔄 **.every**
This method checks if **all** elements in the array satisfy a condition and returns `true` or `false`.

```js
const array = [1, 2, 3, 4];
const allItemsAreNumbers = array.every(element => typeof element === 'number');
console.log(allItemsAreNumbers); // Expected output: true
```

### 🔍 **.find**
This method finds the **first** item that satisfies a given condition and returns it.

```js
const array = [1, 2, 3, 4, 5];
const firstEven = array.find(item => item % 2 === 0);
console.log(firstEven); // Expected output: 2
```

### 🔎 **.findIndex**
This method returns the **index** of the first item that satisfies a given condition.

```js
const array = [1, 2, 3, 4, 5];
const firstEvenIndex = array.findIndex(item => item % 2 === 0);
console.log(firstEvenIndex); // Expected output: 1
```

### ➕ **.reduce**
This method reduces an array to a single value by applying a function to each element.

```js
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((acc, item) => acc + item, 0);
console.log(sum); // Expected output: 15
```

## 📝 **Template Literals (String Interpolation)**
Template literals allow for easier string concatenation.

```js
const name = null;
const message = `Welcome, ${name ? name : 'Guest'}`;
console.log(message); // Output: Welcome, Guest
```

## 📜 **Promises**
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

### States of a Promise:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

### Promise Methods:
- `.then()`: Used to handle the successful resolution of a promise.
- `.catch()`: Used to handle promise rejections.

### Example:
```js
async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/LucasMaciel7');
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log('Error:', error);
    } finally {
        console.log('Request completed');
    }
}

fetchData();
```




# References

- https://www.youtube.com/watch?v=37SwqREHRGI&t=1s

