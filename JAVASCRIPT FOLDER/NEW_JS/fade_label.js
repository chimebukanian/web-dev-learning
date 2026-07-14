const fadeLabel = document.getElementById('fadeLabel');
const fadeButton = document.getElementById('fadeButton');
let hidden = false;

fadeButton.addEventListener('click', () => {
    hidden = !hidden;
    fadeLabel.classList.toggle('hidden', hidden);
    fadeButton.textContent = hidden ? 'Show' : 'Fade';
});
