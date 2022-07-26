export default function scrollSuave() {
  const hrefMenu = document.querySelectorAll('[data-menu="suave"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  hrefMenu.forEach((menu) => {
    menu.addEventListener('click', scrollToSection);
  });
}
