function logger(){
    console.log(`My name is Harris`);
}
logger() // This calls the function

// receiving and returning data

function fruitProcessor(apples, oranges){
    let juice = `Your juice contains ${apples} apples and ${oranges} oranges`
    return juice;
}
console.log(fruitProcessor(5, 8)) // input here assigns value to function variables

function profile(loggedIn, username) {
    let logInStatus = loggedIn === true ? `you are logged in` : `ou are logged out`;
    let profileInfo = `Your username is ${username} and ${logInStatus}`
    return profileInfo; // return whatever you want the function to spit out
}
console.log(profile(true, "Harris"))

// Arrow Functions

let birthYear = 2000;
let age = (birthYear) => 2021 - birthYear;
console.log(age(birthYear))

let yearsUntilRetirement = (birthYear) => {    
    let age = 2021 - birthYear;
    let retirement = 65 - age;
    return retirement;
}
 console.log(yearsUntilRetirement(2000));  // input here assigns value to variable in parenthesis 

 let iceCreamFlavor = (flavor) => {
    return `You chose ${flavor} ice cream`
 }
console.log(iceCreamFlavor(`chocolate`))

