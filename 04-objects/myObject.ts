const User = {
    name: "Saurabh",
    email: "saurabh@example.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "Saurabh", isPaid: true})

function createCourse(): {name: string, price: number} {
    return {name: "ReactJS", price: 399}
}

createCourse()

export{}