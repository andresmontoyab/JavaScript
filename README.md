# JavaScript

* [Basic JavaScript](#Basic-JavaScript)
    * [Variables](#Variables)
        * [Hello World](#Hello-World)
        * [Console](#Console)
        * [Create Variables](#Create-Variables)
        * [Information Type](#Information-Type)
        * [Comments](#Comments)
        * [Constants](#Constants)
    * [Logical Operators](#Logical-Operators)
    * [Comparission](#Comparission)
        * [===](#===)
        * [==](#==)
    * [Control Flow](#Control-Flow)
        * [If](#If)
        * [For](#For)
    * [Functions](#Functions)
    * [Objects](#Objects)
        * [Functions in Objects](#Functions-in-Objects)
        * [Problems with This](#Problems-with-This)
        * [Polymorphism](#Polimorphism)
        * [Instance Objects](#Instance-Objects)
        * [Prototypes](#Prototypes)
        * [Override Methods](#Override-Methods)
        * [__proto__](#__proto__)
        * [Constructor Function](#Constructor-Function)
        * [Constructor Hierarchy](#Constructor-Hierarchy)
        * [Prototype Hierarchy](#Prototype-Hierarchy)
    * [Array](#Array )  
        * [Array-Add](#Array-Add)  
        * [Array-Search](#Array-Search)  
        * [Array-Delete](#Array-Delete)  
    * [Functional Programming](#Functional-Programming)
        * [No Side Effects](#No-Side-Effects)
        * [Inmutability](#Inmutability)
        * [Recursivity](#Recursivity)
        * [Higher order functions](#Higher-order-functions)
            * [Filter](#Filter)
            * [Map](#Map)
            * [Some](#Some)
            * [Every](#Every)
            * [Closures](#Closures)
    * [Asynchronism](#Asynchronism)
        * [Callback](#Callback)
        * [Errors with Callback](#Errors-with-Callback)
        * [Callback Hell](#Callback-Hell)
        * [Async Library](#Async-Library)
            * [Async Series](#Async-Series)
            * [Async Waterfall](#Async-Waterfall)
            * [Async Parallel](#Async-Parallel)
            * [Async each](#Async-each)
            * [Async Filter-Reject](#Async-Filter-Reject)
            * [Async Map](#Async-Map)
            * [Async reduce](#Async-reduce)
            * [Async Compose](#Async-Compose)
            * [Async Retry](#Async-Retry)
    * [Promises](#Promises)
        * [Promises-Flow](#Promises-Flow)
        * [Promises Vs Callback](#Promises-Vs-Callback)
        * [Creating Promises](#Creating-Promises)
        * [Promises Chained](#Promises-Chained)
        * [Promises Chained with Error](#Promises-Chained-with-Error)
        * [Promises in parallel](#Promises-in-parallel)
            * [Promise.all](#Promise.all)
            * [Promise.race](#Promise.race)
    * [Library of Objects](#Library-of-Objects)
        * [Array - Methods](#Array-Methods)
        * [String - Methods](#String-Methods)
        * [Number - Methods](#Number-Methods)
        * [Function - Methods](#Function-Methods)
    * [ES6](#ES6)
        * [Arrow Functions](#Arrow-Functions)
        * [Destructuring](#Destructuring)
        * [Destructuring Arrays](#Destructuring-Arrays)
        * [StringTemplate](#StringTemplate)
    * [Libraries](#Libraries)
        * [Moment.js](#Moment.JS)
        * [Reselect](#Reselect)
    * [Testing](#Testing) 
        * [Jasmine](#Jasmine) 
        * [Install](#Install) 
    * [Task Runner](#Task-Runner) 
        * [Workflow](#Workflow) 
        * [Install](#Install) 
        * [GulpFile](#GulpFile) 
        * [Create Tasks](#Create-Tasks) 
        * [Create Async Tasks ](#Create-Async-Tasks ) 
        * [Gulp-Watch](#Gulp-Watch) 
        * [Browser-sync](#Browser-sync ) 
        * [Upload Archives](#Upload-Archives) 


# Basic JavaScript

# Variables

In order to do the next examples you need to create a simple file with .js extesions and write all of the next code there.

## Hello World

```js
alert("Hello World");
```

## Console

```js
console.log("Hello World");
```

## Create Variables

```js
var lastname = "Smith";
```

## Information Type

### String

Is a simple text

```js
var lastname = "Montoya"
```

### Numbers 

```js
var age = 24;
```

When I have a number in a variable, I can perform all kind of numeric operations like +, -, * or /.

### Boolean 

Booleans only have two values, true or false.

```js
var isTrue = true;
```

### Undefined

When we define a var but without a value the default value is undefined.

```js
var a;
console.log(a); // undefined
```

### Null

We can defined a variable with "nothing" that is null.

```js
var a;
a = null;
console.log(a) // null
```

## Comments

In Javascript we can write comments, to organize or help us to understand the code that we are writting.

- One line comment

```js
// One Line comment
```

- Comment multi line

```js
/* This line is ignore
this line too
this line too */
```

### Constants

The use of constants in JS helps to increase the consistency of the naming in the programs.

To create constantes in JS you must follow the next steps.

1. Create a JS file in which you wil define the constant that you need(for this example is the weather.js file).

```js
export const CLOUD = "cloud";
export const CLOUDY = "cloudy";
export const SUN = "sun";
export const RAIN = "rain";
export const SNOW = "snow";
export const WINDY = "windy";
```

2. Import and use those constante in the file that you need it.

```js
import {
    CLOUD ,
    CLOUDY,
    SUN,  
    RAIN, 
    SNOW, 
    WINDY, 
} from './../constants/weather';
console.log(RAIN);
```

## Logical Operators

In programming lenaguages usually there are specific operator that can helps us with boolean algebra as conjuntion, disjunction or negations, in JS there are some of those operators.

### And

In order to use the And Operator you must use the symbol `&&`

```js
var age = 8;
var genre = "m"
if (age >= 18 && genre === "m") {
    alert("The user is male and is adult");
}
```

### Or

In order to use the Or Operator you must use the symbol `||`

```js
var age = 8;
var genre = "m"
if (age >= 18 || genre === "m") {
    alert("The user is male or adult");
}       
```

### Negation

In order to use the Negation Operator you must use the symbol `!`

```js
var age = 8;
var genre = "m";

if(!(age >= 18)) {
    alert("The user is not adult");
}
```

## Comparission

### ===

In objects the three "=" is going to compare by identiy, that mean if your reference point to the same object.

### ==

The two = is similar to the previous one already explained, but wiht one difference, the two "=" try to convert the variables in a common type, so the next examples are going to be true.

```js
if (true == 1) console.log("This is true");
uif (undefined == null) console.log("This is true too");
if(“” == 0 ) console.log("And this too");
```

The important point here is that the "==" could cause a lot of inconsistency, so for this reason the recomendation is always use the "===".

## Control-Flow

### If

If we have a condition we can use the statemnt if and else statement.

 - if the condition is true is going to execute the block of code inside de if.
 - But if the condition is false, the "if" code is not going to execute.
 - If there is a else block and the condition result false, the block code of the else is going to execute.

```js
var age = 8;
if (age => 18) {
    alert("He/She is adult");
} else {
    alert("He/She is not adult");
}
```

### For

For is a statement that let us make a loop in base in one condition.

```js
for(var i = 0; i<10; i++) {
    // Code to do right here
}
```

As you can see the for statement have 4 parts.

1. Is the first parameter and only is executed once at the begginning of the execution.

2. Is the main condition of the for, if this condition is true is going to execute the block of code inside the for.

3. Is executed after each execution of the for block code, usually represent the update of the condition.

4. Block of code.

## Functions

### Create a function

```js
function nameOfTheFunction() {
    // Code right here
}

// Calling function
nameOfTheFunction();
```

### Create function with parameters

```js
function nameOfTheFunction(param1, param2) {
    alert(param1, param2);
}

nameOfTheFunction("hi", "there");
```        

### Create function with return statement.

```js
function nameOfTheFunction(param1, param2) {
    return param1 + param2;
}
```

Local variables in the function.

```js
function nameOfTheFunction(param1, param2) {
    var age = 23;
    return param1 + param2;
}
```        

The variables defines within a function only have the scope within the function, not outside.

## Objects

Usually when we are writing code we need to abstract a concept from the real word(In this example is going to be a box), those concepts usaully have two properties. Behaviors(methods) and state(atributes), 

If you have a box with fruits and we need put the information in JavaScript we can use the next approach.

```js
var weightBox = 3;
var fruitsNumber = 10;
```

Nevertheless we created two variables and the ideal situation is that both variables are tied enought to always respresent the box information, another approach is the next.

```js
var boxInfo =
{
    weightBox: 3,
    fruitsNumber: 10
}
```        

Also I can create a object with the following approach:

```js
var box = new Object();
box.weightBox = 3;
box.fruitsNumber = 10;
```

or

```js
var box = {};
box.weightBox = 3;
box.fruitsNumber = 10;
```

### Functions in Objects

As we said previously objects have two properties behaviors and atributes, in the above examples we created some objects wth atributes, now let's create object with behaviors.

```js
var user = new Object();
user.name = "Andres";
user.age = 23;
user.hello = function(){
alert("Hola");
}
```


```js
var user =
{
    name: "Andres",
    age: 23,
    hello: function() {
        alert("hola" + this.nombre);
    }
}
```

As you can see, in the last approach you can access with the keyword this to the values of the object.

### Problems with This

In some times, when you use nested this, could cause problem, because you loss the reference this in the most deep code.

```js
gru.saludarAntesDeIrADormir  = function() {
    this.minions.forEach(function(minion){
        this.saludarA(minion);
});
};
```

The previous code is going to fail.

There are three solutions for this.

1. Create a var and store the value of "this" and replace the this by the new var.

```js
gru.saludarAntesDeIrADormir  = function() {
    var ins = this;
    ins.minions.forEach(function(minion){
        ins.saludarA(minion);
});
};
```

2. Using the bind(this) method in the callback

```js
gru.saludarAntesDeIrADormir  = function() {
    this.minions.forEach(function(minion){
        this.saludarA(minion);
}.bind(this));
};
```

3. Passing the this as forEach parameter.

```js
gru.saludarAntesDeIrADormir  = function() {
    this.minions.forEach(function(minion){
        this.saludarA(minion);
},this);
};
```

### Polimorphism

The polimorphism is one of most powerful concepts in OOP, the idea with polimorphism is that an object could have different implementation depends of the object but you can call it in the same way all the times.

```js
var bob = {name:'bob'};

bob.sayHello = function () {
    console.log('bob responde: banana');
};

var	stuart = {name:'stuart',
                sayHello: function() {
                    console.log('stuar responde: hey there');
                }  };

var gru = {
        minions: [bob, stuart],
        sayHelloBeforeSleep: function() {
            this.minions.forEach(function(minion){
                console.log('Gru dice: Chau ' + minion.name);
                minion.sayHello();
            });
        }
};
```

### Instance Objects

To instance object we usually create function in which we could create objects.

```js
var createTv = function(usefulTime){
    var tv = {};
    tv.usefulTime = usefulTime;
    tv.turnOn = function() {
        this.usefulTime = this.usefulTime - 0.01;
    }
    return tv;
}

var aTv = createTv(9000);
var anotherTv = createTv(8000);
```

There is another way to instance object in JS by prototypes.

### Prototypes

```js
var anRectangule ={
    width:10,
    height:20,
};

anRectangule.area = function(){
    return this.width * this.height;
}

anRectangule.area();
```

In the previous example we created a object with two properties and one method, but what happend if I want to created another rectangule object with different widh and height but with the same area function, should I write the same amount of code?

The answer is no, we can create prototypes.

1. In prototypes we are going to write all the common methods in the objects.

2. After that we create the instance of the object using Object.create(prototype);

3. Finally we set the properties to the object.

```js
var rectanguleProtoype = {
    area: function() {
        return this.width * this.height;
    }
}

var aRectangule = Object.create(rectanguleProtoype);
aRectangule.width = 10;
aRectangule.height = 20;

var anotherRectangule = Object.create(rectanguleProtoype);
anotherRectangule.width = 20;
anotherRectangule.height = 20;

/* At this point I'm able to call the method area, because all the variables are set, if I called area before this is going to cause problems.*/

aRectangule.area(); // 200
anotherRectangule.area(); // 400
```

Methods define in the object are more important that methods define in the prototype.

### Override Methods

Basic Instance

```js
var rectanguleProtoype = {
    area: function() {
        return this.width * this.height;
    }
}

var aRectangule = Object.create(rectanguleProtoype);
aRectangule.width = 10;
aRectangule.height = 10;


aRectangule.area = function() {
    return this.width * this.width;  // Replace height by width
}
```

As you can see in the above code, we re-write at the end the area function, but only in the reference "aRectangule."

Now the question is, Which of the two function `area()` is going to be called with aRectangule.area()? The answer is re-write function, because when I use aRectangule.area() first JS is going to search if there is any function call area in the Object and if not search in the prototype, that means that first check the object properties and after the prototype properties.

### __proto__

When I use the property __proto__ in a Object, is going to return the base prototype.

```js
aRectangule.__proto__  {
    area: function() {
        return this.width * this.height;
    }
```

With this __proto__ can I validate if two object have the same prototypes.

If we create an object with the syntax {}, the property __proto__ is going to return the base prototype, that mean that all the objects create with {} are going to have the same prototype.

```js
var square = {};
var circle = {}

square.__proto__ === circle.__proto__ // true
```

There is one exception, if I use the Object.create(null), when i use the __proto__ the return will be an undefined.

### Constructor Function

As we see in the previous topic, when we use Prototypes we should created the object and after that set the variables.

```js
var squarePrototype: {
    area: function() {
        return this.side * this.side;
    }
}

var aSquare = Object.create(squareProtutype);
aSquare.side = 3;

var anotherSquare = Object.create(squareProtutype);
anotherSquare.side = 5;
```

To solve the problem of use Object.create() and after that set variables we can use Constructor function, that is a function in which you pass the initial Object values.

```js
var Square = function Square(side) {
    this.side = side;
}

Square.prototype = {
    area: function() {
        return this.side * 2;
    }
}

var firstSquare = new Square(2);
var secondSquare = new Square(5);
```

### Constructor Hierarchy

When I have an base object and I want to create another object with more properties, is require that in the new object constructor function the constructor function of the base object, let's see it.

```js
var Person = function(energy) {
    this.energy = energy;
}

var Wizard = function(stamina) {  // Wizard is a subclass of person
    this.stamina = stamina;
}
```

With the previous approach we have two constructor function one for Person and one for Wizard, the point here is that Wizard must have the property energy too, but if we create a Wizard object this property is not going to be there, to solve this we need to call the other constructor function.

```js
var Wizard = function(stamina) {  // Wizard is a subclass of person
    Person.call(this);
    this.estamina = estamina;
}
```

Now, the object wizard have also all the Person properties.

### Prototype-Hierarchy

```js
var Person = function(energy) {
    this.energy = energy;
}

Person.prototype = {
    walk: function() {
        console.log("Walking");
        this.energy -= 5;
    },
    sleep: function() {
        console.log("Sleeping");
        this.energy += 5;
    }
}

    var Wizard = function(estamina) {  // Wizard is a subclass of person
    Person.call(this);
    this.estamina = estamina;
    }

Wizard.prototype = Object.create(Persona.prototype);
Wizard.prototype.castSpell = function(){
    this.estamina -= 10;    
}
```

In the previous example we created a chain of prototype or Hierarchy of protoypes. As you can notice the key here is created the new prototype in base of the base prototype and add the require methods.

## Array

Array is a data structure in which we can store a lot of information with the same type.

```js
var nums = [1, 2];
```

In an array you even can store objects

```js
var objects = [
    {
        num:3, 
        type:"A"
    },
    {
        num:3,
         type:"A"
    }
];
```

Also I can create an array using the keyword new Array();

```js
var newArray = new Array(1,2,3);
```

### Array-Add

If there is an array that was created before, we could add more elements in the next way

```js
var nums = [1,2,3];
nums[3]=4;
console.log(nums) // 1,2,3,4
```

In some specific situation we don't know the size of the array, so is complicate to know where insert the new value, for this reason there is a function call push() which insert one value at end of the array.

```js
var nums = [1,2,3];
nums.push(4);
console.log(nums) // 1,2,3,4
```

### Array-Search

```js
var nums = [1,2,3];
console.log(nums[1]) // 2
```

### Array-Delete

To delete the last element of the array we can use the function pop(), also this function return the removed element ;

```js
var nums = [1,2,3];
var removedElement nums.pop();
console.log(removedElement) // 3
```

# Functional Programming

This kind of programming is based on "Functions" and some principles like No Side Effects, Inmutability among others.

## No Side Effects

In imperative lenguage a lot of time we could change the value of objects, and even in some function we could use global variables that are changing, in functional programming this kinda of code does not exist, because in functional progrmming function only use the parameters, those function can not use mutable global variables because this represent a side effect in the function.

## Inmutability

Inmutability is a structure in which the components related with the structore are not going to change, if we need to change we must to create another object. This helps to preserve the value of the object in the time.

Imperative Approach

```js
function eat(golondrina, alpiste) {
    return golondrina.energy + (alpiste * 10);
}
```

Functional Approach

```js
function eat(golondrina, alpiste) {
    return {
        name: golondrina.name,
        energy: golondrina.energy + (alpiste * 10)
    };
}
```

## Recursivity

For recursivity is require to have the next concepts.

1. A "base case", which is responsable to say how to begin the recursivity.

2. Recursive case, tell me how to continue the recursivity.

Imperative Approach

```js
function summation(list) {
    var result = 0;          // base case
    list.forEach(function(x) {
        result += x;         // recursive case
    });
    return result;
}
```

Recursive Approach

```js
function summation(list) {
    if(isEmpty(list)){
        return 0;
    } else {
        return summation(init(list) + last(list))
    }
}
```

Another Example:

```js
function factorial() {
    if(n == 0) {
        return 1;
    } else {
        return factorial(n-1) * n
    }
}
```

## Higher order functions

These kinda of function, are special function that receive as parameter other functions.

## Filter

Filter is a higher order function because this function receive another function as parameter.

```js
var isShort = function() {
    // code...
};
list.filter(isShort);  // This return a new list with those elements that return true in the function isShort
```

## Map

If i want to map elements in an array to another kind of element I can use another Higher order function called map.

```js
var title = function() {
    return ....
};
library.map(title) // This function return another list with only title.
```

##  Some

Some is also a Higher order function that take two parameter, the first one is an array, and the second a function.

```js
library.some(isOld);
```

##  Every

Every is so similar to some with the difference that, return true if all of the elements in the list satisfy the condition.

```js
library.some(isOld);
```

## Closures

Closures are also know as Anonymous functions, there are moments in which we use one function in our map or filter functions, in order to not create function that wont be reusable, you can send a closure.

```js
var maxDays = 90;
library.filter(function(book) {
    return book.daysAvailable < maxDays;
});
```

## Asynchronism

### Callback

Is going to be called when the functions ends.

```js
asyncFunction(paramOne, paramTwo, function(response) {
    console.log(response);
});
```


If we send a function as a parameter in another function not always means that we are sending a callback, for example the forEach method receive a simple blocking function instead of a callback, but the setTimeOut Receive a callback functions because its asynchronous.

### Errors with Callback

1. Errback (It is very common in Node)

This approach basically consist in send two parameters in the callback, the first one is the error and the second one is the real information.

```js
asyncFunction(paramOne, function(err, response) {
	if (err) {
		... Error happens
		return console.log(err);
	}
	... Good way.
	console.log(response);
});
```

2. More than one callback (Use it by Jquery)

```js
 $.ajax('/api/user', {
    method: 'GET',
    success: function (data) {
        console.log('I have data', data);
    },
    error: function (jqXHR, textStatus, err) {
        console.log('buu :(', err);
    }
});
```

### Callback Hell

Callback hell is one the worst practices when we are using callbacks, basically is when we have a lot of nested callbacks in one function, this makes the code so complicated to maintain.

```js
function executeMultiplesCallbacks(cbGeneral) {
  async1(function () {
    // Finish first function
    async2(function () {
      // Finish second function
      async3(function () {
        // Finish third function
        async4(cbGeneral);
      });
    });
  });
}

executeMultiplesCallbacks(function () {
  console.log('All the functions finished');
})
```

### Async Library

Async is a library the really make us easy to use callbacks.

#### Async Series

Run the functions in the tasks collection in series, each one running once the previous function has completed. If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error.

```js
function first (cb) {
  // ...
  if (error) {
    return cb(error);
  }
  cb(null, resultado);
}

function second (cb) {
  // ...
}

var functionList = [first, second];

async.series(functionList, function() {
	console.log("All the functions were executed.")
});
```

#### Async Waterfall

When one callback result is send to the next callback, we need to use async waterfall. (Waterfall because there is a dependency for the higher responses)

```js
function hi(cb) {
	setTimeout(function(){
    	 cb(null, "Hi");
    }, 100);
}

function how(string, cb) {
	setTimeout(function(){
    	 cb(null, string + "how");
    }, 100);
}

function are(string, cb) {
	setTimeout(function(){
    	 cb(null, string+" are");
    }, 100);
}

function you(string, cb) {
	setTimeout(function(){
    	 cb(null, string+" you");
    }, 100);
}

async.waterfall([hi , how , are, you], function(err, resp) {
	if (err) { 
      return console.log('Buu', err);
    }
    else { 
      return console.log('Wii', resp);
    }
})
```

#### Async Parallel

If we want to execute some callback in parallel, we can use the asyc.parallel
 - We can use async parallel sending a list of callbacks, or an object with several callbacks


```js
function task1 (cb) {
  setTimeout(function() {
    cb(null, 'Result task1');
  }, 2000);
}

function task2 (cb) {
  // ...
}

// List of callbacks
var tasks = [task1, task2];

async.parallel(tasks, function (err, response) {
  console.log('All the task were executed');
  console.log('Tarea 1:', response[0]);
  console.log('Tarea 2:', response[1]);
});

// Object of callbacks
var taskObject = {
  task1: task1,  
  task2: task2  
};

async.parallel(taskObject, function (err, response) {
  console.log('All the task were executed');
  console.log('Task 1:', response.task1);
  console.log('Task 2:', response.tasl2);
});
```

#### Async each

The for each function help us to process a list of objects in parallel, this function receive three parameters.

1. List of Objects: The list of object to iterate
2. An iterator function
3. A callback

```js
var async = require('async');
var fs = require('fs');

var files = [
    {name: 'prueba1.txt', content: 'Esta es una prueba 1'},
    {name: 'prueba2.txt', content: 'Esta es una prueba 2'},
    {name: 'prueba3.txt', content: 'Esta es una prueba 3'}
];

function writeFile (file , cb) {
	fs.writeFile(file.name, file.content, cb);
}


async.each(files, writeFile, function (err) {
	if (err) {
        console.log('Buu :(', err);
        return;
    }
	console.log('wiii!');
});
```

#### Async Filter-Reject

```js
var array = [1,2,3];
async.filter(array, predicate, cb);
async.reject(array, predicate, cb);

function cb(result) {
	console.log('The filter elements are', result)
}

function predicate (element , cb) {
	if (something) {
    	cb(true);
    } else {
    	cb(false);
    }
}
```

#### Async Map

```js
var array = [1, 2, 3];
async.map(array, toMap, end);


function toMap(item, cb) {
	cb(null, item + 1);
};

function end(err, resp) {
	if (err) {
      return console.log('buu :(', err);
    }
    console.log('wii', resp);
}
```

#### Async reduce

The reduce funtion is divided in the next parameters:

1. The array with all the information
2. The initial value
3. The reduction function 
4. Final callback

```js
var array = [1, 2, 3];

async.reduce(array, 0 , reduction , end);

function reduction(acc, item, cb) {
	setTimeOut(dunction() {
		cb(acc+item);
	}, 500);
}


function end(err, reduced) {
	if (err) {
      return console.log('buu :(', err);
    }
    console.log('wii', reduced);
}
```

### Async Compose

```js
function half (n, cb) {
    setTimeout(function () {
        cb(null, n / 2);
    }, 10);
}

function plusOne(n, cb) {
    setTimeout(function () {
        cb(null, n + 1);
    }, 10);
}

var halfAndPlusOne = asyc.compose(plusOne, half)
// var halfAndPlusOne = asyc.seq(plusOne, half) // -> Pretty much the same
```

#### Async Retry

Sometimes we need to retry some operations, maybe because the resource is not available yet or other scenarios.

```js
var options = { times:3, interval:200};
async.retry(options, task, cb);
```

## Promises

A promises is an object that is used in async request and represent a value that could be available "now", in the "future" or "never". Also a promises could have the next status.

1. Pending: Initial Status, is not fullfil or rejected.

2. Fullfill: The operation was sucessfull.

3. Rejected: The operation fails

### Promises-Flow

* In the next image you will find the posible scenarios when we are dealing with a promises.

![](https://github.com/andresmontoyab/JavaScript/blob/master/resources/promisesFlow.PNG) 

```js
var promise = ...
promise.then(
	function(value) { // sucess callback
		
	}, 
	function(err) { // err callback
		
	}
);
```

### Promises Vs Callback

What is the difference between the callback and the promises.?

- The main difference is that our promises can be send around the entire application.
- We can chained promises.

### Creating Promises

```js
var promise = new Promise(functon(resolve, reject) {
	setTimeout(function () {
		if (everythinIsGood)
			resolve('The promise');
		} else {
			reject('The promises was rejected');
		}
	}, 5000)
});

console.log("The Promise Begins");
promise.then((message) => {
        console.log(message);
});
```

### Promises Chained

```js
var newPromises =  ....
var otherPromises = newPromesa.then(action);
```

### Promises Chained with Error

```js
var newPromises =  ....
var otherPromises = newPromesa.then(action) // ... this action throws and exception
var morePromise = otherPromises.then(otherAction)
```

### Promises in parallel

When we want to execute promises in parallel there multiples options.

#### Promise.all

Is going to execute all the promises in parallel and wait for all the responses.

```js
var allPromises = [promiseOne, 2, promisesTwo, "Hi There", promisesThree]
Promise.all(allPromises)
	.then(function (value) {
		// value === [value1, 2, value2, ....]
	})
```

#### Promise.race

Is going to execute all the promises and the final value is going to be the first promises that is resolve or reject it

```js
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "One");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "Two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "dos"
  // Both resolve , but p2 is faster
});
```


# Library of Objects

The library of Objects, are object that were already defined by JavaScript or some framework and we can use it to perform several tasks.

## Array Methods

1. unshift
2. join
3. pop
4. shift
5. splice
6. slice
7. toString

## String Methods

1. replace
2. trim
3. slice
4. toString

## Number Methods

1. toString

## Function Methods

1. call

## ES6

### Arrow Functions

Always are anonymous also cant be used like constructor.

```js
const mi_function = () => {
        boddy
};
```

### Destructuring

Is a strategy that let us to asign value to variables from complex objects or arrays with some elements, using the technique "Object pattern".

```js
const obj = { name: 'Andres', nick: 'Andrew'};
const {name: myName, nick: myNick} = obj;
// myName -> Andres.
// myNick -> Andrew.
```

When the both structure are the same you or have the same propertiesyou can abreviate in the next way

```js
const obj = { name: 'Andres', nick: 'Andrew'};
const {name, nick} = obj;
// name -> Andres
// Nick -> Andrew
```

When use it destructuring is not require to use all the variables.

```js
	const source = {x: 7, y: 3 };
	const {x} = source;
	// x -> 7
	// y ->  Uncaught ReferenceError 
```

The destructing can have default values in the props.

```js
const {x, y = 1} = {};
// x -> undefined
// y -> 1
```

### Destructuring Arrays

```js
const myArray = ['a', 'b']
const [x,y] = myArray;
// x -> a
// y -> b
```

Also you can use it with keywords let and var.

In Destructing with array you can use "elision" is a way to omit one o more elements  between some array positions. For example if we dont want to use some elements.

```js
const [,, x, y] = ['a','b','c','d'];
//	x -> c
//  y -> d
```

You can use the "rest operator" with the destructuring in order to extract the elements that remains.

```js
const [x, ...y] = ['a', 'b', 'c'];
// x -> a
// y -> [b,c]
```

### StringTemplate

* ES6 Template Strings (available in Chrome 41+), fundamentally change that. They introduce a way to define strings with domain-specific languages (DSLs), bringing better:
   * String interpolation
   * Embedded expressions
   * Multiline strings without hacks
   * String formatting
   * String tagging for safe HTML escaping, localization and more.

```js
var name = "Brendan";
console.log(`Yo, ${name}!`);
```

## Libraries

As you can see Javascript is a huge pragramming languague, and a lot of problem were already solved for some other libraries, in this section we are going to show some libreries that can help us in very commom problems

### Moment.JS

Parse, validate, manipulate and display date and times in Javascript.

In order to install moment.js in our project we can use the next command.

```sh
npm install moment
```

If you want to get involve with this library we can see all the documentation in the next page.

https://momentjs.com/docs/

### Lodash

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, string etc.

1. Iterating arrays, objects & string
2. Manipulating & testing values
3. Creating composite functions

```sh
npm install moment
```

### Json Server

Is very usual to call API in an application, nevertheless there are many times that we dont have acess to the API, so one way to solve this(only for test)
is use json server, that is going to be pseudo-server that is going to a start up a server that we can call using HTTP calls.

```sh
npm install -g json-server
json-server --watch db.json --port 3002
```

# Testing

## Jasmine

Jasmine is a framework testing that give us a lot of tools to test our code.

When we create and execute tests there are two posible answer

1. Green: The behaviour of the code that we developed is working as expected.

1. Red: The behaviour of the code that we developed is not working as expected.

## Install

First you should go to the next page and download the stanalone version.

        https://github.com/jasmine/jasmine/releases/tag/v2.0.0  

After that in the project that you want to use the Jasmine framework you must pate the next files:

1. SpecRunner : File that help us to run the tests.

2. lib folder: Jasmine folder in which is all the code required to run the test.

Also we need to create two folder in our porject directory.

1. src: Folder in which will be all the application code.

2. spec: folder in which will be all the test for our code.

## Examples

The first step is created our code in the src folder.

Let's create a simple function called next, in which always return the next value, this function is stored in the next.js file.

```js
function next(x) {
    return x +1;
};
```

After that we must tell to jasmine where is our source code, to do that we have to update the SpecRunner and add the next tag.

```js
<script type="text/javascript" src="src/next.js"></script>
```        

Now is time to create our first test.

```js
describe('next', function(){
    it('next(2) ist 3', function() {
        expect(next(2)).toEqual(3);
    });
});
```

Also add the next tag.

```js
<script type="text/javascript" src="spec/next-spec.js"></script>
```

# Task-Runner      

In the development cycle there are some task that are repetitive task like compiling, testing, building and deployment, in order to have an standard way for our projects we use task runner like Gulp.js, Grunt.js or WebPack

## Workflow

Before we dive in the gulp.js first check what is a workflow or development cycle.

![](https://github.com/andresmontoyab/JavaScript/blob/master/resources/development-cycle.JPG)

As we can see in the previous image, there are a lot step to finish adequately the development of one feature, among these step we are going to highlight the most common:

1. Development : Is the phase in which the developer write all the features.

2. Build: With the new features the developer have to build the entire application in order to verify that the compilation is ok.

3. Test : Is the phase in which all the Unit Test run and verify that the application is working as expected.

4. Integration: Is integrate the application with several features that can help to optimize or improve the code.

5. Deployment : When all the previous phases are ok, the deployment is one of the last steps in which the sources of the application that were already checked and are working are deployed in one server in order to have the application running and ready for the client.

## Install

Let's go dive into the Gulp.js, first to install gulp.js we must run the next command

```sh
npm install -g gulp-cli
```

After that we must to add the dependency to our project.

```sh
npm install gulp --save-dev
```

## GulpFile

There is a particular file in which you should configure all your repetitive task, and that file is called gulpfile.js, so let begin creating the gulpfile.js

Within of the gulpfile.js we should create the next variable.

```js
var gulp = require('gulp');
```

### Create Tasks

To create tasks in gulpjs we only have to follow the next structure:

```js
gulp.task('hola', function() {
    console.log('Hola ');
});

gulp.task('mundo', function() {
    console.log('mundo');
});

gulp.task('default', ['hola', 'mundo']);
```

The last task called "default" is very important because this task is going to be executed if you run gulp in your cli, if you want to execute another want you can call it like gulp hello or gulp world.

Another important thing to highlight in the above code is that if you can see the first and second task have a function, but the the default dont, that is because the third one is a little different, the third one depends on hola, mundo, that means only after hola and mundo finished the default task is going to be executed.

There are powerfull feature in gulp.js as src, dest and pipe

```js
gulp.task('sass', function(){
    return gulp.src('src/style.sass')
        .pipe(gulp.dest('.tmp'));
});
```

1. gulp.src -> Read information from a source
2. pipe -> process information
3. gulp.dest -> Write information in the destination

### Create Async Tasks

```js
gulp.task('hola', function(cb){
    settimeout(function() {
        console.log("Hola");
        cb();
    }, 2000)
});
```

Async task are not very usefull, if we want to tied to task, is better use the feature of depends on

```js
    gulp.task('mundo', ['hola'] ,function() {
    console.log('Mundo');
});
```


In the above code, mundo only is going to run when hola finish.

### Gulp-Watch

Gulp watch is an amazing feature of gulp, this feature is always cheking the changes in a specific file, and when something happens gulp is going to execute certain task.

```js
gulp.task('watch', function() {
    gulp.watch('src/style.sass', ['sass']);
});
```

### Browser-sync

Browser sync is a feature in which we can deploy our changes in a static server in order to see the changes.

```js
var browserSync = require('browser-sync');
gulp.task('serve', ['sass'] ,function() {
    browserSync({
        server: {
            baseDir: ['.tmp', 'src']
        }
    });
});
```

 ### Upload Archives

 One of the final task is upload the files to a server in where we are going to run our application.

 Let's set up an example using ftp.

```sh
npm install vinyl-ftp --save-dev
```

```js
gulp.task('build', ['sass']);
function ftpConnection() {
    return ftp.create({
        host: 'acamica.com',
        user:'me',
        password: process.env.FTP_PWD,
        parallel: 5
    })
};


gulp.task('upload', ['build'], function() {
    var ftp = ftpConnection();
    var remoteFolder = 'everywhere';
    return gulp.src('dist/**', {base: 'dist', buffer: false})
            .pipe(ftp.newer(remoteFolder))
            .pipe(ftp.dest(remoteFolder));
});
```

The code above is an example of a task that will upload files after the build task.        
