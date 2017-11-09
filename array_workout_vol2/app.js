const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


const isAdult = people.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19
})

console.log(">>>>>>>>>>>> is there an adult?", isAdult);


const allAdults = people.every(person => (new Date().getFullYear()) - person.year >= 19)

console.log(">>>>>>>>>>>> are they all?", allAdults)


const commentToFind = comments.find(comment => comment.id === 823423)

console.log("to find this >>>>>>>>>>>>>>", commentToFind)


const commentToRemove = comments.splice(comments.findIndex(comment => comment.id === 823423), 1)

console.log(commentToRemove)
console.table(comments)