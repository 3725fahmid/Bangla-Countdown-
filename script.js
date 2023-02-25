// Set date where we want to start countdown our date

const countdownDate = new Date('JULY 30, 2023 16:00:00').getTime(); // here we get date from 1970/1/1 to 'July 28,2022 10:00:00' in milisecond 
const currentDate = new Date().getTime;



const countInter = setInterval(function (){
    let now = new Date().getTime();
    let distance = countdownDate - now;
    // console.log(distance);

    let days = Math.floor(distance/(1000 * 60 * 60 * 24))
    let hours = Math.floor((distance%(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(hours);

    if (distance > 0 ) {
        document.getElementById('days').innerHTML = englishBangla(days);
        document.getElementById('hours').innerHTML = englishBangla(hours);
        document.getElementById('minutes').innerHTML = englishBangla(minutes);
        document.getElementById('seconds').innerHTML = englishBangla(seconds);

    }else{
        document.getElementById("days").innerHTML = englishBangla("০");
        document.getElementById("hours").innerHTML = englishBangla("০");
        document.getElementById("minutes").innerHTML = englishBangla("০");
        document.getElementById("seconds").innerHTML = englishBangla("০");
    }

    if(distance < 0 ){clearInterval(countInter);document.getElementById('count').innerHTML = "Expired";}
},1000)




const englishBangla = (digits) => {
    let banglaDigit = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯'
    }
    const amount = digits;
    var banglaNum = amount.toString().replace(/[0123456789]/g, (s) => {
        return banglaDigit[s]
    });
    return banglaNum;
}
englishBangla();



// var englishDigits = {
//     '০': '0',
//     '১': '1',
//     '২': '2',
//     '৩': '3',
//     '৪': '4',
//     '৫': '5',
//     '৬': '6',
//     '৭': '7',
//     '৮': '8',
//     '৯': '9'
// };
// var banglaDigits = {
//     '0': '০',
//     '1': '১',
//     '2': '২',
//     '3': '৩',
//     '4': '৪',
//     '5': '৫',
//     '6': '৬',
//     '7': '৭',
//     '8': '৮',
//     '9': '৯'
// };

// var amount = 9857;

// /* Converting English number to Devangari (js) */
// var amount_np = amount.toString().replace(/[0123456789]/g, function (s) {
//     return banglaDigits[s];
// });

// console.log(amount_np);




















