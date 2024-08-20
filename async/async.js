let all = document.getElementById('all');
let jewelry = document.getElementById('jewelry');
let electronics = document.getElementById('electronics');
let menCloth = document.getElementById('menCloth');
let womenCloth = document.getElementById('womenCloth');

// Fetch - for making network requests
//fetch('url')

//'GET' - default request of fetch
// fetch('https://fakestoreapi.com/products/') //fetching all products

// fetch('https://fakestoreapi.com/products/:id')
//Example:
// fetch('https://fakestoreapi.com/products/1') //fetching product by id

// fetch('https://fakestoreapi.com/products/category/:categoryName')
all.addEventListener('click', ()=>{
    fetch("https://fakestoreapi.com/products") //fetching products by category
  .then((res) => {
    console.log(res); //response from server
    res
      .json() //extracting data in json format
      .then((products) => {
        console.log(products); //data extracted
        display.innerHTML = ''
        products.forEach((product) => {
          //displaying data
          display.innerHTML += `
                <div class="card carding" style="width: 18rem;">
            <img class="card-img-top img1" src="${product.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                 <p class="card-text">$${product.price}</p>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            `;
        });
      });
  })
  .catch((err) => {
    //error
    console.log(err);
  });
})


jewelry.addEventListener('click', ()=>{
    fetch("https://fakestoreapi.com/products/category/jewelery") //fetching products by category
  .then((res) => {
    console.log(res); //response from server
    res
      .json() //extracting data in json format
      .then((products) => {
        console.log(products); //data extracted
        display.innerHTML = ''
        products.forEach((product) => {
          //displaying data
          display.innerHTML += `
                <div class="card carding" style="width: 18rem;">
            <img class="card-img-top img1" src="${product.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                 <p class="card-text">$${product.price}</p>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            `;
        });
      });
  })
  .catch((err) => {
    //error
    console.log(err);
  });
})


electronics.addEventListener('click', ()=>{
    fetch("https://fakestoreapi.com/products/category/electronics") //fetching products by category
  .then((res) => {
    console.log(res); //response from server
    res
      .json() //extracting data in json format
      .then((products) => {
        console.log(products); //data extracted
        display.innerHTML = ''
        products.forEach((product) => {
          //displaying data
          display.innerHTML += `
                <div class="card carding" style="width: 18rem;">
            <img class="card-img-top img1" src="${product.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                 <p class="card-text">$${product.price}</p>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            `;
        });
      });
  })
  .catch((err) => {
    //error
    console.log(err);
  });
})


menCloth.addEventListener('click', ()=>{
    fetch("https://fakestoreapi.com/products/category/men's clothing") //fetching products by category
  .then((res) => {
    console.log(res); //response from server
    res
      .json() //extracting data in json format
      .then((products) => {
        console.log(products); //data extracted
        products.forEach((product) => {
          //displaying data
          display.innerHTML += `
                <div class="card carding" style="width: 18rem;">
            <img class="card-img-top img1" src="${product.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                 <p class="card-text">$${product.price}</p>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            `;
        });
      });
  })
  .catch((err) => {
    //error
    console.log(err);
  });
})

womenCloth.addEventListener('click', ()=>{
    fetch("https://fakestoreapi.com/products/category/women's clothing") //fetching products by category
  .then((res) => {
    console.log(res); //response from server
    res
      .json() //extracting data in json format
      .then((products) => {
        console.log(products); //data extracted
        products.forEach((product) => {
          //displaying data
          display.innerHTML += `
                <div class="card carding" style="width: 18rem;">
            <img class="card-img-top img1" src="${product.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                 <p class="card-text">$${product.price}</p>

                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            `;
        });
      });
  })
  .catch((err) => {
    //error
    console.log(err);
  });
})

//Promise - is an object representation of the eventual completion or failure or an asynchronous operation

//3 states
//initial - pending
//fulfilled - completed
//rejected - failed
