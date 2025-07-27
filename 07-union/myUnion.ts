let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string,
    id: number
}


type Admin = {
    username: string,
    id: number
}


let saurabh: User | Admin = {name: "Saurabh", id: 123}
saurabh = {username: "SaurabhAdmin", id: 456}

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);
    

}

getDbId(3)
getDbId("3")

function getUser(id: number | string) {
    if (typeof id === "string") {
        id = id.toLowerCase()
    }
    console.log(`User id is: ${id}`);
    
}


//array 

const data: number[] = [1, 2, 3, 4,] //"5"]
const data2: string[] = ["1", "2", "3", "4", "5"]
const data3: (number | string | boolean)[] = [1, 2, 3, "4", "5", true]

let pi: 3.14 | 3.14159 = 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "middle"
// seatAllotment = "back" // This will give an error because "back"






export {}

