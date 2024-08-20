window.onload = ()=>{
  const displayDetails = document.getElementById('displayDetails');
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
    displayDetails.innerHTML = `
      <div class="card carding" >
        <img class="card-img-top img1" src="${product.image}" alt="Product image">
        <div class="card-body carding-body">
          <h5 class="card-title carding-title">${product.title}</h5>
          <p class="card-text carding-text">${product.description}</p>
          <p class="card-text carding-price">$${product.price}</p>
        </div>
      </div>
    `;
  } else {
    displayDetails.innerHTML = "<p>No product selected.</p>";
  }     
}


// // window.addEventListener('load', ()=>{
// //      displayDetails.innerHTML = `<p>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>`
// // })

// document.addEventListener("DOMContentLoaded", function() {
  
// });
