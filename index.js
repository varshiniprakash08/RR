let text=document.getElementById('welcome_text');

window.addEventListener('scroll', () => {
    let value= window.scrollY;

    text.style.marginTop = -value * 2 + 'px';
})