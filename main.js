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

// Seleziona tutti i pulsanti like



function renderPosts() {
    // Get the container element
    const container = document.getElementById("container");

    // Iterate through the posts array
    for (const post of posts) {
        // Create a post div element
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        // Create the post header div
        const headerDiv = document.createElement("div");
        headerDiv.className = "post__header";

        // Create the post meta div
        const metaDiv = document.createElement("div");
        metaDiv.className = "post-meta";

        // Create the post meta icon div
        const iconDiv = document.createElement("div");
        iconDiv.className = "post-meta__icon";

        // Create the author's profile pic
        const profilePic = document.createElement("img");
        profilePic.className = "profile-pic";
        profilePic.src = post.author.image || "https://unsplash.it/300/300?image=15";
        profilePic.alt = post.author.name;

        // Create the post meta data div
        const dataDiv = document.createElement("div");
        dataDiv.className = "post-meta__data";

        // Create the author's name
        const authorDiv = document.createElement("div");
        authorDiv.className = "post-meta__author";
        authorDiv.textContent = post.author.name;

        // Create the post creation time
        const timeDiv = document.createElement("div");
        timeDiv.className = "post-meta__time";
        timeDiv.textContent = "4 mesi fa"; // You can format the date as needed

        // Append elements to their respective parents
        iconDiv.appendChild(profilePic);
        dataDiv.appendChild(authorDiv);
        dataDiv.appendChild(timeDiv);
        metaDiv.appendChild(iconDiv);
        metaDiv.appendChild(dataDiv);
        headerDiv.appendChild(metaDiv);

        // Create the post text div
        const textDiv = document.createElement("div");
        textDiv.className = "post__text";
        textDiv.textContent = post.content;

        // Create the post image div
        const imageDiv = document.createElement("div");
        imageDiv.className = "post__image";

        // Create the post image
        const postImage = document.createElement("img");
        postImage.src = post.media;
        postImage.alt = "";

        // Append the post image to its parent div
        imageDiv.appendChild(postImage);

        // Create the post footer div
        const footerDiv = document.createElement("div");
        footerDiv.className = "post__footer";



        // Create the likes CTA div
        const likesCtaDiv = document.createElement("div");
        likesCtaDiv.className = "likes__cta";

        // Create the like button
        const likeButton = document.createElement("a");
        likeButton.className = "like-button js-like-button";
        likeButton.href = "#";
        likeButton.setAttribute("data-postid", post.id);

        // Create the like button icon
        const likeButtonIcon = document.createElement("i");
        likeButtonIcon.className = "like-button__icon fas fa-thumbs-up";
        likeButtonIcon.setAttribute("aria-hidden", "true");

        // Create the like button label
        const likeButtonLabel = document.createElement("span");
        likeButtonLabel.className = "like-button__label";
        likeButtonLabel.textContent = "Mi Piace";

        // Append elements to their respective parents
        likeButton.appendChild(likeButtonIcon);
        likeButton.appendChild(likeButtonLabel);
        likesCtaDiv.appendChild(likeButton);

        // Create the likes counter div
        const likesCounterDiv = document.createElement("div");
        likesCounterDiv.className = "likes__counter";
        likesCounterDiv.innerHTML = `Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone`;

        // Append elements to their respective parents
        likesCtaDiv.appendChild(likesCounterDiv);
        footerDiv.appendChild(likesCtaDiv);

        // ... (rest of the code)

        // Append all elements to the post div
        postDiv.appendChild(headerDiv);
        postDiv.appendChild(textDiv);
        postDiv.appendChild(imageDiv);
        postDiv.appendChild(footerDiv);
        postDiv.appendChild(likesCtaDiv);

        // Append the post div to the container
        container.appendChild(postDiv);
    }

    // Add event listeners to all like buttons after they are created
    const likeButtons = document.querySelectorAll('a.like-button');
    likeButtons.forEach(function (likeButton) {
        likeButton.addEventListener('click', function (event) {
            event.preventDefault();
            const postId = likeButton.getAttribute('data-postid');
            const likeCounterElement = document.getElementById('like-counter-' + postId);
            let likeCounter = parseInt(likeCounterElement.textContent);

            // Simulate liking by toggling the color
            if (likeButton.style.color === 'red') {
                likeButton.style.color = '';
                likeCounter--;
            } else {
                likeButton.style.color = 'red';
                likeCounter++;
            }

            // Update the like counter
            likeCounterElement.textContent = likeCounter;
        })
    })
}

// Call the renderPosts function to display the posts
renderPosts();
