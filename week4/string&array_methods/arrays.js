var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1
vegetables.pop()
console.log("vegetables: " + vegetables)

// 2
fruit.shift()
console.log("fruits: " + fruit)

// 3
var orangeIndex = fruit.indexOf("orange")
console.log("New index of orange is: " + orangeIndex)

// 4
fruit.push(1)
console.log("fruits: " + fruit)

// 5
console.log("New vegetables length: " + vegetables.length)

// 6
vegetables.push(vegetables.length)
console.log("vegetables: " + vegetables)

// 7
var food = fruit.concat(vegetables)
console.log("food: " + food)

// 8
food.splice(4, 2)
console.log("spliced foods: " + food)

// 9
food.reverse()
console.log("reversed array: " + food)

// 10
var foodString = food.join("-")
console.log("new food array as a string: " + foodString)
