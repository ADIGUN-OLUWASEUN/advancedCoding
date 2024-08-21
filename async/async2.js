let all = document.getElementById("all");
let jewelry = document.getElementById("jewelry");
let electronics = document.getElementById("electronics");
let menCloth = document.getElementById("menCloth");
let womenCloth = document.getElementById("womenCloth");
let cartDisplay = document.getElementById('cartDisplay');
let cart = document.getElementById('cart');

async function getAllProducts() {
  try {
    spinner.classList.remove("d-none");
    let response = await fetch("https://fakestoreapi.com/products");
    let actualData = await response.json();
    display.innerHTML = "";
    actualData.forEach((product, i) => {
      const { image, title, description, price } = product;
      display.innerHTML += `
        <div class="card carding" style="width: 18rem;">
       <img class="card-img-top img1" src="${image}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description.slice(0, 100)}...</p>
         <p class="card-text">$${price}</p>
         <button onclick="addToCart(${i})">ADD TO CART</button>
         <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
    </div>
    </div>
    `;
    });
    localStorage.setItem("allProducts", JSON.stringify(actualData));
  } catch (error) {
    console.log(error);
  } finally {
    spinner.classList.add("d-none");
  }
}
getAllProducts();

all.addEventListener("click", () => {
  async function getAllProducts() {
    try {
      spinner.classList.remove("d-none");
      let response = await fetch("https://fakestoreapi.com/products");
      let actualData = await response.json();
      display.innerHTML = "";
      actualData.forEach((product, i) => {
        const { image, title, description, price } = product;
        display.innerHTML += `
          <div class="card carding" style="width: 18rem;">
         <img class="card-img-top img1" src="${image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description.slice(0, 100)}...</p>
           <p class="card-text">$${price}</p>
           <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
      </div>
      </div>
      `;
      });
      localStorage.setItem("allProducts", JSON.stringify(actualData));
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
  getAllProducts();
});

jewelry.addEventListener("click", () => {
  async function getAllProducts() {
    try {
      spinner.classList.remove("d-none");
      let response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      let actualData = await response.json();
      display.innerHTML = "";
      actualData.forEach((product, i) => {
        const { image, title, description, price } = product;
        display.innerHTML += `
          <div class="card carding" style="width: 18rem;">
         <img class="card-img-top img1" src="${image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description.slice(0, 100)}...</p>
           <p class="card-text">$${price}</p>
           <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
      </div>
      </div>
      `;
      });
      localStorage.setItem("allProducts", JSON.stringify(actualData));
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
  getAllProducts();
});

electronics.addEventListener("click", () => {
  async function getAllProducts() {
    try {
      spinner.classList.remove("d-none");
      let response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      let actualData = await response.json();
      display.innerHTML = "";
      actualData.forEach((product, i) => {
        const { image, title, description, price } = product;
        display.innerHTML += `
          <div class="card carding" style="width: 18rem;">
         <img class="card-img-top img1" src="${image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description.slice(0, 100)}...</p>
           <p class="card-text">$${price}</p>
           <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
      </div>
      </div>
      `;
      });
      localStorage.setItem("allProducts", JSON.stringify(actualData));
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
  getAllProducts();
});

menCloth.addEventListener("click", () => {
  async function getAllProducts() {
    try {
      spinner.classList.remove("d-none");
      let response = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      let actualData = await response.json();
      display.innerHTML = "";
      actualData.forEach((product, i) => {
        const { image, title, description, price } = product;
        display.innerHTML += `
          <div class="card carding" style="width: 18rem;">
         <img class="card-img-top img1" src="${image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description.slice(0, 100)}...</p>
           <p class="card-text">$${price}</p>
           <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
      </div>
      </div>
      `;
      });
      localStorage.setItem("allProducts", JSON.stringify(actualData));
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
  getAllProducts();
});

womenCloth.addEventListener("click", () => {
  async function getAllProducts() {
    try {
      spinner.classList.remove("d-none");
      let response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      let actualData = await response.json();
      display.innerHTML = "";
      actualData.forEach((product, i) => {
        const { image, title, description, price } = product;
        display.innerHTML += `
          <div class="card carding" style="width: 18rem;">
         <img class="card-img-top img1" src="${image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description.slice(0, 100)}...</p>
           <p class="card-text">$${price}</p>
           <a href="#" class="btn btn-primary" onclick="productDetails(${i})">CHECK DETAILS</a>
      </div>
      </div>
      `;
      });
      localStorage.setItem("allProducts", JSON.stringify(actualData));
    } catch (error) {
      console.log(error);
    } finally {
      spinner.classList.add("d-none");
    }
  }
  getAllProducts();
});

function productDetails(i) {
  const products = JSON.parse(localStorage.getItem("allProducts"));
  const selectedProduct = products[i];
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  window.location.href = "./async3.html";
}

function addToCart(i){
  let products = JSON.parse(localStorage.getItem("allProducts"));
  let selectedProduct = products[i];
  let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
 cartArray.push(selectedProduct)
 localStorage.setItem("cartArray", JSON.stringify(cartArray));

 cartDisplay.textContent = cartArray.length

}

cart.addEventListener('click', ()=>{
  window.location.href = "./cart.html";
})

//Data Destructuring

// let user = {
//   name:'ben',
//   age:10,
//   gender:'male',
//   address: {
//     city: 'ib',
//     state:'oyo'
//   }
// }

// const {name:username, age} = user //const username = user.name
// console.log(username);

// let arr = [1,2,3,4,5]
// const [a,b,,,c] = arr
// console.log(c);
// //const a = arr[0]
// //const b = arr[1]
// //const c = arr[4]
