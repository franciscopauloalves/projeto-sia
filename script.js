const btnmobile = document.getElementById('btn-mobile');

function togglemenu(event) {
    if (event.type === 'touchstart') event.preventdefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currenttarget.setattribute('aria-extend', active) 
    if (active) {
        event.currenttarget.setattribute('aria-label', 'fechar menu');
    } else {
        event.currenttarget.setattribute('aria-label', 'abrir menu');
    }
}

btnmobile.addEventListener('click', togglemenu);
btnmobile.addEventListener('touchstart', togglemenu);