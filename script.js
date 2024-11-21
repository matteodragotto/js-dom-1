const interruttore = document.getElementById('light-switch');
const luce = document.querySelector('.lampada-accesa');
const buio = document.querySelector('.lampada-spenta');
const suonoAccensione = document.getElementById('light-sound');

interruttore.addEventListener('click', () => {  
  luce.classList.toggle('hide')
  buio.classList.toggle('hide')

  if (!luce.classList.contains('hide')) {
    luce.classList.add('flickering');
    suonoAccensione.play();
  }

  setTimeout(() => {
    luce.classList.remove('flickering');
    luce.style.opacity = '1';
  }, 2000);

  interruttore.innerHTML = luce.classList.contains('hide') ? 'Clicca qui per accendere la luce' : 'Clicca qui per spegnere la luce'
    
})