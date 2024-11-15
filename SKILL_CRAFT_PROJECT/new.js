// JavaScript to change the background color of the navigation bar during scrolling 
// Adding an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Getting the navbar element by its ID
    const navbar = document.getElementById('navbar');
    
    // Toggle the 'scrolled' class based on whether the scroll position is greater than 50 pixels
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

