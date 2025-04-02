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