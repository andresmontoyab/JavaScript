# JavaScript

* [Basis JavaScript](#Basis-JavaScript)
    * [Variables](#Variables)
        * [Hola Mundo](#Hola-Mundo)
        * [Console](#Console)
        * [Create Variables](#Create-Variables)
        * [Information Type](#Information-Type)
        * [Comments](#Comments)
    * [Control Flow](#Control-Flow)
        * [If](#If)
        * [Logical Operators](#Logical-Operators)
        * [Comparission](#Comparission)
        * [For](#For)
    * [Data Structures](#Data-Structures)    
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
    * [Functions](#Functions)
    * [Functional Programming](#Functional-Programming)
        * [No Side Effects](#No-Side-Effects)
        * [Inmutability](#Inmutability)
        * [Recursivity](#Recursivity)
        * [Higher order functions](#Higher-order-functions)
    * [Library of Objects](#Library-of-Objects)
        * [Array - Methods](#Array-Methods)
        * [String - Methods](#String-Methods)
        * [Number - Methods](#Number-Methods)
        * [Function - Methods](#Function-Methods)
    * [Testing](#Testing)    
            

# Basis JavaScript

# Variables

## Hola Mundo

        alert("hola mundo");

## Console

        console.log("Hola Mundo");

## Create Variables

        var lastname = "Smith";

## Information Type

1. String -> Is a simple text

        var lastname = "Montoya"

2. Numbers 

        var age = 23;

When I have a number in a variable, I can perform all kind of numeric operations like +, -, * or /.

3. Boolean -> Only have two values, true or false.

        var isTrue = true;

4. Null and Undefined.

When we define a var but without a value the default value is undefined.

        var a;
        console.log(a); // undefined

We can defined a variable with "nothing" that is null.

        var a;
        a = null;
        console.log(a) // null

## Comments

In Javascript we can write comments, to organize or help us to understand the code that we are writting.

One line comment

        // One Line comment

Comment multi line

        /* This line is ignore
        this line too
        this line too */


# Control-Flow

## If

If we have a condition we can use the statemnt if and else, if the condition is true is going to execute the block of code inside de if, if the condition is false, the "if" code is not going to execute, however if there is a else, the block code of the else is going to execute.

        var edad = 8;
        if (edad => 18) {
            alert("Es mayor de edad");
        } else {
            alert("Es menor de edad");
        }

## Logical Operators

1. && -> And
2. || -> Or
3. ! -> Negation

Example And

        var edad = 8;
        var sexo = "m"
        if (edad >= 18 && sexo === "m") {
            alert("El usuario es masculino y es mayor de edad");
        }

Example Or

        var edad = 8;
        var sexo = "m"
        if (edad >= 18 || sexo === "m") {
            alert("El usuario es masculino y es mayor de edad");
        }       

Example Negation

        var edad = 8;
        var sexo = "m";

        if(!(edad >= 18)) {
            alert("El usuario No es mayor de edad");
        }

## Comparission

1. ===, In object the three = is going to compare by identiy, that mean if you referencia point to the same object.

2. ==, The two = is similar to the previous already explain, but wiht one difference, the two = try to convert the variables in a common type, so the next examples are going to be true.

       true == 1
        undefined == null
        “” == 0

The point right here is that the "==" could cause a lot of inconsistency, so for this reason the recomendation is always use the "===".

## For

For is a statement that let us make a loop in base in one condition.

        for(var i = 0(1); i<10(2); i++(3)) {
            (4)
        }

As you can see the for statement have 4 parts.

1. Is the first parameter and only is executed once at the begginning of the execution.

2. Is the main condition of the for, if this condition is true is going to execute the block of code inside the for.

3. Is executed after each execution of the for block code, usually represent the update of the condition.

4. Block of code.

# Data-Structures

## Objects

If you have a box with fruits and we need put the information in JavaScript we can use the next approach.

        var weightBox = 3;
        var fruitsNumber = 10;

Nevertheless we created two variables and the ideal situation is that both variables are tied enought to always respresent the box information, another approach is the next.

        var boxInfo =
        {
            weightBox: 3,
            fruitsNumber: 10
        }

Also I can create a object with the following approach:

        var box = new Object();
        box.weightBox = 3;
        box.fruitsNumber = 10;

or

        var box = {};
        box.weightBox = 3;
        box.fruitsNumber = 10;

## Functions in Objects

        var user = new Object();

        user.name = "Andres";
        user.age = 23;
        user.hello = function(){
            alert("Hola");
        }

or      

        var user = 
        {
            name: "Andres",
            age: 23,
            hello: function() {
                alert("hola" + this.nombre);
            }
        }

As you can see, in the last approach you can access with the keyword this to the values of the object.

## Problems with This

In some times, when you use nested this, could cause problem, because you loss the reference this in the most deep code.

        gru.saludarAntesDeIrADormir  = function() {
            this.minions.forEach(function(minion){
                this.saludarA(minion);
        });
        };

The previous code is going to fail.

There are three solutions for this.

1. Create a var and store the value of "this" and replace the this by the new var.


        gru.saludarAntesDeIrADormir  = function() {
            var ins = this;
            ins.minions.forEach(function(minion){
                ins.saludarA(minion);
        });
        };

2. Using the bind(this) method in the callback

        gru.saludarAntesDeIrADormir  = function() {
            this.minions.forEach(function(minion){
                this.saludarA(minion);
        }.bind(this));
        };

3. Passing the this as forEach parameter.

        gru.saludarAntesDeIrADormir  = function() {
            this.minions.forEach(function(minion){
                this.saludarA(minion);
        },this);
        };

## Polimorphism

The polimorphism is one of most powerful concepts in OOP, the idea with polimorphism is that an object could have different implementation depends of the object but you can call it in the same way all the times.

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
                    // Por cada uno de los minions
                    this.minions.forEach(function(minion){
                        // Gru saluda
                        console.log('Gru dice: Chau ' + minion.name);
                        // El minion responde
                        minion.sayHello();
                    });
                }
        };

## Instance Objects

To instance object we usually create function in which we could create objects.

        var createTelevisores = function(vidaUtil){
        var televisor = {};
        televisor.vidaUtilEnHoras = vidaUtil;
        televisor.encender = function() {
            this.vidaUtilEnHoras = this.vidaUtilEnHoras - 0.01;
        }
        return televisor;
        }

        var aTelevisor = createTelevisores(9000);
        var anotherTelevisor = createTelevisores(8000);

There is another way to instance object in JS by prototypes.

## Prototypes

        var anRectangule = 
        {
            width:10,
            height:20,
        };

        anRectangule.area = function(){
            return this.width * this.height;
        }

        anRectangule.area();

In the previous example we created a object with two properties and one method, but what happend if I want to created another rectangule object with different widh and height but with the same area function, should I wrote the same amount of code?

The answer is no, we can create prototypes.

1. In prototypes we are going to write all the common methods in the objects.

2. After that we create the instance of the object using Object.create(prototype);

3. Finally we set the properties to the object.

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


Methods define in the object are more important that methods define in the prototype.

## Override Methods

Basic Instance

        var rectanguleProtoype = {
            area: function() {
                return this.width * this.height;
            }
        }

        var aRectangule = Object.create(rectanguleProtoype);
        aRectangule.width = 10;
        aRectangule.height = 10;

What happend if I want to change the implementation of the area function but only in the reference "aRectangule".

        aRectangule.area = function() {
            return this.width * this.width;  // Replace height by width
        }

Which of the two methods area is going to use when I call aRectangule.area(), the methods previous define or the prototype method.?

The answer is the method previous define, because when I use aRectangule.area() first JS is going to search is there is any object call area in the Object and if not search in the prototype, that means that first check the object properties and after the prototype properties.

## __proto__

When I use the property __proto__ in a Object, is going to return the base prototype.

        aRectangule.__proto__  /* {
            area: function() {
                return this.width * this.height;
            } /*

With this __proto__ can I validate if two object have the same prototypes.

If we create an object with the syntax {}, the property __proto__ is going to return the base prototype, that mean that all the objects create with {} are going to have the same prototype.

        var square = {};
        var circle = {}

        square.__proto__ === circle.__proto__ // true

There is one exception, if I use the Object.create(null), when i use the __proto__ the return will be an undefined.

## Constructor Function

As we see in the previous topic, when we use Prototypes we should created the object and after that set the variables.

        var squarePrototype: {
            area: function() {
                return this.side * this.side;
            }
        }

        var aSquare = Object.create(squareProtutype);
        aSquare.side = 3;
     
        var anotherSquare = Object.create(squareProtutype);
        anotherSquare.side = 5;

To solve the problem of use Object.create() and after that set variables we can use Constructor function, that is a function in which you pass the initial Object values.


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


## Constructor Hierarchy

When I have an object base and I want to create another object with more properties, is require that in the constructor function of the new object call the constructor function of the base object, let's see it.

        var Person = function(energy) {
            this.energy = energy;
        }

        var Wizard = function(estamina) {  // Wizard is a subclass of person
            this.estamina = estamina;n
        }

With the previous approach we have two constructor function one for Person and one for Wizard, the point here is that Wizard must have the property energy too, but if we create a Wizard object this property is not going to be there, to solve this we need to call the other constructor function.

        var Wizard = function(estamina) {  // Wizard is a subclass of person
            Person.call(this);
            this.estamina = estamina;
        }

Now, the object wizard have also all the Person properties.

## Prototype-Hierarchy

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

In the previous example we created a chain of prototype or Hierarchy of protoypes. As you can notice the key here is created the new prototype in base of the base prototype and add the require methods.

## Array

Array is a data structure in which i can store a lot of information but the same type.

        var listaNum = [1, 2];

In an array you even can store objects:

        var listObjects = [{num:3, type:"A"}, {num:3, type:"A"}];


Also I can create an array using the keyword new Array();

        var newArray = new Array(1,2,3);

### Array-Add

If there is an array that was created before, i could add more information in the next way.

        var listNum = [1,2,3];
        listNum[3]=4;
        console.log(listNum) // 1,2,3,4

In some specific situation we don't know the size of the array, so is complicate to know where insert the new value, for this reason there is a function call push() which insert one value at end of the array.

        var listNum = [1,2,3];
        listNum.push(4);
        console.log(listNum) // 1,2,3,4

### Array-Search

        var listNum = [1,2,3];
        console.log(listNum[1]) // 2

### Array-Delete

To delete the last element of the array we can use the function pop(), also this function return the removed element ;

        var listNum = [1,2,3];
        var removedElement listNum.pop();
        console.log(removedElement) // 3

# Functions

Create a function.

        function nameOfTheFunction() {

        }

        // Calling function
        nameOfTheFunction();

Create function with parameters.

        function nameOfTheFunction(param1, param2) {
            alert(param1, param2);
        }

        nameOfTheFunction("hi", "there");

Create function with return statement.

        function nameOfTheFunction(param1, param2) {
            return param1 + param2;
        }

Local variables in the function.

        function nameOfTheFunction(param1, param2) {
            var age = 23;
            return param1 + param2;
        }

The variables defines within a function only have the scope within the function, not outside.

# Functional Programming

This kind of programming is based on "Functions" and some principles like No Side Effects, Inmutability among others.

## No Side Effects

In imperative lenguage a lot of time we could change the value of objects, and even in some function we could use global variables that are changing, in functional programmin this kinda of code does not exist, because in functional progrmming function only use the parameters, those function can not use mutable global variables because this represent a side effect in the function.

## Inmutability

Inmutability is a structure in which the components related with the structore are not going to change, if we need to change we must to create another object. This helps to preserver the value of the object in the time.

Imperative Approach

        function eat(golondrina, alpiste) {
            return golondrina.energy + (alpiste * 10);
        }

Functional Approach

        function eat(golondrina, alpiste) {
            return {
                name: golondrina.name,
                energy: golondrina.energy + (alpiste * 10)
            };
        }

## Recursivity.

For recursivity in require to have the next elements 

1. A "base case", which is responsable to say how to begin the recursivity.

2. Recursive case, tell me how to continue the recursivity.

Imperative Approach

        function sumatoria(lista) {
            var resultado = 0;          // base case
            lista.forEach(function(x) {
                resultado += x;         // recursive case
            });
            return resultado;
        }

Recursive Approach

        function sumatoria(lista) {
            if(isEmpty(lista)){
                return 0;
            } else {
                return sumatoria(init(lista) + last(lista))
            }
        }


Another Example :

        function factorial() {
            if(n == 0) {
                return 1;
            } else {
                return factorial(n-1) * n
            }
        }

## Higher order functions   

These kinda of function, are special function that receive as parameter other functions.

## Filter

Filter is a Higher order function because this function receive another function as parameter.


        var isShort = function() {
            ...
        };
        lista.filter(isShort);  // This return a new list with those elements that return true in the function

## Map

If i want to map element in an array to another kind of element I can use another Higher order function called map.

        var title = function() {
            return ....
        };
        library.map(title) // This function return another list with only title.

##  Some

Some is also a Higher order function that take two parameter, the first one is an array, and the second a function.

        library.some(isold);

##  Every

Every is so similar to some with the difference that, return true if all of the elements in the list satisfy the condition.

        library.some(isold);

## Closures

Closures are also know as Anonymous functions, there are moments in which we use one function in our map or filter functions, in order to not create function that wont be reusable, you can send a closure.

        var maxDays = 90;
        library.filter(function(book) {
            return book.daysAvailable < maxDays;
        });

        
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

        function next(x) {
            return x +1;
        };

After that we must tell to jasmine where is our source code, to do that we have to update the SpecRunner and add the next tag.


        <script type="text/javascript" src="src/next.js"></script>

Now is time to create our first test.

        describe('next', function(){
            it('next(2) es 3', function() {
                expect(next(2)).toEqual(3);
            });
        });

Also add the next tag.

        <script type="text/javascript" src="src/next-spec.js"></script>