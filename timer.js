const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');

const zerar = document.querySelector('.zerar');
let second = 0;
let timer;

function getSecond(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

document.addEventListener('click', function(e) {
  const el = e.target;
  
  if (el.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado');
    second = 0;
  }

  if (el.classList.contains('pausar')) {
    clearInterval(timer);
  relogio.classList.add('pausado');
  }

  if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }  

  // if (el.classList.contains('iniciar')) {
  //   relogio.classList.remove('pausado');
  //   clearInterval(timer);
  //   iniciaRelogio();
  // }  
});

function iniciaRelogio() {
  timer = setInterval(function() {
   second += 1;
   relogio.innerHTML = getSecond(second);
  }, 1000);
 }