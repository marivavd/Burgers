const links = document.querySelectorAll(".header_link");

let currentPage = window.location.pathname.split("/").pop();

if (!currentPage) currentPage = "index.html";

links.forEach(link => {
  const linkPage = link.getAttribute("href").split("/").pop();

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});