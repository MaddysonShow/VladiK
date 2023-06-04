const but = document.querySelector('#but_DkLt')
const body = document.querySelector('.body')
const boxes = document.querySelector('.boxes')
const oglav = document.querySelectorAll('.oglav')
// const stolbets = document.querySelector('.stolbets::placeholder')
const otpravka = document.querySelector('#отправка')
const ima = document.querySelector('#имя')
but.addEventListener('click', () => {

    if (but.getAttribute('id') === 'but_DkLt') {
        for (i of oglav) {
            i.setAttribute('class', 'oglavD')
        }
        boxes.setAttribute('class', 'boxesD')
        body.setAttribute('class', 'bodyD');
        but.setAttribute('id', 'but_DkLt1');
        // stolbets.setAttribute('class', 'stolbetsD::placeholder')
        but.textContent = 'light'
    } else if (but.getAttribute('id') === 'but_DkLt1') {
        for (i of oglav) {
            i.setAttribute('class', 'oglav')
        }
        boxes.setAttribute('class', 'boxes')
        body.setAttribute('class', 'body')
        but.setAttribute('id', 'but_DkLt');
        // stolbets.setAttribute('class', 'stolbets::placeholder')
        but.textContent = ' Dark';
    }
});

const hello = document.getElementById('hello')
console.dir(hello);

hello.onclick = function () {
    console.log('click');
}
hello.onmouseover = function () {
    console.log('move')
}

hello.addEventListener('copy', function () {
    console.log('copy')
    console.log(window.location);
})
addEventListener('submit', logSubmit);

function logSubmit(event) {
    alert(`БЭКА НЕТ но ты ${ima.value.toUpperCase()} молодец)`)
    console.log('ima ' + ima.value);
    event.preventDefault();
}