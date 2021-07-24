/*
JS statements: 
    JS statements are used to control the program flow 
    Some examples of js statements are:
    --> //comments
    --> let
    --> var
    --> break
    --> continue
    --> for
    --> for..in
    --> functions
    --> if..else
    --> new
    --> return
    --> while and so on
*/

let full_name = "Krishna Adhikari";
var hobby = "Programming & Coding";
console.log("My name is: ", full_name, "\nand My hobby is: ", hobby);
console.log();

/*
    JS Keywords
    JS statements often start with a keyword
    List of some of the keywords in JS are:

    --> let     :       declares block variable
    --> var     :       declares variable
    --> const   :       declares a block constant
    --> if      :       makes a block of statemtnts to be executed on a condition
    --> switch  :       marks a block of statements to be executed in different cases
*/


//back tick in js is called template literals
let checkName = "Krishna Adhikari";
var hobby = "Programming & Coding";
console.log(`My name is: ${checkName} and 
My hobby is ${hobby}`);


/*
DIFFERENCE IN VAR AND LET

var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.
An example will clarify the difference even better
Example of var:

        Input:
        console.log(x);
        var x=5;
        console.log(x);
        Output:
        undefined
        5
*/


// -----------------------
// -- JAVASCRIPT SYNTAX --
// -----------------------

/*
Js syntax are set of rules to write js code

creating variables in js
        var x;
        let y;

initialize and use the declared variables
        x = 10;
        y = 20;
        let sum = x + y;
        console.log(sum);
*/

// -------------------------
// -- JAVASCRIPT COMMENTS --
// -------------------------

/*
Comments in JavaScript are used to explain and describe the code
They are used to prevent program execution when testing code
Comments in js will not be executed during program execution

In JS there are mainly two types of comments, they are:
    Single line comments
        --> Single line comments starts with //
        --> They are used to write a single line comments
    
    Multi-line comments
        --> Single Line comments stats with /* and ends with '*/    /* 
        --> They are used to write code documetation and multi line comments
*/

// --------------------------
// -- JAVASCRIPT VARIABLES --
// --------------------------

/*
There are three ways to declare javascript variables
        Using,
        var
        let
        const
        eg. let x = 10; here x is variable

JS IDENTIFIERS
Js variables should identified with unique names
    Rules for writing variable names
    --> Names can contian letters, digits, underscores, and dollar signs
    --> Names should begin with letter, $ and _
    --> Names are casesensitive
    --> They can't use reserved words of js

JS one statement many variables
    var firstName = "Krishna", lastName="Adhikari", age = 21;

Value = undefined
    var name;  this is undefined as variable name is not initialized
    --> undefined

    var name = "Krishna Adhikari"; here variable name is re-declared
*/

// --------------------------
// --    JAVASCRIPT LET    --
// --------------------------

/*
JS LET keyword was introduced on es6, 2015
    Properties of let
    --> variables declared with let canntot be redeclared
        let x = "check";
        let x = "redeclared";
        This will give syntax error as x has already declared

        var x = "check";
        var x = "redeclared";
        we can redeclare variables declared with var

    
    --> variables declared with let have block scope
        before 2015 js has only functional and global scope
        block scope is that variables declared inside block can't be accessed from outside
        
        eg. {
            let name = "Krishna Adhikari";
            console.log(name);
        }
        name variable can't be accessed from it

        {
            var x = 2;
        }
        x CAN be used here

        ==> variables declared with var can be used outside block


    --> variables declared with let must be declared before use
        {
            let a;
            a = 10;
            console.log(a);
        }
*/

// --------------------------
// --    JAVASCRIPT Const  --
// --------------------------

/*

*/