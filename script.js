function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// JavaScript to handle continuous scroll animation
function handleContinuousScroll() {
  const elements = document.querySelectorAll('.continuous-fade-in');
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top <= windowHeight * 0.85) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleContinuousScroll);

// Initial check for elements in viewport
handleContinuousScroll();

// JavaScript for Scroll to Top Button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add scroll event listener to toggle button visibility
window.addEventListener('scroll', () => {
  const scrollButton = document.getElementById('scroll-to-top');

  if (window.scrollY > 200) {
    scrollButton.style.display = 'block'; // Show the button when scrolled down
  } else {
    scrollButton.style.display = 'none'; // Hide the button when at the top
  }
});

