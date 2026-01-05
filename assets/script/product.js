const products = [{
    id: 1,
    name: "The Complete Illustrated Book of Herbs",
    image: "./assets/images/book1.webp",
    price: 5060,
    product: "books",
}, {
    id: 2,
    name: "Encyclopediaopedia of Aquarium Plants",
    image: "./assets/images/book2.webp",
    price: 3799,
    product: "books",
}, {
    id: 3,
    name: "The Pumpkin Spice Cafe Coloring Book",
    image: "./assets/images/book3.webp",
    price: 499,
    product: "books",
}, {
    id: 4,
    name: "How to Control Expenses Mony",
    image: "./assets/images/book4.webp",
    price: 300,
    product: "books",
}, {
    id: 5,
    name: "Ipsit 3D Butterfly Gold Pack of 12 ",
    image: "./assets/images/home-decore1.webp",
    price: 93,
    product: "wall hanging",
}, {
    id: 6,
    name: "SMCOLLECTION Shelf  (Brown)",
    image: "./assets/images/home-decore2.webp",
    price: 250,
    product: "wall hanging",
}, {
    id: 7,
    name: "GULLAK Macrame Wall Hanging Shelf",
    image: "./assets/images/home-decore3.webp",
    price: 100,
    product: "wall hanging",
}, {
    id: 8,
    name: " BUDDHA Wall Hanging Shelf Decore",
    image: "./assets/images/home-decore4.webp",
    price: 89,
    product: "wall hanging",
}, {
    id: 9,
    name: "Diva looks",
    image: "./assets/images/women-heel1.webp",
    price: 871,
    product: "women heels",
}, {
    id: 10,
    name: "GLEMATOZ",
    image: "./assets/images/women-heel2.webp",
    price: 999,
    product: "women heels",
}, {
    id: 11,
    name: "PLANET WALK ",
    image: "./assets/images/women-heel3.webp",
    price: 750,
    product: "women heels",
}, {
    id: 12,
    name: "RAVIS ",
    image: "./assets/images/women-heel4.webp",
    price: 1240,
    product: "women heels",
}];
const productLists = document.getElementById("productList")
products.forEach((product) => {
    productLists.innerHTML += `<div class="col-lg-3 mb-4">
    <div class="card shadow border-warning">
    <img src="${product.image}" class="card-img-top">
        <div class="card-body">
            <h5>${product.name}</h5>
            <p>💰${product.price}</p>
            <p>${product.product}</p>
            <button class="btn btn-danger me-2" onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
            <button class="btn  btn-warning" onclick="likeProduct()">❤️</button>
        </div>
    </div>
</div>`
})

// function addToCart(price) {
//     totalPrice += price;
//     document.getElementById("addToCart").innerHTML = totalPrice;
// }

// function removeFromCart(price) {
//     if (totalPrice >= price) {
//         totalPrice -= price;
//     }
//     document.getElementById("addToCart").innerHTML = totalPrice;
// }



function searchFun(event) {
    event.preventDefault();
    var seacrh_input = document.getElementById("search-input").value;


    var data = products.filter((value) => value.product.includes(seacrh_input));


    var get_data = document.getElementById("search-fetch")
    data.map((value) => (get_data.innerHTML += `<div class="col-lg-3 mb-4">
    <div class="card shadow border-warning">
    <img src="${value.image}" class="card-img-top">
        <div class="card-body">
            <h5>${value.name}</h5>
            <p>💰${value.price}</p>
            <p>${value.product}</p>
            <button class="btn btn-danger  me-2" onclick="addToCart(${value.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
            <button class="btn btn-warning" onclick="likeProduct()">❤️</button>
        </div>
    </div>
</div>`))
}
var likeCount = 0

function likeProduct() {
    likeCount++;
    document.getElementById("likebtn").innerHTML = likeCount;
}

function goToHome(e) {
    e.preventDefault();
    window.location.href = "./home.html"
}
var addCart = 0;
var totalPrice = 0;
var cartlist = [];

function addToCart(productId) {
    var cartdata = products.find((value) => value.id == productId);
    var existing = cartlist.find((value) => value.id == productId);
    addCart++;
    document.getElementById("addCart").innerHTML = addCart;
    if (existing) {
        cartdata.quantity++;
        alert("product quantity increase");

    } else {
        cartdata.quantity = 1
        cartlist.push(cartdata);
        alert("product added in cart list");

    }


    cart(cartlist);
    totalPrice = totalPrice + cartdata.price

    document.getElementById("total").innerHTML = totalPrice
}

function cart(product_data) {
    var data = "";
    product_data.map(
        (value) =>
        (data += `  
      <tr>
          <td><img src="${value.image}" height="200px" width="200px"/></td>
          <td class="fs-">${value.name}</td>
          <td>${value.price}</td>
          <td>${value.quantity}</td>
          <td><button class="btn btn-danger" onclick="removeCart(${value.id})">Remove</button></td>
        </tr>`)
    );
    document.getElementById("cart-body").innerHTML = data;
}

function removeCart(productId) {
    var remove_data = cartlist.find((value) => value.id == productId)
    addCart--
    document.getElementById("addCart").innerHTML = addCart
    if (remove_data.quantity > 1) {
        remove_data.quantity--
    } else {
        cartlist = cartlist.filter((value) => value.id != productId)
    }
    cart(cartlist);
    totalPrice = totalPrice - remove_data.price

    document.getElementById("total").innerHTML = totalPrice
}