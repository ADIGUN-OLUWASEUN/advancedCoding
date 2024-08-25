// window.onload = function () {
//   displayAllCart();
// };

// function displayAllCart() {
//   const displayCart = document.getElementById("displayCart");
//   let quantity = document.getElementById("quantity");
//   let amount = document.getElementById("amount");
//   let clearCart = document.getElementById('clearCart');
  

//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

 
  
  


//   quantity.textContent =
//     `Number of items to be bought are : ${cartProduct.length}`.toUpperCase();

//   // let totalAmount = 0;

// //   let checkItem = cartProduct.filter((elem)=>{
// //     return `${elem.image}${elem.title}${elem.description}`.includes(selectedItem)
// // })

  
//   displayCart.innerHTML = "";

//   if (cartProduct.length > 0) {
//     cartProduct.forEach((prod, i) => {
//       const { image, title, description, price } = prod;

//       // totalAmount += +price;
//       let totalAmount = cartProduct.reduce((acc, curr)=>{
//         return acc + curr.price
//       },0)
//       amount.textContent = `TOTAL AMOUNT : $${totalAmount}`;

//       displayCart.innerHTML += `
//           <div class="card carding">
//               <img class="card-img-top img1" src="${image}" alt="Product image">
//               <div class="card-body carding-body">
//                   <h5 class="card-title carding-title">${title}</h5>
//                   <p class="card-text carding-text">${description.slice(
//                     0,
//                     100
//                   )}</p>
//                   <p class="card-text carding-price">$${price}</p>
//                   <button onclick="deleteItem(${i})">DELETE</button>
//                   <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>

//               </div>
//           </div>
//           `;
//     });
//   } else {
//     amount.textContent = `TOTAL AMOUNT : $0`;
//     quantity.textContent = "NO ITEMS IN CART";
//     clearCart.style.display = 'none'
//   }
// }

// function deleteItem(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];
//   cartProduct.splice(i, 1);
//   localStorage.setItem("cartArray", JSON.stringify(cartProduct));
//   displayAllCart();
// }

// function productDetails(i) {
//   const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

//   const selectedCartProduct = cartProduct[i];
//   console.log(selectedCartProduct);

//   localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
//   window.location.href = "./async3.html";
// }

// function clearCart(){
//   localStorage.removeItem("cartArray");
//   displayAllCart()
// }





window.onload = function () {
  displayAllCart();
};

function displayAllCart() {
  const displayCart = document.getElementById("displayCart");
  let quantity = document.getElementById("quantity");
  let amount = document.getElementById("amount");
  let clearCart = document.getElementById('clearCart');

  // Retrieve the cart from localStorage and group by product title
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

  // Group products by title and sum their quantities
  const groupedProducts = [];
  cartProduct.forEach(product => {
    const found = groupedProducts.find(item => item.title === product.title);
    if (found) {
      found.quantity += 1;
    } else {
      groupedProducts.push({ ...product, quantity: 1 });
    }
  });

  // Update quantity and total amount
  const totalItems = groupedProducts.reduce((sum, item) => sum + item.quantity, 0);
  quantity.textContent = `Number of items to be bought: ${totalItems}`.toUpperCase();

  const totalAmount = groupedProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  amount.textContent = `TOTAL AMOUNT: $${totalAmount.toFixed(2)}`;

  displayCart.innerHTML = "";

  if (groupedProducts.length > 0) {
    groupedProducts.forEach((prod, i) => {
      const { image, title, description, price, quantity } = prod;

      displayCart.innerHTML += `
          <div class="card carding">
              <img class="card-img-top img1" src="${image}" alt="Product image">
              <div class="card-body carding-body">
                  <h5 class="card-title carding-title">${title}</h5>
                  <p class="card-text carding-text">${description.slice(0, 100)}</p>
                  <p class="card-text carding-price">$${price} x ${quantity} = $${price * quantity}</p>
                  <button onclick="deleteItem(${i})">DELETE</button>
                  <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
              </div>
          </div>
      `;
    });
  } else {
    amount.textContent = `TOTAL AMOUNT: $0`;
    quantity.textContent = "NO ITEMS IN CART";
    clearCart.style.display = 'none';
  }
}

function deleteItem(i) {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

  // Group products by title and sum their quantities
  const groupedProducts = [];
  cartProduct.forEach(product => {
    const found = groupedProducts.find(item => item.title === product.title);
    if (found) {
      found.quantity += 1;
    } else {
      groupedProducts.push({ ...product, quantity: 1 });
    }
  });

  // Remove the item at index i
  groupedProducts.splice(i, 1);

  // Reconstruct the cart array with the remaining items
  const newCart = [];
  groupedProducts.forEach(product => {
    for (let j = 0; j < product.quantity; j++) {
      newCart.push({ title: product.title, image: product.image, description: product.description, price: product.price });
    }
  });

  localStorage.setItem("cartArray", JSON.stringify(newCart));
  displayAllCart();
}

function productDetails(i) {
  const cartProduct = JSON.parse(localStorage.getItem("cartArray")) || [];

  // Group products by title and sum their quantities
  const groupedProducts = [];
  cartProduct.forEach(product => {
    const found = groupedProducts.find(item => item.title === product.title);
    if (found) {
      found.quantity += 1;
    } else {
      groupedProducts.push({ ...product, quantity: 1 });
    }
  });

  const selectedCartProduct = groupedProducts[i];
  console.log(selectedCartProduct);

  localStorage.setItem("selectedProduct", JSON.stringify(selectedCartProduct));
  window.location.href = "./async3.html";
}

function clearCart() {
  localStorage.removeItem("cartArray");
  displayAllCart();
}

