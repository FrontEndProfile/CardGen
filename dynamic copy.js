function generateCards() {
    // Get the card container element
    const cardContainer = document.getElementById("card-container");
  
    // Retrieve existing card data from local storage, or set to an empty array if no data exists
    let cardData = JSON.parse(localStorage.getItem("myCardData")) || [];
  
    // Define form elements
    const form = document.getElementById("card-form");
    const titleInput = document.getElementById("card-title");
    const contentInput = document.getElementById("card-content");
    const colorInput = document.getElementById("card-color");
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Create a new card data object with the form inputs
      const newCard = {
        title: titleInput.value,
        content: contentInput.value,
        color: colorInput.value
      };
  
      // Add the new card data to the card data array
      cardData.push(newCard);
  
      // Store the updated card data in local storage
      localStorage.setItem("myCardData", JSON.stringify(cardData));
  
      // Clear the form inputs
      titleInput.value = "";
      contentInput.value = "";
      colorInput.value = "";
  
      // Generate HTML/CSS for the new card and append it to the card container
      const cardDiv = createCardDiv(newCard);
      cardContainer.appendChild(cardDiv);
    });
  
    // Loop through the card data array and generate HTML/CSS for each card
    cardData.forEach((card) => {
      // Create card elements
      const cardDiv = createCardDiv(card);
  
      // Append card elements to the card container
      cardContainer.appendChild(cardDiv);
    });
  
    // Helper function to create a card div element based on card data
    function createCardDiv(card) {
      const cardDiv = document.createElement("div");
      const cardTitle = document.createElement("h2");
      const cardContent = document.createElement("p");
  
      // Set the card title and content
      cardTitle.innerText = card.title;
      cardContent.innerText = card.content;
  
      // Apply card styles
      cardDiv.style.backgroundColor = card.color;
      cardDiv.classList.add("card");
  
      // Append card elements to the card div
      cardDiv.appendChild(cardTitle);
      cardDiv.appendChild(cardContent);
  
      return cardDiv;
    }
  }
  