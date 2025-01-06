// Select all anchor links with hashes
const links = document.querySelectorAll('a[href^="#"]');
// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default click behavior
        const targetId = this.getAttribute('href'); // Get target ID from href
        const targetElement = document.querySelector(targetId); // Find the target element
        
        if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Fade-In Effect on Scroll
const allSections = document.querySelectorAll('section');

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

allSections.forEach(section => fadeInObserver.observe(section));
const backToTopButton = document.getElementById("back-to-top");

// Show the button after scrolling down a certain amount
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

