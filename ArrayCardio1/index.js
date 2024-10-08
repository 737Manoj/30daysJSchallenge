// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
   
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
   
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
   
];

const people = ['Beck', 'Glenn', 'Becker', 'Carl', 'Beckett', 'Samuel', 'Beddoes', 'Mick'
    , 'Beecher', 'Henry', 'Beethoven', 'Ludwig', 'Begin', 'Menachem', 'Belloc', 'Hilaire'
    , 'Bellow', 'Saul', 'Benchley', 'Robert', 'Benenson', 'Peter', 'Ben-Gurion', 'David'
    , 'Benjamin', 'Walter', 'Benn', 'Tony', 'Bennington', 'Chester', 'Benson', 'Leana'
    , 'Bent', 'Silas', 'Bentsen', 'Lloyd', 'Berger', 'Ric', 'Bergman', 'Ingmar', 'Berio'
    , 'Luciano', 'Berle', 'Milton', 'Berlin', 'Irving', 'Berne', 'Eric', 'Bernhard'
    , 'Sandra', 'Berra', 'Yogi', 'Berry', 'Halle', 'Berry', 'Wendell', 'Bethea'
    , 'Erin', 'Bevan', 'Aneurin', 'Bevel', 'Ken', 'Biden', 'Joseph', 'Bierce', 'Ambrose'
    , 'Biko', 'Steve', 'Billings', 'Josh', 'Biondo', 'Frank', 'Birrell', 'Augustine'
    , 'Black Elk', 'Blair', 'Robert', 'Blair', 'Tony', 'Blake', 'William'];


//  Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600));
console.table(fifteen);
 
// Inventors first and last name.
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Sort inventors by birthdate, oldest to youngest.
const oldToYoung = inventors.sort((a,b) => a.year >b.year ? 1 : -1);
console.table(oldToYoung);

// How many years did all the inventors live
const totalYears = inventors.reduce((total, inventor) => {
    return total +(inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// Create a list of Boulevards in Paris that contains 'de' anywhere in the name
// **link is in the html page**.
// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// Sort people alphabetically by the last name
const alpha = people.sort((lastName, firstName) => {
    console.log(lastName);
})

