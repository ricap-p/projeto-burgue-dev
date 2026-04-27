const list = document.querySelector(".products-container");


const buttonShowAll = document.getElementById("forEach");
const buttonFilter = document.getElementById("filter");
const buttonMap = document.getElementById("Map");
const buttonReduce = document.getElementById("reduce");

function showProducts(array) {
    list.innerHTML = "";

    array.forEach(product => {
        list.innerHTML += `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Ingrediente:</strong> ${product.description}</p>
                <p>${product.vegan ? "🌱 Vegano" : "🍔 Tradicional"}</p>
                <p>R$ ${product.price.toFixed(2)}</p>
            </li>
        `;
    });
}

buttonShowAll.addEventListener("click", () => {
  showProducts(menuOptions);
});

buttonFilter.addEventListener("click", () => {
  const veganProducts = menuOptions.filter(product => product.vegan);
  showProducts(veganProducts);
});

buttonMap.addEventListener("click", () => {
  const productsWithDiscount = menuOptions.map(product => ({
    ...product,
    price: product.price * 0.9
  }));

  showProducts(productsWithDiscount);
});

buttonReduce.addEventListener("click", () => {
  const total = menuOptions.reduce((acc, product) => acc + product.price, 0);

  list.innerHTML = `
    <li>
      <h3>Valor total dos produtos</h3>
      <p>R$ ${total.toFixed(2)}</p>
    </li>
  `;
}); 
