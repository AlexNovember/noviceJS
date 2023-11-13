// const headerEl = document.getElementById("header")

// window.addEventListener("scroll", function () {
//   const scrollPos = window.scrollY

//   if (scrollPos > 100) {
//     headerEl.classList.add("header_mini")
//   } else {
//     headerEl.classList.remove("header_mini")
//   }
// })


const btn = document.querySelector('button')
let arr = [];

btn.addEventListener('click', () => {
  let textvalue = prompt('1');
  let namevalue = prompt('2');
  let famvalue = prompt('1');


  let obj = {
    name: textvalue,
    text: namevalue,
    age: famvalue
  }

  console.log(obj);
  arr.push(obj)
  console.log(arr);




  // for (let i = 0; i < arr.length; i++) {

  // }
});


