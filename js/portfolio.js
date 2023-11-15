// const items = document.querySelectorAll(".item");

// items.forEach(function (item) {
//   item.addEventListener("mouseover", () => {
//     removeClass();

//     item.classList.add("extended");
//   });
// });

// //declaration of the removeClass function
// function removeClass() {
//   items.forEach(function (item) {
//     item.classList.remove("extended");
//   });
// }

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})