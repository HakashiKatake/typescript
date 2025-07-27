type User = {
    name: string;
    email: string;
    isActive: boolean;
}

type Mystring = string

function createUser(user: User): User {
    return user;
}

createUser({name: "Saurabh", email: "saurabh@example.com", isActive: true})

