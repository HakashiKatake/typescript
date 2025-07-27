// const user: (string | number)[] = ["Saurabh", "Yadav", 30];


let tUser: [string, number, boolean] = ["Saurabh", 30, true];
tUser = ["John", 25, false]; // This is valid as the type allows both string and number

let rgb: [number, number, number] = [255, 0, 0]; // RGB tuple

let user: [string, number] = ["Saurabh", 30]; // Tuple with string and number

type User = [string, number, boolean];
let userDetails: User = ["Saurabh", 30, true]; // Tuple with string, number, and boolean


//User[1] = "idk"; This will give an error because the second element should be a number
//User.push(true) // This will give an error because tuples have a fixed length and types
export{}