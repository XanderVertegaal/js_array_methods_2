// Oefening A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
   
const findSpiderMan = function(superheroes) {
    return superheroes.find(heroObject => heroObject.name == 'Spiderman')
}
console.log(findSpiderMan(superheroes)) 
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// Oefening B
const doubleArrayValues = function(array) {
    return array.map(number => number *=2)
}
console.log(doubleArrayValues([1, 2, 3]))
// result should be [2, 4, 6]


// Oefening C
const containsNumberBiggerThan10 = function(array) {
    return array.some(number => number > 10)
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true
console.log(containsNumberBiggerThan10([1,2,1,2,1,2]))
// result should be false


// Oefening D
const isItalyInTheGreat7 = function(array) {
    return array.includes('Italy')
}
console.log('Zit Italië in de G7?', isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']))
// result should be true


// Oefening E
const tenfold = function(tenfoldArray) {
    let newArray = []
    tenfoldArray.forEach(element => newArray.push(element * 10))
    return newArray        
    };
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

// Oefening F
const isBelow100 = function(array) {
    return array.every(element => element < 100)
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false


// Oefening G
const bigSum = function(array) {
    return array.reduce((total, number) => total += number)
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// // result should be 1118
