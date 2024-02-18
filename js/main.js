const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

// Закрываем подсказки при клике по всей странице
document.addEventListener("click", function () {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

// запрещаем всплытие при клике на подсказки
for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}
