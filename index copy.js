function generateCards() {
    // Get the card container element
    const cardContainer = document.getElementById("card-container");
  
    // Retrieve existing card data from local storage, or set to an empty array if no data exists
    let cardData = JSON.parse(localStorage.getItem("myCardData")) || [];
  
    // Define an array of card data objects
    const newCards = [
      {
        title: "Card 1",
        content: "This is the content for card 1.",
        color: "#845EC2"
      },
      {
        title: "Card 2",
        content: "This is the content for card 2.",
        color: "#D65DB1"
      },
      {
        title: "Card 3",
        content: "This is the content for card 3.",
        color: "#FF6F91"
      }
    ];
  
    // Add new card data to the existing card data array
    cardData = [...cardData, ...newCards];
  
    // Store the updated card data in local storage
    localStorage.setItem("myCardData", JSON.stringify(cardData));
  
    // Loop through the card data array and generate HTML/CSS for each card
    cardData.forEach((card) => {
      // Create card elements
      const cardDiv = document.createElement("div");
      const cardTitle = document.createElement("h2");
      const cardContent = document.createElement("p");
  
      // Set the card title and content
      cardTitle.innerText = card.title;
      cardContent.innerText = card.content;
  
      // Apply card styles
      cardDiv.style.backgroundColor = card.color;
      cardDiv.classList.add("card");
  
      // Append card elements to the card container
      cardDiv.appendChild(cardTitle);
      cardDiv.appendChild(cardContent);
      cardContainer.appendChild(cardDiv);
    });
  }
  