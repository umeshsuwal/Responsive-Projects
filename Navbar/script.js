function toggleNavbar() {
    const navbarList = document.querySelector('.navbar__list');
    const toggleBtn = document.querySelector('.navbar__toggle-btn');
  
    navbarList.classList.toggle('hidden');
  
    // Change the button content based on the visibility of the navbar list
    if (navbarList.classList.contains('hidden')) {
      toggleBtn.innerHTML = "☰"; // Menu is hidden, show the hamburger icon
    } else {
      toggleBtn.innerHTML = "-"; // Menu is visible, show the "-" icon
    }
  }