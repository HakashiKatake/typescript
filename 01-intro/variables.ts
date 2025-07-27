let greetings: string = "Hello Saurabh";

let mynum = 6

greetings.toLowerCase(); // This will work fine
console.log(greetings);

//number 

let userId: number = 33432; // this is good but we can avoid it by using let userId = 33432;

//boolean 
let isLoggedIn: boolean = false;

//any 

let hero: string;
// This will give an error if strict mode is enabled, but it will work in JavaScript
let hero1: any; // This is not recommended, but it will work
function getHero() {
    return "thor";
}

hero = getHero(); // This will work fine, but it's better to use a specific type



export{};