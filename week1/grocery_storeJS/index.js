var shopper = {
    firstName: "Sabrina",
    lastName: "Lewis",
    age: 39,
    isAlive: true,
    groceryCart: ["milk", "bread", "coffee", "pizza"],
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(shopper.fullname());
