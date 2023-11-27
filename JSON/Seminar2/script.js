'use strict';

const data = JSON.parse(dataProducts);
console.log(data[0].name);

// console.log(data.name[0].value);

const itemNames = document.querySelectorAll('.goods_in_cart-left-block-item-name');

// const i = 0;

itemNames.forEach(element => {
    console.log(element);
    // i++;
    // element.textContent = data[i].name;

    // data.forEach(data => {
    //     console.log(data.name);
    //     element.textContent = data.name;
    // });

    // console.log(itemName.textContent);


    // contentElm.firstChild.textContent = data.name
    // console.log(data[0].name);
});


// contentElm.nextSibling.textContent = data.name.value;

// textElm.textContent = data.cards[1].value;