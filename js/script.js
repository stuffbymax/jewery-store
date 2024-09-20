// Attach event listeners to buttons with specific class names
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Optional: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




