const interruttore = document.getElementById('light-switch');
const luce = document.querySelector('.lampada-accesa');
const buio = document.querySelector('.lampada-spenta')

interruttore.addEventListener('click', () => {
  luce.classList.toggle('hide')
  buio.classList.toggle('hide')
    
})