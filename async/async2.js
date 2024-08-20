async function getAllProducts() {
  try {
    spinner.classList.remove("d-none");
    let response = await fetch("https://fakestoreapi.com/products");
    let actualData = await response.json();
    display.innerHTML = "";
    actualData.forEach((product, i) => {
      const{image,title,description,price} = product
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

function productDetails(index) {
  const products = JSON.parse(localStorage.getItem("allProducts"));
  const selectedProduct = products[index];
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  window.location.href = "./async3.html";
}

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
