import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

initAnimacaoScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
