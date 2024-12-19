document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simulate form submission success
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Clear form fields
    e.target.reset();
});
// Add interactivity: Alert on click
document.querySelectorAll("ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
        alert(`You clicked on: ${link.textContent}`);
    });
});
