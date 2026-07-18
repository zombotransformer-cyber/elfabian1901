const track = document.querySelector('#product-track');
const card = document.querySelector('.product-card');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

function scrollCards(direction) {
  const distance = card.offsetWidth + 20;
  track.scrollBy({ left: direction * distance, behavior: 'smooth' });
}
previous.addEventListener('click', () => scrollCards(-1));
next.addEventListener('click', () => scrollCards(1));

const whatsappNumber = '51975486973';
const whatsappMessage = '¡Hola! Me gustaría conocer más sobre las galletas de 1FR.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelector('#year').textContent = new Date().getFullYear();
 