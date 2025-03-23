const dialog = document.getElementById("myDialog");
const showBtn = document.getElementById("showDialog");
const closeBtn = document.getElementById("closeDialog");

showBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());
