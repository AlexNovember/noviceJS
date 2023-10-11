// const parent = document.querySelector('div');
// const firstChild = parent.children[0];
// console.log(firstChild);

// const link = document.querySelector('.www');
// console.log(link);

// const link = document.querySelector('.link');
// .href = 'https://developer.mozilla.org/ru/';
// link.href = 'https://developer.mozilla.org/ru/';
// console.log(link);

// const body = document.querySelector('body');
// const content = document.querySelector('.content');
// const text = document.createElement('p');
// const button = document.createElement('button');
// text.textContent = "Новый текстовый элемент";
// document.body.append(text);
// document.body.append(button);
// button.textContent = 'click';
// // content.appendChild(text);

// const clone = text.cloneNode(true);
// content.appendChild(clone);
// content.removeChild(clone);
// button.onclick = function name(params) {
//     button.textContent = 'Send';
//     console.log('click');
// }

const box = document.querySelector('.box');
const h2 = document.createElement('h2');
h2.textContent = '4444444';
// const h2Clone = h2.cloneNode(true);
// box.append(h2);
// box.prepend(h2)
// box.before(h2);
// box.after(h2);
// box.replaceWith('fgfdgfdgdgfd');

// box.append(h2Clone);
// box.remove(h2); // или removeChild

console.log(box.classList);
box.classList = 'box4';
console.log(box.classList);
box.classList.add('aaa');
console.log(box.classList);
box.classList.remove('aaa');
console.log(box.classList);
box.classList.toggle('aaa');
console.log(box.classList);
console.log(box.classList.contains('aaa'));
box.classList.replace('box4', 'box6');
console.log(box.classList);
console.log(box.id);
box.id = 'ident';
console.log(box.id);
console.log(box.getAttribute('data-lang'));;
console.log(box.getAttribute('class'));;
box.setAttribute('data-lang', 'english');
console.log(box.getAttribute('data-lang'));;
console.log(box.attributes);
console.log(box.dataset);
box.dataset.lang = 'german';
console.log(box.dataset);
box.dataset.type = 'type';
console.log(box.dataset);
delete box.dataset.type;
console.log(box.dataset);
console.log(box.style); // только инлайн стили, не из файла css
box.style.marginTop = '50px';
box.style.color = 'blue';

// const btn = document.querySelector('.tt');

// const b = '<h3>tttt</h3>'
// console.log(btn);
// btn.insertAdjacentHTML('afterend', b);
// btn.insertAdjacentElement('afterbegin', h2);