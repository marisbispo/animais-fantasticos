export default class Accordion {
  constructor(list) {
    this.accordionPergunta = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adiciona os eventos ao accordion
  addAcordionEvent() {
    this.accordionPergunta.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  //iniciar função
  init() {
    if (this.accordionPergunta.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionPergunta[0]);
      this.addAcordionEvent();
    }
  }
}
