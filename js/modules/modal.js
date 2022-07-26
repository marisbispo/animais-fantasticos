export default function initModal() {
  const linkLogin = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirFecharModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function fecharGrid(event) {
    if (event.target === this) {
      abrirFecharModal(event);
    }
  }

  if (linkLogin && botaoFechar && containerModal) {
    linkLogin.addEventListener('click', abrirFecharModal);
    botaoFechar.addEventListener('click', abrirFecharModal);
    containerModal.addEventListener('click', fecharGrid);
  }
}
