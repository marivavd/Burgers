const links = document.querySelectorAll('.header_link');
const ACTIVE_LINK_STORAGE_KEY = 'activeHeaderLinkHref';

if (links.length > 0) {
  let activeHref = localStorage.getItem(ACTIVE_LINK_STORAGE_KEY);

  if (!activeHref) {
    let currentPage = window.location.pathname.split('/').pop();
    if (!currentPage) currentPage = 'index.html';
    activeHref = currentPage;
  }

  links.forEach((link) => {
    const linkHref = link.getAttribute('href');

    if (linkHref === activeHref) {
      link.classList.add('active');
    }

    link.addEventListener('click', () => {
      localStorage.setItem(ACTIVE_LINK_STORAGE_KEY, linkHref);
    });
  });
}
