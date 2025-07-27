function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
    console.log(`User signed up with name: ${name}, email: ${email}, password: ${password}, isPaid: ${isPaid}`);


}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// addTwo("5"); // this will not work in ts
addTwo(5); // this will work fine

getUpper("saurabh"); // this will work fine
// getUpper(5); // this will not work in ts

// signUpUser(1,2,3)  this will not work in ts
signUpUser("Saurabh", "saurabh@example.com", "password123", true); // this will work fine

loginUser("Saurabh", "saurabh@example.com", true); 
// loginUser("Saurabh", "saurabh@example.com", 5); // this will not work in ts

export{};

