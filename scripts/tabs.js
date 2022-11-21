const tabsFunc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsImage = document.querySelector(".card__image_item");

  const tabsOptions = [
    {
      name: "Gold",
      memory: "128GB",
      price: 119990,
      image: "img/iphone 14 white.webp",
    },
    {
      name: "Silver",
      memory: "256GB",
      price: 129990,
      image: "img/iphone 14 silver.webp",
    },
    {
      name: "Space Black",
      memory: "512GB",
      price: 154990,
      image: "img/iphone 14 black.webp",
    },
    {
      name: "Deep Purple",
      memory: "1TB",
      price: 171990,
      image: "img/iphone 14 purple.webp",
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 14 Pro ${tabsOptions[index].memory} ${tabsOptions[index].name}`;
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;

    tabsImage.setAttribute("src", tabsOptions[index].image);
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });

    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);
};

tabsFunc();
