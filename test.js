/*alert('Dick')*/
var name = 'Vladick'
const lastname = 'Mendelson' //string
let age = -1 //int
const bool = true //bool
var num1 = 21
var num2 = 5
var sum = num1 / num2
name = 'vlad'
console.log(typeof name)
console.log('Pidor ' + sum)
var da
const year = 2023
const BD = 1996
const isFullYear = year - BD <= age
if (isFullYear == true)
{
    da = 'polnih'
    console.log('Polnih let ' + da)
}
else {
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

const chelovek = {
    nname: 'Mad',
    lastnn: 'Dick',
    rodil: 1996,
    languages: ['ru', 'en', 'kz'],
    marryed: false,
    delay: function () {
        console.log('Class.Function')
    }
}
console.log(chelovek.languages)
console.log(Math.pow(2, 53 ) -1)

intstring = '228'
floatstring = 1.929
console.log(parseFloat((floatstring + 1).toFixed(5)))

function getrandom (min, max){
return Math.round(Math.random() * (max-min) + min) }

console.log(getrandom(-100, 1000));

function pers (s, a ,b){
    if (b < 0) {
     b = 'ewe ne rodilsya'
    }
    return `имя ${a} возраст ${b}`
}
const out = pers `имя ${name}, Возраст ${age}!`
// console.log(out);

const ArrowMetod = (_4islo = 1, step = 1) => Math.pow(_4islo, step)
// console.log(ArrowMetod(8, 6))

function mathall(...vse) {
    console.log(vse);
    var rez = 0
    for(i = 0; i <= (vse.length - 1); i++)
    {
        rez += vse[i];
    }
    // console.log(rez);
}
mathall(1,2,3,-1,0.22,99)

function Zamknulo (nname) {
    return function (ffamily){
        console.log(nname + ffamily)
    }
}

const x = Zamknulo('Vladick ');
console.log(x('Mad'));

const string = 'Hello, we a learning JS';
const revers = string.split('').reverse().join('')
console.log(revers);

