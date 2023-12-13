'use strict';






if ('geolocation' in navigator) {
    console.log('Навигация доступна');
} else {
    console.log('Навигация недоступна');
}

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { latitude, longitude } = position.coords
    console.log(`Географические координаты устройства
широта: ${latitude} 
долгота: ${longitude}`)
})

const a = document.querySelector('div');
const b = a.querySelectorAll('a')

a.addEventListener('click', f1);

function f1(event) {
    event.preventDefault();
    console.log(event.target);
    b.forEach(item => {
        console.log(item.target.tagName);
    });
}

// let watchId = navigator.geolocation.watchPosition(({ coords }) => { console.log('Устройство обновило местоположение', coords.latitude, coords.longitude) })

// navigator.geolocation.clearWatch(watchId)


// const handlePositionSuccess = ({ coords }) => {
//     console.log('Устройство обновило местоположение', coords.latitude, coords.longitude)
// }
// const handlePositionError = (error) => {
//     console.log('Извините, местоположение недоступно', error)
// }
// const positionOptions = {
//     enableHighAccuracy: true,
//     maximumAge: 30000,
//     timeout: 1000 * 30,
// }

// const watchId = navigator.geolocation.watchPosition(
//     // handleSuccessLocation,
//     // handleLocationError,
//     console.log(positionOptions));


// const handlePositionError = (error) => {
//     switch (error.code) {
//         case 1: console.log('Пользователь ограничил доступ кместоположению')
//             break
//         case 2: console.log('Ошибка устройства определения местоположения')
//             break
//         case 3: console.log('Достигнут тайм-аут')
//             break
//         default: console.log('Извините, местоположение недоступно', error)
//             break
//     }
// }


// const box = document.querySelector('#box')
// console.log(box.scrollTop, box.scrollLeft) // Устанавливаем количество прокрученных пикселей box.scrollTop =500

// window.scrollTo(0, 1000) // Этот код меняет поведение прокрутки на
// // smooth
// window.scrollTo({ top: 1000, behavior: 'smooth', })

