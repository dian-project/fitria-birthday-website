const screens = [...document.querySelectorAll('.screen')];
function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById('openBtn').addEventListener('click', () => showScreen('birthday'));
document.querySelectorAll('[data-next]').forEach(button => {
  button.addEventListener('click', () => showScreen(button.dataset.next));
});
const envelopeBtn = document.getElementById('envelopeBtn');
const letterContent = document.getElementById('letterContent');
const finishBtn = document.getElementById('finishBtn');
envelopeBtn.addEventListener('click', () => {
  letterContent.classList.remove('hidden');
  envelopeBtn.classList.add('hidden');
  finishBtn.classList.remove('hidden');
});
finishBtn.addEventListener('click', () => showScreen('ending'));
document.getElementById('replayBtn').addEventListener('click', () => showScreen('intro'));

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let musicStarted = false;
musicBtn.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicStarted = true;
      musicBtn.innerHTML = '♫ <span>Jeda musik</span>';
    } catch (error) {
      musicBtn.innerHTML = '♫ <span>Tambahkan music.mp3</span>';
    }
  } else {
    music.pause();
    musicBtn.innerHTML = '♫ <span>Putar musik</span>';
  }
});
