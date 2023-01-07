const but = document.querySelector('button')
but.addEventListener('click', () => {
    // check if context is in suspended state (autoplay policy)


    if (but.getAttribute('class') === 'paused') {

        but.setAttribute('class', 'playing');
        but.textContent = 'Pause'

    }
    else if (but.getAttribute('class') === 'playing') {

        but.setAttribute('class', 'paused');
        but.textContent = 'Play';
    }
});