// STEP 1 - Convert the following highlighted identifiers to Camel Case notation:

// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let yLibraryFunction

// STEP 2 - Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

// numeric literal expression - 3.14
// string literal expression - 'Oleksandr'
// Boolean literal expression - true
// null literal expression - null

// STEP 3 - Give me two examples of complex / variable expressions.

// let firstExpression = 2 * 5 - 3
// let secondExpression = (3 + 5) / (2 * 2)

// STEP 4 - Declare (but do not assign) 9 variables for the following identifiers: 
//          First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
//          Use Camel Casing and Hungarian Notation when naming your identifiers.

// let firstName
// let lastName
// let strAddress
// let strCity
// let strState
// let strZipCode
// let yourAge
// let referralSource
// let bMayWeContactYou

// STEP 5 - Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

// let firstName
// let lastName
// let strCity
// firstName = 'Oleksandr'
// lastName = 'Zheliabin'
// strCity = 'San Diego'

// let firstName = 'Oleksandr'
// let lastName = 'Zheliabin'
// let strCity = 'San Diego'

// let firstName = 'Oleksandr', lastName = 'Zheliabin', strCity = 'San Diego'

// STEP 6 - Create a variable. Add a number and a string and display the coerced result in the browser’s console window.

// let yourAge = 40
// alert('I am ' + yourAge + ' years old.')

// STEP 7 - Create two variables.
//          For the first variable, add a Boolean and a string and display the coerced result.
//          For the second variable, add a number and a Boolean and display the coerced result.

// let firstVariable = false + ' First result'
// alert(firstVariable)

// let secondVariable = 5 + true
// alert(secondVariable)

// STEP 8 - Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'

// we need to use the backslash to denote that the quote in the string is meant to be taken as a literal character

// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

// STEP 9 - Create a variable that produces a null value in the console window. 
//          Then, create a variable that produces an undefined value in the console window.

// let firstVariable = null
// alert(firstVariable)

// let secondVariable
// alert(secondVariable)

// STEP 10 - Use the unary typeof operator on various literals to return the following types within the console window: 
//           string, number, Boolean, object, and undefined.

// alert(typeof 'Oleksandr')
// alert(typeof 40)
// alert(typeof true)

// let variable = new Object()
// alert(typeof variable)

// let x
// alert(typeof x)

// STEP 11 - Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

//           Hello Zak Ruvalcaba, welcome to the JavaScript class!

//           Substitute my name for your name. Although not necessary in practice, 
//           I want you to use 2 concatenation operators to construct this string of text. 
//           One after the text “Hello” and a second one after your name and before the comma.

// alert('Hello ' + 'Oleksandr Zheliabin' + ', welcome to the JavaScript class!')


// STEP 12 - Declare a variable called name and set it equal to your name.
//           Substitute your name in the previous alert string with the variable instead.

// let myName = 'Oleksandr Zheliabin'
// alert('Hello ' + myName + ', welcome to the JavaScript class!')

// STEP 13 - Declare a variable called course and set it equal to “JavaScript”.
//           Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// let myName = 'Oleksandr Zheliabin'
// let strCourse = 'JavaScript'
// alert('Hello ' + myName + ', welcome to the ' + strCourse + ' class!')

// STEP 14 - Rework the above string so that a line break is added right before the word “Welcome”. 

// let myName = 'Oleksandr Zheliabin'
// let strCourse = 'JavaScript'
// alert('Hello ' + myName + '.\nWelcome to the ' + strCourse + ' class!')

// STEP 15 - Replace the hardcoded string of your name with a prompt that asks the user for their name. 
//           The prompt’s response will now be captured in the name variable.

// let myName = prompt('Please, enter your name.')
// alert('Hello ' + myName + ', welcome to the JavaScript class!')

// STEP 16 - Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. 
//           The prompt’s response will now be captured in the course variable.

// let strCourse = prompt('Please, enter the name of the class you are taking.')
// alert('Hello Oleksandr Zheliabin, welcome to the ' + strCourse + ' class!')

// STEP 17 - Declare a variable called x and assign it a value of 10.
//           Declare a variable called y and assign it a value of 20.
//           Display the sum of those two numbers in the console window.

// let x = 10
// let y = 20
// alert (x + y)

// STEP 18 - Declare a variable called x and assign it a value of 20.
//           Add and assign 20 to that variable and display the result in the console window.
//           The result should be 40.

// let x = 20
// x += 20
// alert(x)

// STEP 19 - Declare a variable called x and assign it a value of 20.
//           Multiply and assign 5 to that variable and display the result in the console window.
//           The result should be 100.

// let x = 20
// x *= 5
// alert(x)

// STEP 20 - Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//           Divide and assign 1 to that variable and display the result in the console window.
//           The result should be 2. If you got 6.66 try again.

// let x = 20 % 3
// x /= 1
// alert(x)

// STEP 21 - Using a set of Comparison and Logical operators, 
//           write an application that evaluates to true and displays the result within the console window.

// let x = 20
// let y = 15
// alert(x >= 19 || y < 16)

// STEP 22 - Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result 
//           within the console window. The application cannot use the same operators used in the previous application.

// let x = 5
// let y = 2
// alert(x == 3 && y != 2)