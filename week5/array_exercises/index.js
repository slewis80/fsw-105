// .filter - 1
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5)
        return num;
    }) 
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
// .filter - 2
function evensOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 === 0)
        return num;
    })
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));
// .filter - 3
function fiveCharactersOrFewerOnly(arr){
    const result = arr.filter(function(str){
        if(str.length <= 5)
        return str;
    })
    return result;
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
// .filter - 4
function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter(function(person){
        if(person.member == true)
        return person
    })
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true},
    { name: "Eric Jones", member: false},
    { name: "Paris Hilton", member: true},
    { name: "Kayne West", member: false},
    { name: "Bob Ziroll", member: true}
]));
// .filter - 5
function ofAge(arr){
    const result = arr.filter(function(person){
        if(person.age >= 18)
        return person
    })
    return result
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));
// .map - 1
function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2;
    })
    return result;
}
console.log(doubleNumbers([2, 5, 100]));
// .map - 2
function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString()
    })
    return result;
}
console.log(stringItUp([2, 5, 100]));
// .map - 3
function capitalizeNames(arr){
    const result = arr.map(function(name){
        return name[0].toUpperCase() + name.substr(1).toLowerCase();
    })
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// .map - 4
function namesOnly(arr){
    const result = arr.map(function(person){
        return person.name;
    })
    return result;
}
console.log(namesOnly([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));
// .map - 5
function makeStrings(arr){
    const result = arr.map(function(person){
        if(person.age >= 18){
        return (person.name + " can go to The Matrix.")
        } else {
            return (person.name + " is under age!")
        }
    })
    return result;
}
console.log(makeStrings([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));
// .map - 6
function readyToPutInTheDOM(arr){
    const result = arr.map(function(person){
        return "<h1>" + person.name +"</h1>" + "<h2>" + person.age +"</h2>";
    })
    return result;
}
console.log(readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));
// .reduce - 1
function total(arr){
    const result = arr.reduce(function(final, num){
        return final + num;
    }, 0)
    return result;
}
console.log(total([1, 2, 3]));
// .reduce - 2
function stringConcat(arr){
    const result = arr.reduce(function(final, str){
        final.push(str.toString());
        return final;
    }, [])
    return result;
}
console.log(stringConcat([1, 2, 3]));
// .reduce - 3
function totalVotes(arr){
    const result = arr.reduce(function(final, voter){
        if (voter.voted == true){
        final++
        }
        return final;
    }, 0) 
    return result
};
var voters = [
    { name: "Bob", age: 30, voted: true},
    { name: "Jake", age: 32, voted: true},
    { name: "Kate", age: 25, voted: false},
    { name: "Sam", age: 20, voted: false},
    { name: "Phil", age: 21, voted: true},
    { name: "Ed", age: 55, voted: true},
    { name: "Tami", age: 54, voted: true},
    { name: "Mary", age: 31, voted: false},
    { name: "Becky", age: 43, voted: false},
    { name: "Joey", age: 41, voted: true},
    { name: "Jeff", age: 30, voted: true},
    { name: "Zack", age: 19, voted: false}
];
console.log(totalVotes(voters));
// .reduce - 4
function shoppingSpree(arr){
    const result = arr.reduce(function(finalCost, item){
        finalCost = finalCost + item.price;
        return finalCost;
    }, 0)
    return result;
};
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hackey sack", price: 5 },
    { title: "Gold fidget spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist));
// .reduce - 5
function flatten(arr){
    const result = arr.reduce(function(final, array){
        final = final.concat(array);
        return final;
    }, [])
    return result;
};
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));
// .reduce - 6
function voterResults(arr){
    const results = arr.reduce(function(final, voter){
        if(voter.voted == true && voter.age <= 25){
            final.Voters18to25++
        } else if(voter.voted == true && voter.age >25 && voter.age <= 35){
            final.Voters26to35++
        } else if(voter.voted == true && voter.age > 35){
            final.Voters36to55++
        }
        return final;
    }, { Voters18to25: 0, Voters26to35: 0, Voters36to55: 0 });
    return results;
};
var voters = [
    { name: "Bob", age: 30, voted: true},
    { name: "Jake", age: 32, voted: true},
    { name: "Kate", age: 25, voted: false},
    { name: "Sam", age: 20, voted: false},
    { name: "Phil", age: 21, voted: true},
    { name: "Ed", age: 55, voted: true},
    { name: "Tami", age: 54, voted: true},
    { name: "Mary", age: 31, voted: false},
    { name: "Becky", age: 43, voted: false},
    { name: "Joey", age: 41, voted: true},
    { name: "Jeff", age: 30, voted: true},
    { name: "Zack", age: 19, voted: false}
];
console.log(voterResults(voters));
// .sort - 1
function leastToGreatest(arr){
    arr.sort(function(a, b){
        return a - b
    })
    return arr;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
// .sort - 2
function greatestToLeast(arr){
    arr.sort(function(a, b){
        return b - a
    })
    return arr;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
// .sort - 3
function lengthSort(arr){
    arr.sort(function(a, b){
        return a.length - b.length
    })
    return arr
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
// .sort - 4
function alphabetical(arr){
    arr.sort();
    return arr
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
// .sort - 5
function byAge(arr){
    arr.sort(function(a, b){
        return a.age - b.age
    })
    return arr
}
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
