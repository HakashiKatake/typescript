type User = {
    readonly id?: string; // readonly property
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // optional property
}

type cardNumber = {
    cardNumber : string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

type Mystring = string

function createUser(user: User): User {
    return user;
}

createUser({name: "Saurabh", email: "saurabh@example.com", isActive: true})

let myUser: User = {
    id: "123",
    name: "Saurabh",
    email: "saurabh@example.com",
    isActive: true,
}

//myUser.id = "456"; // This will give an error because id is readonly

export {}