const cards = document.querySelectorAll('.card');

let card0ne, cardTwo;

function flipCard(e) {
    letclickedCard = e.target;
    clickedCard.classList.add('flip');
    if (!card0ne) {
        return card0ne = clickedCard;
    }
 cardTwo = clickedCard;
 console.log(card0ne, cardTwo);
}


cards.forEach(card => {
    card.addEventListener('click', flipCard);
}
);





