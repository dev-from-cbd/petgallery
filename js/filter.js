var items = document.getElementsByName("item");
var selectedItem = document.getElementById("selected-item");
var dropdown = document.getElementById("dropdown");

items.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.checked) {
      selectedItem.innerHTML = item.value;
      dropdown.open = false;
    }
  });
});
