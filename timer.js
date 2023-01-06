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