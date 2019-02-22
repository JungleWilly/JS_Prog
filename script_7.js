console.log("coucou depuis la console");

console.log("===================================================");

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

for(let i = 0; i < books.length; i++)

{
  if (books[i].rented > 1)
    console.log(books[i].title + " a été emprunté " + books[i].rented + " fois");
}

console.log("===================================================");

console.log("Quel est livre le plus emprunté ?");


let var_to_see_wich_book_have_been_the_most_rented = 0
let title_of_the_most_rented_book = ""
books.forEach(one => {
	if (one.rented > var_to_see_wich_book_have_been_the_most_rented) {
		title_of_the_most_rented_book = one.title
	}
});
console.log(title_of_the_most_rented_book)

console.log("===================================================");

console.log("Quel est le livre le moins emprunté ?");


let var_to_see_wich_book_havent_been_the_most_rented = 0
let title_of_the_most_unrented_book = ""
books.forEach(one => {
	if (var_to_see_wich_book_havent_been_the_most_rented - one.rented > 0 || var_to_see_wich_book_havent_been_the_most_rented == 0) {
var_to_see_wich_book_havent_been_the_most_rented = one.rented
		title_of_the_most_unrented_book = one.title;
	}
});
console.log(title_of_the_most_unrented_book)

console.log("===================================================");

console.log("Trouve le livre avec l'ID: 873495");

let book873495 = books.findIndex(i => i.id === 873495);

console.log(books[book873495].title);

console.log("===================================================");

console.log("Supprime le livre avec l'ID: 133712");

let nb_of_books = books.length
let id_of_the_book_to_delete

for(let count=0; count<= nb_of_books-1; count++) {
	let one = books[count]
	if (one.id == 133712) {
		id_of_the_book_to_delete = count
	}
}
console.log(id_of_the_book_to_delete)
books[id_of_the_book_to_delete] = 0
console.log(books)

console.log("===================================================");

console.log("Trie les livres par ordre alphabétique");

books.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})

console.log(books); 

console.log("===================================================");