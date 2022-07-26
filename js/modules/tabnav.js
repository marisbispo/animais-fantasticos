export default class TabNav {
  constructor(menu, content) {
    this.animaisFoto = document.querySelectorAll(menu);
    this.animaisTexto = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  desaparecerTexto(index) {
    this.animaisTexto.forEach((animal) => {
      animal.classList.remove(this.activeClass);
    });
    const direcao = this.animaisTexto[index].dataset.anime;

    this.animaisTexto[index].classList.add(this.activeClass, direcao);
  }

  //Adiciona os eventos
  addTabNavEvent() {
    this.animaisFoto.forEach((animal, index) => {
      animal.addEventListener('click', () => {
        this.desaparecerTexto(index);
      });
    });
  }

  init() {
    if (this.animaisTexto.length && this.animaisFoto.length) {
      //ativar primeiro item
      this.desaparecerTexto(0);
      this.addTabNavEvent();
    }
  }
}
