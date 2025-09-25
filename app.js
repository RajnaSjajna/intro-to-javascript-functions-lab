
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));







 
const isAdult = (number) => {
    if (number < 18) {
        return Minor;
    } else { 
        return 'Adult';
    }
}

console.log('Exercise 2 Result:', isAdult(21));








const isCharacterAVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || 'u') {
        return true;
    } else {
        return false;
    }                   
}

console.log('Exercise 3 Result:', isCharAVowel('a'));









function generateEmail(name, domain)   {
    generateEmail('john', 'gmail.com');

return name + 'rajne_rajne@yahoo.com' + domain ;

}

console.log(generateEmail('rajne_rajne', 'yahoo.com'));








function greetUser(timeOfDay ) {
    
const timeOfDay = 'morning';
    if (timeOfDay === 'morning') {
        return 'Good morning';
    } else if (timeOfDay === 'afternoon') {
        return 'Good afternoon';
    } else if (timeOfDay === 'evening') {
        return 'Good evening';
    } else {
        return 'Hello';
    } 


}







const movies = [ 'Lord of the Rings',  'The Fellowship of the Ring', 'Inception'];
// //     const firstMovie = movies[1];
    
// //     console.log(movies.length); 

// //     const lastMovie = movies[movies.length - 1];
// //     console.log(lastMovie);



// movies[1]='Arrival'
// console.log(movies);

// movies.push('Parasite', 'Dune');
// movies.pop();
// console.log(movies)




const books = ['The Shining', 'Pride and prejudice', 'IT', 'Vuk']

console.log(books[1]);
books.forEach(books) => {
console.log(books)}

for (let a=0; a<books.length; a++) {
    console.log(books[a]);
}



