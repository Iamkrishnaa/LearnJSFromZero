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