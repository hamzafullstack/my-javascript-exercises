const people = [
  { name: "Maria", birthYear: 1950, deathYear: 2010 },
  { name: "John", birthYear: 1920, deathYear: 2005 },
  { name: "Ahmed", birthYear: 1980, deathYear: 2020 },
  { name: "Sophia", birthYear: 1945, deathYear: 1990 },
  { name: "David", birthYear: 1930, deathYear: null },
];

const findTheOldest = function(lifeSpan) {
   return lifeSpan.reduce((oldest, current) => {
    let fixedCurrent = current;
    if(current.deathYear === null) {
     fixedCurrent = {...current, deathYear: new Date().getFullYear()};
      // return current;
    }
    const oldestAge = oldest.deathYear - oldest.birthYear;
    const currentAge = fixedCurrent.deathYear - fixedCurrent.birthYear;
    return currentAge > oldestAge ? fixedCurrent : oldest;

   });
};

console.log(findTheOldest(people));



// https://dev.to/priya_saas/how-to-calculate-age-in-javascript-beyond-adding-or-subtracting-years-54k1
// https://dev.to/marcojhb/using-reduce-to-find-the-oldest-age-in-an-array-18k3

// Do not edit below this line
module.exports = findTheOldest;
