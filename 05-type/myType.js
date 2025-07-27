function createUser(user) {
    return user;
}
createUser({ name: "Saurabh", email: "saurabh@example.com", isActive: true });
var myUser = {
    id: "123",
    name: "Saurabh",
    email: "saurabh@example.com",
    isActive: true,
};
//myUser.id = "456"; // This will give an error because id is readonly
