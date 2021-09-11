
window.addEventListener('load', ()=>{
    if(document.body.offsetWidth <= 620){
        addBtnMenu();
    }
});

window.addEventListener('resize', ()=>{
    const btnMenu = document.querySelector('.btn--menu');
    const btnMenuClose = document.querySelector('.btn--menu-close');
    if(!btnMenu && !btnMenuClose){
        addBtnMenu();
    }

});

function addBtnMenu(){
    const btnMenu = document.createElement('button');
    const menu = document.querySelector('.nav__list');
    const header = document.querySelector('.header>.wrap');

    btnMenu.classList.add('btn--menu');
    header.append(btnMenu);

    btnMenu.addEventListener('click', ()=>{
        menu.classList.toggle('active');
        btnMenu.classList.toggle('btn--menu-close');
    });
}