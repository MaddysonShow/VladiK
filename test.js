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

// onsubmit = (event) => {
//     console.log(ima.getAttribute('ima') + 'getAtr');
//     alert(ima.getAttribute('ima'));
// };
addEventListener('submit', logSubmit);
function logSubmit(event) {
    alert('ЕДЕМ В ГЕЙКЛУБ ' + ima.value.toUpperCase())
    console.log('ima ' + ima.value);
    event.preventDefault();
}
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

/*alert('Dick')*/
var name = 'Vladick'
const lastname = 'Mendelson' //string
let age = -1 //int
const bool = true //bool
var num1 = 21
var num2 = 5
var sum = num1 / num2
name = 'vlad'
// console.log(typeof name)
console.log('Pidor ' + sum)
var da
const year = 2023
const BD = 1996
const isFullYear = year - BD <= age
if (isFullYear == true) {
    da = 'polnih'
    console.log('Polnih let ' + da)
} else {
    da = 'net'
    console.log('Polnih let ' + da)
}

/*function delay(godr)
{
    var a = year - godr;
    return a;
}

function delay2 (godr, name1){

    var b = delay(godr)
    if (b >= 0)
    {console.log('ты ' + name1 + ' те лет ' + b) }
    else if (b <= 0)
    { console.log('ты помоему ошибся')}

}

delay2(1998, 'vld')
delay2(200, 'sol')
delay2(2023, '2023test')*/

const mass = [29, 33, 221, 89]
/*
for (i=0;i<=(mass.length-1);i++){
    console.log('kolvo'+i)
    console.log(mass[i])
    }*/

/*for (mas of mass) {

    console.log(mas)
}*/

console.log(Math.pow(2, 53) - 1)

intstring = '228'
floatstring = 1.929
console.log(parseFloat((floatstring + 1).toFixed(5)))

function getrandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getrandom(-100, 1000));

function pers(s, a, b) {
    if (b < 0) {
        b = 'ewe ne rodilsya'
    }
    return `имя ${a} возраст ${b}`
}

const out = pers`имя ${name}, Возраст ${age}!`
// console.log(out);

const ArrowMetod = (_4islo = 1, step = 1) => Math.pow(_4islo, step)

// console.log(ArrowMetod(8, 6))

function mathall(...vse) {
    console.log(vse);
    var rez = 0
    for (i = 0; i <= (vse.length - 1); i++) {
        rez += vse[i];
    }
    // console.log(rez);
}

mathall(1, 2, 3, -1, 0.22, 99)

function Zamknulo(nname) {
    return function (ffamily) {
        // console.log(nname + ffamily)
    }
}

const x = Zamknulo('Vladick ');
// console.log(x('Mad'));

const string = 'Hello, we a learning JS';
const revers = string.split('').reverse().join('')
// console.log(revers);

var mas = ['SAS', 'LOL', 'KEKA', 'PK'];
let dd = 'keka';
if (mas.indexOf(dd) < 0) {
    dd = dd.toUpperCase();
    if (mas.indexOf(dd) >= 0) {
        // console.log(mas.indexOf(dd));
    }
}

const object = [
    {names: 'vlad', dlina: 998},
    {names: 'dalv', dlina: 120},
    {names: 'advl', dlina: 545},
    {names: 'aziz', dlina: 210}
];

for (var xs = 0; xs <= (object.length - 1); xs++) {
    // console.log(object[xs].dlina);
    if (object[xs].dlina === 120) {
        console.log('nashel ' + xs); //variant 1
    }
}


/*const ind = object.findIndex(function (poisk) {
    return poisk.names === "vlad";
})
object[ind].names = 'PIDR';*/

const ind = object.find(ind => ind.names === "dsad")
// console.log(ind); //стрелочная лямбда функция поиск а
// console.log(mas.includes('LOL'));

const Upper = mas.map(up => {
    return up.toLowerCase()
})
// console.log(Upper);
//pow2 = c => c ** 2;
//const Kvadrat = mass.map(Math.sqrt);
// console.log(Kvadrat);
const ebat = mass.map(num => num * 2);
console.log(ebat);
const filter = ebat.filter(up => up > 80);
console.log(filter);

const allDlina = object.filter(fil => fil.dlina > 0).reduce
(function (beta, alfa) {
    return beta += alfa.dlina;
}, 0)
console.log('reduce ' + allDlina);
let maat = 0;
const go = object.map(mat => maat += mat.dlina)
console.log(maat);

/*let bind = [{nam: 90}, {nam: 3}, {nam: 7}, {nam: 10}];   Два метода поиска и фильтра результата
const vera = bind.filter(cycle => cycle.nam > 7).reduce((first, second) =>
    first += second.nam, 0)
console.log(vera);


for (p = 0, per = 0; p <= (bind.length - 1); p++) {
    if (bind[p].nam > 7) {
        per += bind[p].nam;
    }
}
console.log('per ' + parseFloat(per));*/

/*var POISK = 'KEKA'; метод поиска и фильтра результата
for (o = 0; o <= (mas.length - 1); o++) {
    if (mas[o] === POISK) {
        console.log(o + ' ' + mas[o]);
    } else {
        console.log('nenaideno');
    }
}*/

const chelovek = {
    nname: 'Mad',
    lastnn: 'Dick',
    rodil: undefined,
    languages: ['ru', 'en', 'kz'],
    marryed: false,
    'complex': 'complex key',
    ['key_' + (1 + 4)]: 'KKKK555',
    delay: function () {
        console.log('Class.Function')
    },
    delay2() {
        console.log('delay2');
    },
    inf() {
        console.log('this ', this);
    }
}

/*console.log(chelovek['complex']);
chelovek.delay2()
chelovek['key_5'] = 789;
console.log(chelovek['key_5']);
delete chelovek['key_5'];
console.log(chelovek);
const {nname, rodil: ages = 1, languages} = chelovek;
 console.log(nname, ages, languages)*/

for (let i in chelovek) {
    if (chelovek.hasOwnProperty(i)) {  //ЗАПОМНИТЬ
        //   console.log(i, chelovek[i]);
    }
}

Object.keys(chelovek).forEach((key) => {
    // console.log(chelovek[key])
})

// console.log(Object.keys(chelovek));
chelovek.inf();

const logger =
    {
        keyss(che) {
            console.log('type ', Object.keys(this))
            //  a = this;
            // console.log('this ', a)
            // console.log('TAIP ', Object.keys(gget))
            /*Object.keys(this).forEach((key) => {
                console.log(this[key])
             })*/

        },
        pod: 'dolb',
        keyAndValue() {
            for (let C in this) {
                if (this.hasOwnProperty(C)){console.log(C + ' ' + this[C]);}

            }
            Object.keys(this).forEach((key) => {
                console.log(this[key] + '->' + key)
            })
        },
        keyAndValWithParams(top = false, between = false, bot = false) {
            if (top) { console.log('------START------'); }
            Object.keys(this).forEach((key, index, array) => {
                console.log(this[key] + '->' + key)
                if (between && index !== (array.length - 1)) { console.log('----------------');}
            })
            if(bot) { console.log('------ END ------') }
        }
    }
//
// const bound = logger.keyss.bind(chelovek);
// bound();

logger.keyAndValWithParams.apply(chelovek, [true, , true]) //все тоже что и call только всего
// два параметра, и вторым можно давать массив значений
// logger.keyAndValWithParams.call(chelovek, false, true, true)



