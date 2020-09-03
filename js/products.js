function getProducts() {
    return fetch("./data.json")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    return data.products;
    });
}


function showProducts() {
    getProducts()
    .then(function(products) {
    let productTemplate = window.productDetails;
    let productView = document.querySelector(".products");
 
    products.forEach(function(product) {
    let clone = productTemplate.content.cloneNode(true);
    let title = clone.querySelector(".productTitle");
    let description = clone.querySelector(".productDescription");
    let price = clone.querySelector(".productPrice");
    let img = clone.querySelector(".productImage");
 
    title.innerText = product.name;
    description.innerText = product.desc;
    price.innerText = product.price;
    img.src = product.image[0];
 
    productView.appendChild(clone);
    });
    });
    }

export { getProducts, showProducts };