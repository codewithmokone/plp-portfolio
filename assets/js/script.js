// add active class to the current page link
let navbar = document.querySelector("#navbar");
let links = navbar.querySelectorAll(".navlink")

links.forEach((link) => {
  link.addEventListener("click", function(){
    // Remove the "active" class from the link
    links.forEach((item) => item.classList.remove("active"));

    // Add the "active class to the link"
    link.classList.add("active");
  })  
})


// Mobile menu icons and links
const mobileMenuOpen = document.querySelector(".ham-burger-icon");
const mobileMenuClose = document.querySelector(".close-icon");
const mobileNavMenu = document.querySelector(".mobile-navbar");
const mobileNavLinks = document.querySelectorAll(".mobileNavlink");

// Loop through each navigation link in the mobile menu
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the "active" class from all links
    mobileNavLinks.forEach((item) => item.classList.remove("active"));

    // Add the 'active' class to the clicked link
    link.classList.add("active");

    // Close the mobile menu after clicking a link
    closeMobileMenu();
  });
});

// Function to show the mobile menu
const showMobileMenu = () => {
  
  mobileNavMenu.classList.remove("hidden"); // Remove the 'hidden' class to display the mobile navigation menu
  
  mobileMenuClose.classList.remove("hidden"); // Remove the 'hidden' class to display the close icon (X)

  mobileMenuOpen.classList.add("hidden"); // Add the 'hidden' class to hide the hamburger icon
};

// Function for closing mobile menu
const closeMobileMenu = () => {
  
  mobileNavMenu.classList.add("hidden"); // Add the "hidden" class to hide the mobile nav menu

  mobileMenuClose.classList.add("hidden"); // Add "hidden" class to hide close icon (X)

  mobileMenuOpen.classList.remove("hidden"); // Remove "hidden" class to show menu icon
};

// Add event listeners for opening the mobile menu
mobileMenuOpen.addEventListener("click", showMobileMenu);

// Add event listeners for closing the mobile menu
mobileMenuClose.addEventListener("click", closeMobileMenu);



// Function for sending email using email js'
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "UIEFYxSUvqD6lSTPa",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_j4v7fi5", "template_hc9fmar", this).then(
        () => {
          document.getElementById('user_name').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('message').value = '';
          alert("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};

