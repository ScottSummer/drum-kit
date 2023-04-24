function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //bunu eklemezsen bir tuşa bastığın zaman bekleme süresi olur bunun sayesinde olmayacak.
    audio.play();
    key.classList.add('playing');
    }

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

