const cardForm = document.getElementById('cardForm');

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const color = document.getElementById('color').value;

    const newCard = { title, description, color };
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(newCard);
    localStorage.setItem('cards', JSON.stringify(cards));

    cardForm.reset();
    alert('Card added successfully!');

    generateCards(); // Regenerate the cards display
});

function generateCards() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const cardContainer = document.getElementById('cardContainer');

    // Clear any existing cards
    cardContainer.innerHTML = '';

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

        // Add event listener to delete button
        deleteBtn.addEventListener('click', () => {
            cards.splice(index, 1);
            localStorage.setItem('cards', JSON.stringify(cards));
            generateCards(); // Regenerate the cards display
        });

        // Append card elements to card container
        cardHeader.appendChild(colorEl);
        cardEl.appendChild(cardHeader);
        cardEl.appendChild(cardContent);
        cardFooter.appendChild(deleteBtn);
        cardEl.appendChild(cardFooter);
        cardContainer.appendChild(cardEl);
    });
}

// Generate cards on page load
generateCards();





