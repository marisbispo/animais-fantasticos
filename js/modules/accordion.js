export default function initAccordion() {
  const accordionPergunta = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );

  function aparecerResposta() {
    this.nextElementSibling.classList.toggle('ativo');
    this.classList.toggle('ativo');
  }

  if (accordionPergunta.length) {
    accordionPergunta[0].classList.add('ativo');
    accordionPergunta[0].nextElementSibling.classList.add('ativo');

    accordionPergunta.forEach((pergunta) => {
      pergunta.addEventListener('click', aparecerResposta);
    });
  }
}
