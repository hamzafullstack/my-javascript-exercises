const books = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
  },
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "Bang-e-Dra",
    author: "Dr. Allama Iqbal",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
];
// solution.
const getTheTitles = function(getBookTitle) {
    return getBookTitle.map((bookTitles) => bookTitles.title);
};
console.table(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
