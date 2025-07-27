function addTwo(num: number): number {
    //return num + 2;
    // return "hello"; // this will not work in ts
    return num + 2; // this will work fine
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
    console.log(`User signed up with name: ${name}, email: ${email}, password: ${password}, isPaid: ${isPaid}`);
}

// function getValue(myval: number) : boolean {
//     if (myval > 5) {
//         return true;
//     }
//     return "200 OK"; // this will not work in ts, as it expects a boolean return type
    

// }

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// addTwo("5"); // this will not work in ts
addTwo(5); // this will work fine

getUpper("saurabh"); // this will work fine
// getUpper(5); // this will not work in ts

// signUpUser(1,2,3)  this will not work in ts
signUpUser("Saurabh", "saurabh@example.com", "password123", true); // this will work fine

loginUser("Saurabh", "saurabh@example.com", true); 
// loginUser("Saurabh", "saurabh@example.com", 5); // this will not work in ts



const getHello = (s: string) : string => {
    return ''
}

//const heros = ["thor", "spiderman", "ironman"];
const heros = [1,2,3]

heros.map((hero): string => {
    return `Hero is ${hero}`;
    //return 1  this will not work in ts, as it expects a string return type
});


function consoleError(errmsg: string): void {
    console.log(errmsg);
    
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}




export{};

