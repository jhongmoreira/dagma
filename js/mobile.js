const btnMenu = document.getElementById('btn-mobile');

function toggleMenu(event){
  if (event.type === 'touchstart'){
    event.preventDefault();
  }
  const nav = document.getElementById("menu");
  nav.classList.toggle("active");

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  
  if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  }else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);