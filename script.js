// Lógica de JavaScript para Domino Elite

// Cambiar de Pestaña / Catálogo
function switchTab(tabId) {
  // Ocultar todas las secciones de contenido
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.add('hidden');
  });

  // Mostrar el catálogo seleccionado
  const activeTab = document.getElementById(`tab-${tabId}`);
  if (activeTab) {
    activeTab.classList.remove('hidden');
  }

  // Actualizar estilos activos en los botones principales
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));
  
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  // Actualizar estilos en la subnavegación
  const subnavBtns = document.querySelectorAll('.subnav-btn');
  subnavBtns.forEach(btn => btn.classList.remove('active'));
  
  const activeSubnav = document.getElementById(`subnav-${tabId}`);
  if (activeSubnav) {
    activeSubnav.classList.add('active');
  }

  // Cerrar menú móvil al hacer clic
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  // Desplazar suavemente hacia la sección
  window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Menú Móvil Hamburger Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

// Filtro de Búsqueda de Campeones Mundiales
function filterChampions() {
  const input = document.getElementById('champion-search');
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.champion-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Abrir / Cerrar Modales
function toggleModal(modalId) {
  if (modalId === 'score-calculator') {
    const modal = document.getElementById('score-modal');
    if (modal) {
      modal.classList.toggle('hidden');
    }
  }
}

// Calculadora Anotadora Digital de Partidas
let scoreA = 0;
let scoreB = 0;

function addScore(team, points) {
  if (team === 'a') {
    scoreA += points;
    document.getElementById('score-a').innerText = scoreA;
  } else if (team === 'b') {
    scoreB += points;
    document.getElementById('score-b').innerText = scoreB;
  }

  if (scoreA >= 200) {
    alert('¡Victoria para la Pareja A alcanzando los 200 puntos!');
  } else if (scoreB >= 200) {
    alert('¡Victoria para la Pareja B alcanzando los 200 puntos!');
  }
}

function resetScores() {
  scoreA = 0;
  scoreB = 0;
  document.getElementById('score-a').innerText = 0;
  document.getElementById('score-b').innerText = 0;
}

// Manejador del Formulario de Inscripción
function handleFormSubmit(event) {
  event.preventDefault();
  alert('¡Gracias por tu interés! Adrián Pantaleón se pondrá en contacto contigo muy pronto a través de WhatsApp.');
}