// використані методи

// querySelector()
// querySelectorAll()
// forEach(){ }
// addEventListener()
// mouseover
// classList.add()

// отримання доступу до елемент - контейнеру з зірками
const starRating = document.querySelector(".wrapper");

// отримання доступу до всіх елементів з зірками, масив
const stars = document.querySelectorAll(".star");

// перевіряємо циклом елементи масиву на подію mouseover
stars.forEach((star, i) => {
  // контроль події
  star.addEventListener("mouseover", function () {
    // очищення списку класів стилів контейнера
    starRating.classList = "";

    // додавання основного класу
    starRating.classList.add("wrapper");

    // додавання класу, що визначає, скільки зірок стилізується як заповнені
    starRating.classList.add(`mark-${i + 1}`);
  });
});
