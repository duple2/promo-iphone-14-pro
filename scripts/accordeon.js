const accordeonFunc = () => { /* создаем функцию  */
  const chItems = document.querySelectorAll(".characteristics__item"); /* указываем с каким файлом будем работать */
  chItems.forEach((item) => {  
    const chButton = item.querySelector(".characteristics__title"); /* указываем с какими данными работаем */
    const chContent = item.querySelector(".characteristics__description");

    chButton.addEventListener("click", () => { /* указываем обработчик событий вешаем клик взаимодействие */
      if (chContent.classList.contains("open")) {  /* вешаем открытие  */
        chContent.style.height = ""; /* прописываем стиль высоты пустой */ /*в стилях прописана высота */
      } else {
        chContent.style.height = chContent.scrollHeight + "px"; /* высота опред от элементов */
      }

      chButton.classList.toggle("active"); /* вешаем кнопки  */
      chContent.classList.toggle("open");
    });
  });
};

accordeonFunc(); /* замыкаем функцию */
