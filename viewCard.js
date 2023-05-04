// Vew Page 

const cards = JSON.parse(localStorage.getItem('cards')) || [];
const cardContainer = document.getElementById('cardContainer');

// Loop through the cards array and create a new card for each object
cards.forEach((card, index) => {
    const { title, description, color } = card;

    // Create card elements
    const cardEl = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardContent = document.createElement('div');
    const cardFooter = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const colorEl = document.createElement('span');

    // Add classes and content to card elements
    cardEl.classList.add('card');
    cardHeader.classList.add('card-header');
    cardContent.classList.add('card-content');
    cardFooter.classList.add('card-footer');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.textContent = 'Delete';
    colorEl.classList.add('card-color');
    colorEl.style.backgroundColor = color;

    cardHeader.textContent = title;
    cardContent.textContent = description;

    // // Add event listener to delete button
    // deleteBtn.addEventListener('click', () => {
    //     cards.splice(index, 1);
    //     localStorage.setItem('cards', JSON.stringify(cards));
    //     generateCards(); // Regenerate the cards display
    // });
    // Add event listener to delete button
    deleteBtn.addEventListener('click', () => {
        cards.splice(index, 1);
        localStorage.setItem('cards', JSON.stringify(cards));
        cardEl.classList.add('hide'); // add "hide" class to the card element
    });

    // Append card elements to card container
    cardHeader.appendChild(colorEl);
    cardEl.appendChild(cardHeader);
    cardEl.appendChild(cardContent);
    cardFooter.appendChild(deleteBtn);
    cardEl.appendChild(cardFooter);
    cardContainer.appendChild(cardEl);
});

