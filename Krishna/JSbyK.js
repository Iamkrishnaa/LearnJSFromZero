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

// let full_name = "Krishna Adhikari";
// var hobby = "Programming & Coding";
// console.log("My name is: ", full_name, "\nand My hobby is: ", hobby);
// console.log();

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

// let checkName = "Krishna Adhikari";
// var hobby = "Programming & Coding";
// console.log(`My name is: ${checkName} and 
// My hobby is ${hobby}`);


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
// --    JAVASCRIPT CONST  --
// --------------------------

/*
In JS const are called constants which are simply fixed values
        --> Variales declared with const cant't be redeclared
            const pi = 3.14;
            const pi = 3.41; ==>This will throw an error as we are redeclaring 

        --> variables with const cant be reassigned
            const a = 12;
            a = 14; ==> This will throw an error as we are re assigning the value of a

        --> variables with const are block scoped
            {
                const myName = "Krishna";
            }

            the variable myName can't be accessed here as const is block scoped

        --> const variables must be assigned
            const a;
            a = 12; ==> This will throw an error as a is assigned later
        
        --> Always declare const in
            >> A new Array
            >> A new Object
            >> A new Function
            >> A new RegExp

        --> NOTE:::
            ==> The keyword const doesnt define a constant value but it defines constant reference to value So that, 
                >> We can't reassign a constant value, array, object
            But we can,
                >> We can change constant array and object

                For eg.
                const players = ["Krishna", "Gaurav", "Sandesh"];
                    >> we can change the element
                        players[1] = "Roshan";
                    >> we can add element
                        players.push("Ujjwal");

                    >> But we cannot reassign the array
                        const players = [""Ronit", "Shankar"];
                        ==> This will throw an array as it was already assigned
*/

// ------------------------------
// --    JAVASCRIPT OPERATORS  --
// ------------------------------

/*
In JS operators are used to assign or compare values and perform different operations

There are various types of operators in js
    --> Arithmetic Operators
        Arithmetic Operators are used to perform arithmetic operations
        ==> +, -, *, ?, %, ++, --
            + -->> This is addition and used to add two numbers
            - -->> This is subtraction and used to subtract two numbers
            * -->> This is multiplication and used to multiply two numbers
            / -->> This is division used to perfrom division
            % -->> This is used to find the remainder of integer values
            ++ -->> This is used to increase the value by 1
            -- -->> This is used to decrease value by 1
            ** -->> This is exponentiation which is used to find power of certain num like 2**2 means 2 raise to power 2

    --> Comparision Operators
        These operators are used to compare two values/variables
            == -->> This compares the equility of two operands
            === -->> This operator compares the equility of two operands wih type
            != -->> This compares inequility of two operands
            > -->> This checks whether left value is greater than right value
            < -->> This checks if left value is smaller than right value
            >= --> This checks whether the left value is greter than or equal to right value
            <= --> This checks whether the right value is greter than or equal to left value

    --> Logical Operators
        Logical Operators are sumbols that are used to connect two or more expressions.
            && -->> It checks wheather two operands are non zero. i.e compares between two operands and returns true if both are true
                eg. 4==5 && 4==4 >> it returns 0 as both are false
            || -->> It checks if any one of the two operands is non-zero. i.e compares between two operands and return true if any one is true
            ! -->> It reverses the boolean result of the operands. i.e. If the operand is true it returns false and false if the operand is true.

    --> Assignment Operators
        These operators are used to assign values to ceratain variables
            = -->> This is used to assign the value to variable
            += -->> sums left and right and assign value to left
            -= -->> subtract left and right and assign value to left
            *= -->> multiply left and right and assign value to left
            /= -->> divide left and right and assign value to left
            %= -->> return remainder by dividing left and right and assign value to left

    --> Ternary Operators
            :? -->> This is short form of if..else.. statement.
                Y = (A>B) ? A : B;
                This checks if A is greater than B, if true it assigns value of Y as A else assigns value of Y as B

    --> type Operators 
        typeof -->> This operator returns the type of the variables
        instanceof --> This returns true if object is instance of object type

    --> Bitwise Operator
        & --> AND, 
        | --> OR, 
        ~ --> NOT, 
        ^ --> XOR, 
        << --> Zero fill left shift, 
        >> --> signed right shift, 
        >>> --> zero fill right shift, 

MOREOVER JS contains some string operators like "name "+"age" = name age concatinate two strings
*/

// -------------------------------
// --    JAVASCRIPT DATA TYPES  --
// -------------------------------

/*
Data types are the types of the value in programming
>> There are mainly two types of data types
    --> Primitive Data types
        Data types that are already defined in js are primitive data types in js
        --> String, Represents sequence of characters e.g "krishna"
        --> Number, Represents numeric values e.g 4, 10.8, -12, -10.11 etc
        --> Boolean, Represents boolean value either false or true
        --> Undefined, represents undefined value
        --> Null, represents null, i.e. no value at all

    --> Non-primitive Data types also known as reference data types
        They are data types that are defined by users and apart from primitive data types
        --> Object
        --> Array 
        --> RegExp

    NOTE: Adding number and string, JS will treat number as string
        e.g. let x = 10;
            let name = "Krishna";
            let add = x + name; -->> 10Krishna

            furthermore, js evaluates expression from left to right. So,
            let x = 10 + 4 + "Krishna"; --> 14Krishna
            let y = "Krishna" + 10 + 4; --> Krishna104

    NOTE: In Js types are dynamic which means the same variable can be used to hold different data types and we can change the type later 
            {
                let x; here x is undefined
                x = 5; here x is Number
                x = "Krishna"; here x is string
            }
*/


// -------------------------------
// --    JAVASCRIPT FUNCTIONS   --
// -------------------------------

/*
Functions are the block of codes that are used to perfrom the specific tasks.
>> In other programming languages functions are also called methods.
>> A function in javascript should be invoked or called by something.
        >> SYNTAX TO WRITE JS FUNCTIONS
        
        function functionName(Parameters seperated by commas){
            code to execute 
        }
    
    Function Return
    return is a keyword used to return something from the functions
    when js code reaches the return statement the code will stop executing
        >> eg. function add(a, b){
            return a+b;
        }

        The function above returns sum of two numbers
    
        USE OF FUNCTIONS is mainly Code reusability


        LOCAL VARIABLES
            >> Variables defined inside functions are local variables
            >> They can't be accessed from outside the functions
            eg. 
            function printName(){
                let name = "Krishna Adhikari";

                we can use name here
            }
                we can't use name here
*/

// -------------------------------
// --    JAVASCRIPT OBJECTS     --
// -------------------------------

/*
    In JS objects are non-primitive data types
    They are like other variables but they can store multiple values/properties/methods

    In js objects can be created in two ways
    Value is stored in property : property value format
        >> Object literal
            This is simple way to create objects eg.
            var car1 ={
                "model": "Ferrari VO1",
                "price": 12221221,
                "milege": 23,
                getModel: function(){
                    return this.model;
                }
            }
            accessing object values,
                car1.getModel();
                car1.price;

        >> Object constructor
            We can create js objects using new keyword too
            var person = new Object();
            person.firstName="Krishna";
            person.age = 21;

            accessing values
            person.firstName; >> Krishna
    

    Objects Methods
    >> hasOwnProperty  -->> checks if key/property exists in object 
        eg. person.hasOwnProperty("firstName"); >> if property exixts it returns true else false

    >> access object keys
            for (var key in person){
                console.log(key);
            }

    Objects can be Nested. >> objects inside object
    >> eg. 
            var obj = {
                "firstName": "Krishna";
                "address": {
                    "country": "Nepal",
                    "City": "Pokhara",
                }
            }

    NOTE:
    JavaScript object is a standalone entity that holds multiple values in terms of properties and methods.
    
    Object property stores a literal value and method represents function.
    
    An object can be created using object literal or object constructor syntax.
    
    Object literal:
    var person = { 
        firstName: "James", 
        lastName: "Bond", 
        age: 25, 
        getFullName: function () { 
            return this.firstName + ' ' + this.lastName 
            } 
    };
    
    Object constructor:
    var person = new Object();
                        
    person.firstName = "James";
    person["lastName"] = "Bond"; 
    person.age = 25;
    person.getFullName = function () {
            return this.firstName + ' ' + this.lastName;
        };
    
    Object properties and methods can be accessed using dot notation or [ ] bracket.
    
    An object is passed by reference from one function to another.
    
    An object can include another object as a property

    More on accessing values,
        >> person["firstName"];
        >> person.firstName;
    !NOTE: Do Not Declare Strings, Numbers, and Booleans as Objects!
*/

// -------------------------------
// --    JAVASCRIPT STRINGS     --
// -------------------------------

/*
    JS strings are used to store and manipulate texts
    eg. let text = "Hello World"; //this is string text
        let tex = new String("Hello World"); //this is string object

    JS STRING METHODS
    Extracting String Parts
        >> slice --> It extracts a part of string and returns the extracted part as new string
            takes 2 parameters (start, end); start is starting position and end is end position but end not included

            let str = "Apple, Banana, Kiwi";
            let slicedStr = str.slice(7,13);
            console.log(slicedStr); This prints Banana. Start position 7th index B and ends with 12th index a

            NOTE: Slice accepts negative integer also
                eg. console.log(slice(-3)); this will print Kiwi

        >> substring --> Substring is similar to slice but the only differene is that it doesn't accept negative integer
            eg. substring(7,12); this is accepted
                substring(-4); this is not accepted

        >> substr --> It is also similar to slice but the second parameter defines the length of extracted part
            eg. let n = "this is ok";
                console.log(substr(3, 6); >> s is
                first parameter is starting index and last is length to extract 


    Replacing String Content
        >> The replace() method in js replaces a specified value with another value in string
            let words = "my name is punya adhikari.";
            let replacedText = words.replace("punya", "Krishna");  this replaces punya with Krishna
            console.log(replacedText); >> my name is Krishna adhikari

        !NOTE: 
        >> the replace() method does not change the string but it returns new string
        
        >> replace method only replaces first match
            for eg. let txt = "these is great. He is good";
                    let replacedText = txt.replace("is", "are");
                    this returns these are great. He is good    >> replaces only first match
        
        >> replace is case sensitive i.e. Alpha & alpha are different
            to replace case insensitive we can use regular expression with an /i flag
            >> rext.replace(/ALPHA/i, "delta"); this replaces alpha with delta.
            !Regular expressions are written without qotes

            to replace all matches we can use /g flag
                let txt = "these is great. He is good";
                let replacedText = txt.replace(/is/g, "are");
                this returns these are great. He are good >> replaces all matches
            
    
    Converting to Upper and Lower Case
        >> toUpperCase();
            This converts the word to uppercase;
            eg. word.toUpperCase(); This returns the value of words in uppercase
        
        >>toLowerCase();
            This converts the word to lowercase
            eg. word.toLowerCase(); This will returns the value of word in lowercase.


    Concat()
        >> this method is used to join two or more texts/strings
        let x = "Hi";
        let greet = "Good Morning.";
        let newText = x.concat(" ", greet);
        >> This will join strings with value of x

        
    !!ALL STRING METHODS RETURNS NEW STRING, THEY DONT MODIFY ORIGINAL STRING
    
    String.trim();
        >> This method removes all the white space from starting and begining of the string
        e.g, let name = "    Krishna Adhikari     ";
                console.log(name.trim()); >> Krishna Adhikari
                This removes spaces from starting and ending of string

    JS String Pdding
        >> This supports padding at begining and end of a string
            This has two methods. padStart and padEnd
            e.g.    let nam = "5";
                    console.log(nam.padEnd(4, 0));
                     >> returns 5000

    
    Extracting String Characters
        >> charAt(position) --> This will return the character at a specified index (position) in a string
            let text = "Hello World";
            text.charAt(1);  >> This returns e
        
        >> charCodeAt(position) --> This will return the character unicode of specified index (position)
            e.g.
                let text = "Hello World";
                console.log(text.charCodeAt(0));  returns 72 as H in unicode is 72


    Property Access
        >> we can access every element in string using specific index
            let name = "Krishna";
            console.log(name[2]); >> i

        NOTE: If we want to work with string as an array, we can convert it to an array

    
    Converting a string to an array
        >> To convert a string to array we can use split
            split takes parameter called seperator which specify the split position
            if seperators are not defined, it return array with wole string as index [0]

                text.split(",")          // Split on commas
                text.split(" ")          // Split on spaces
                text.split("|")          // Split on pipe

        let text = "great";

        let strArr = text.split("");

        console.log(strArr); >> this will return [ 'g', 'r', 'e', 'a', 't' ]



    JS String Search
        we can search specific string in js using various methods like
            >> String.indexOf()
                This returns the index of the first occurrence of a specified text in a string

            >>String.search()
                The search() method searches a string for a specified value and returns the position of the match:

                The two methods, indexOf() and search(), are equal?

                They accept the same arguments (parameters), and return the same value?

                The two methods are NOT equal. These are the differences:

                The search() method cannot take a second start position argument.
                The indexOf() method cannot take powerful search values (regular expressions).
                You will learn more about regular expressions in a later chapter.

            >> String.lastindexOf() 
                The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

            >> String.startsWith() 
            >> String.endsWith() etc..
    

    JS Template Literals
        Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
        With template literals, you can use both single and double quotes inside a string:
        Template literals allows multiline strings:

        Template literals provide an easy way to interpolate variables and expressions into strings.
            >> ${variables/expressions}
            eg.
            let price = 10;
            let VAT = 0.25;

            let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
*/