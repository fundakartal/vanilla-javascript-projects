const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', () => openModal(false));

function openModal(open = true) {
  if (open) {
    modal.classList.add('open-modal');
  } else {
    modal.classList.remove('open-modal');
  }
}

modal.addEventListener('click', (e) => {
  if (!e.target.classList.contains('modal-overlay')) {
    return;
  } else {
    openModal(false);
  }
});