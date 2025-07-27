"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    console.log("User signed up with name: ".concat(name, ", email: ").concat(email, ", password: ").concat(password, ", isPaid: ").concat(isPaid));
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// addTwo("5"); // this will not work in ts
addTwo(5); // this will work fine
getUpper("saurabh"); // this will work fine
// getUpper(5); // this will not work in ts
// signUpUser(1,2,3)  this will not work in ts
signUpUser("Saurabh", "saurabh@example.com", "password123", true); // this will work fine
loginUser("Saurabh", "saurabh@example.com", true);
