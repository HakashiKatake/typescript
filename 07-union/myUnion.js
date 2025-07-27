"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var saurabh = { name: "Saurabh", id: 123 };
saurabh = { username: "SaurabhAdmin", id: 456 };
function getDbId(id) {
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getUser(id) {
    if (typeof id === "string") {
        id = id.toLowerCase();
    }
    console.log("User id is: ".concat(id));
}
//array 
var data = [1, 2, 3, 4,]; //"5"]
var data2 = ["1", "2", "3", "4", "5"];
var data3 = [1, 2, 3, "4", "5", true];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
