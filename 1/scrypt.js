const item = document.querySelector('.test_button');
// console.log(item);


item.addEventListener("click", () => {
    item.classList.add("active");
    setTimeout(function () {
        item.classList.remove('active'); // Удаляем класс .click через -ms
    }, 2000);
});


item2.addEventListener("mouseenter", () => {
    item2.classList.add("active2");
    setTimeout(function () {
        item2.classList.remove('active2');
    }, 8000);
});









// item.addEventListener('click', function (event) {
//     console.log(event.target);
//     console.log('Произошло событие', event.type)
// })

