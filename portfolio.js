const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("mouseover", () => {
    removeClass();

    item.classList.add("extended");
  });
});

//declaration of the removeClass function
function removeClass() {
  items.forEach(function (item) {
    item.classList.remove("extended");
  });
}