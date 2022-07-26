export default class scrollSuave {
  constructor(links, options) {
    this.hrefMenu = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.hrefMenu.forEach((menu) => {
      menu.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.hrefMenu.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
