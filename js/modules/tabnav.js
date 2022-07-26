export default function initTabNav() {
  const animaisTexto = document.querySelectorAll(
    '[data-tab="content"] section',
  );
  const animaisFoto = document.querySelectorAll('[data-tab="menu"] li');

  function desaparecerTexto(index) {
    animaisTexto.forEach((animal) => {
      animal.classList.remove('ativo');
    });
    const direcao = animaisTexto[index].dataset.anime;

    animaisTexto[index].classList.add('ativo', direcao);
  }

  if (animaisTexto.length && animaisFoto) {
    animaisTexto[0].classList.add('ativo');

    animaisFoto.forEach((animal, index) => {
      animal.addEventListener('click', () => {
        desaparecerTexto(index);
      });
    });
  }
}
