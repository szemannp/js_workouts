
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


const fifteenHundred = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true
  }
})

console.table(fifteenHundred);


const inventorsNames = inventors.map(inventor => inventor.first + ' ' + inventor.last)

console.log(inventorsNames)


const sortedNames = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

console.table(sortedNames);


const totalLifespan = inventors.reduce((sum, inventor) => {
  return sum + (inventor.passed - inventor.year)
}, 0)

console.log('sum: ', totalLifespan);


const sortedByLifespan = inventors.sort((a, b) => {
  if ((a.passed - a.year) > (b.passed - b.year)) {
    return -1
  } else {
    return  1
  }
})

console.table(sortedByLifespan);


if (window.location.href == 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris') {

  const category = document.querySelector('.mw-category')
  const links = [...category.querySelectorAll('a')]

  const containsDe = links
                      .map(link => link.textContent)
                      .filter(streetName => streetName.includes('de'))
}


const alphabeticallySorted = people.sort((last, next) => {
  const [aLastName, aFirstName] = last.split(', ')
  const [bLastName, bFirstName] = next.split(', ')
  return aLastName > bLastName ? 1 : -1
})

console.log(alphabeticallySorted)

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const summedInstances = data.reduce((obj, instance) => {
  if (!obj[instance]) {
    obj[instance] = 0
  }
  obj[instance]++
  return obj
}, {})

console.log(summedInstances)