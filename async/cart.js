window.onload = function () {
  displayAllCart();
};

function displayAllCart() {
  const displayCart = document.getElementById("displayCart");
  let quantity = document.getElementById("quantity");
  let amount = document.getElementById("amount");
  let clearCart = document.getElementById("clearCart");

  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

  quantity.textContent =
    `Number of items to be bought are : ${cartProduct.length}`.toUpperCase();

  displayCart.innerHTML = "";

  if (cartProduct.length > 0) {
    cartProduct.forEach((prod, i) => {
      const { image, title, description, price } = prod;

      // totalAmount += +price;
      let totalAmount = cartProduct.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);
      amount.textContent = `TOTAL AMOUNT : $${totalAmount.toFixed(2)}`;

      displayCart.innerHTML += `
          <div class="card carding">
              <img class="card-img-top img1" src="${image}" alt="Product image">
              <div class="card-body carding-body">
                  <h5 class="card-title carding-title">${title}</h5>
                  <p class="card-text carding-text">${description.slice(
                    0,
                    100
                  )}</p>
                  <p class="card-text carding-price">$${price}</p>
                  <button onclick="deleteItem(${i})">DELETE</button>
                  <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>

              </div>
          </div>
          `;
    });
  } else {
    amount.textContent = `TOTAL AMOUNT : $0`;
    quantity.textContent = "NO ITEMS IN CART";
    clearCart.style.display = "none";
  }
}

function deleteItem(i) {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
  cartProduct.splice(i, 1);
  localStorage.setItem("cartArray", JSON.stringify(cartProduct));
  displayAllCart();
}

function productDetails(i) {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

  const selectedCartProduct = cartProduct[i];
  console.log(selectedCartProduct);

  localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
  window.location.href = "./async3.html";
}

function clearCart() {
  localStorage.removeItem("cartArray");
  displayAllCart();
}
