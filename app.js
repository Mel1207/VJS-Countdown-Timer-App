const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('click', () => {
    // change theme color 
    const body = document.querySelector('body');
    body.classList.toggle('darken');
})