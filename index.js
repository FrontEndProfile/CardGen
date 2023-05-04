const header = document.getElementById('header');

// Load the navbar HTML into the header element
fetch('NavBar.html')
    .then(response => response.text())
    .then(html => {
        header.innerHTML = html;
        // Highlight the active page link in the navbar
        const currentPage = window.location.pathname.split('/').pop();
        const links = header.querySelectorAll('a');
        links.forEach(link => {
            const linkHref = link.getAttribute('href').split('/').pop();
            if (linkHref === currentPage) {
                link.classList.add('active');
            }
        });
    });









// function to show the loader
function showLoader() {
    // show the loader wrapper
    document.querySelector("#loader-wrapper").style.display = "block";

    // set a timer to hide the loader after 3 seconds
    setTimeout(function () {
        hideLoader();
    }, 3000);
}

// function to hide the loader
function hideLoader() {
    // hide the loader wrapper
    document.querySelector("#loader-wrapper").classList.add("loaded");
}

// add click event listeners to all links
var links = document.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        // show the loader
        showLoader();
    });
}
