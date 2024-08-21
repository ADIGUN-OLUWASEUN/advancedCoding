 window.onload = ()=>{
    const displayCart = document.getElementById('displayCart');
    const cartProduct = JSON.parse(localStorage.getItem('cartArray'));

    console.log(cartProduct);

 if(cartProduct){
    cartProduct.forEach((prod, i)=>{
        const{image,title,description,price} = prod;
        displayCart.innerHTML += `
        <div class="card carding" >
          <img class="card-img-top img1" src="${image}" alt="Product image">
          <div class="card-body carding-body">
            <h5 class="card-title carding-title">${title}</h5>
            <p class="card-text carding-text">${description}</p>
            <p class="card-text carding-price">$${price}</p>
          </div>
        </div>
      `;
    })
   
 } 
    
    
}