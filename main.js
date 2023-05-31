const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


/*Milestone 1
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.*/



/*Milestone 2
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.*/

/*1)  Prendo il bottone

faccio un add event listener sul bottone

al clicco del bottone, il bottone diventa rosso

*/

let likeButton=document.querySelector('a.like-button');
let likeCounter=parseInt(document.getElementById('like-counter-1').textContent);

/*2)  Prendo il bottone like
prendo il bottone counter like
faccio un add event listener sul bottone like
quando lo clicco, il counter like diventa quello che è adesso + 1*/

likeButton.addEventListener('click', function(){
    likeButton.style.color='red';

    likeCounter++;
    document.getElementById('like-counter-1').textContent = likeCounter;
});

let container=document.getElementById('container');

posts.forEach(function(card) {
    // Crea un elemento HTML per la card
    let cardElement = document.createElement("div");
    cardElement.classList.add("post");

    // Crea gli elementi interni per il contenuto della card
    let titleElement = document.createElement("h1");
    titleElement.textContent = card.author;
    titleElement.classList.add('post-meta__author')
    titleElement.classList.add('post-meta__author')
    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add('post__text');

    descriptionElement.textContent = card.content;
    let imageElement = document.createElement("img");
    imageElement.src = card.media;
    imageElement.classList.add('scoreimg');

    // Aggiungi gli elementi interni alla card
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);
    cardElement.appendChild(imageElement);

    // Aggiungi la card al contenitore
    container.appendChild(cardElement);
});