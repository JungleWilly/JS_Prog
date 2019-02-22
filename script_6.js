console.log("~~~~Startup Nation~~~~")
console.log("===================================================");

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");

for(let i = 0; i < entrepreneurs.length; i++)
{
  if (entrepreneurs[i].year < 1980 && entrepreneurs[i].year > 1969)
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last)
}

console.log("===================================================");

console.log("Sors une array qui combien le prénom et le nom des entrepreneurs");

let last = [];

for(let i = 0; i < entrepreneurs.length; i++)
{
last.push({"first" : entrepreneurs[i].first, "last" : entrepreneurs[i].last})
}

console.log(last)

console.log("===================================================");

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

let age2019 = [];

for(let i = 0; i < entrepreneurs.length; i++)
{
  age2019.push({"first" : entrepreneurs[i].first, "last" : entrepreneurs[i].last, "age" : (2019 - entrepreneurs[i].year)})
}

console.log(age2019)

console.log("===================================================");

console.log("Trie les inventeurs par ordre alphabétique du nom de famille");

entrepreneurs.sort(function(a, b){
  if(a.last < b.last) { return -1; }
  if(a.last > b.last) { return 1; }
  return 0;
})

console.log(entrepreneurs);

console.log("===================================================");