const cons = document.getElementById('console');
const oldConsoleLog = console.log; // сохраняем оригинальную функцию

// обертка над стандартной консолью
console.log = function (...args) {
    cons.innerHTML +=
        args.map((e) => JSON.stringify(e, null, 2)).join(' ') + '\n';
    oldConsoleLog(...args); // вывод в браузерную консоль
};

// делегирование слушателя
let buttonSpace = document.getElementById('buttonSpace');
buttonSpace.addEventListener('click', (event) => loadScript(event.target));

//функиця загрузки и чистки сценаиев
function loadScript(button) {
    cons.innerHTML = '';
    console.clear;
    if (button.tagName !== 'BUTTON') {
    }
    let scriptToRemove = document.getElementById('loaded');
    // if (scriptToRemove !== null) {
    //     scriptToRemove.parentNode.removeChild(scriptToRemove);
    // }
    let script = document.createElement('script');
    script.setAttribute('src', `${button.classList}.js`);
    script.setAttribute('id', 'loaded');
    document.body.appendChild(script);
    console.log(`загружен сценарий №${button.classList}`);
}