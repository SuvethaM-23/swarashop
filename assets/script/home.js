function goToShop(e) {
    e.preventDefault();
    window.location.href = "./product.html"
}
document.getElementById("welcome").innerText =
    "Welcome " + localStorage.getItem("username");

function home1(e) {
    e.preventDefault();
    window.location.href = "./mat.html"
}

function home2(e) {
    e.preventDefault();
    window.location.href = "./sofa.html"
}

function home3(e) {
    e.preventDefault();
    window.location.href = "./chair.html"
}

function home4(e) {
    e.preventDefault();
    window.location.href = "./bed.html"
}

function home5(e) {
    e.preventDefault();
    window.location.href = "./men.html"
}

function home6(e) {
    e.preventDefault();
    window.location.href = "./shoes.html"
}

function home7(e) {
    e.preventDefault();
    window.location.href = "./lipstick.html"
}

function home8(e) {
    e.preventDefault();
    window.location.href = "./watche.html"
}

function home9(e) {
    e.preventDefault();
    window.location.href = "./jcb.html"
}

function home10(e) {
    e.preventDefault();
    window.location.href = "./rabit.html"
}

function home11(e) {
    e.preventDefault();
    window.location.href = "./cat.html"
}

function home12(e) {
    e.preventDefault();
    window.location.href = "/monkey.html"
}
const products = [{
    id: 1,
    name: "Mattresses",
    image: "./assets/images/ mattresse.png ",
    price: 2999,
}, {
    id: 2,
    name: "Sofa",
    image: "./assets/images/sofa.jpeg",
    price: 7890

}, {
    id: 3,
    name: "Office Study Chairs",
    image: "./assets/images/chair.png",
    price: 1899,

}, {
    id: 4,
    name: "Beds",
    image: "./assets/images/bed.jpeg",
    price: 1598,

}, {
    id: 5,
    name: "Men's Jackets",
    image: "./assets/images/hoode.jpg",
    price: 549,

}, {
    id: 6,
    name: "Men's Shoes",
    image: "./assets/images/shoe.jpg ",
    price: 999,
}, {
    id: 7,
    name: "Lipstick",
    image: "./assets/images/lipstick.png",
    price: 299,
}, {
    id: 8,
    name: "Men's Watche",
    image: "./assets/images/watch.png",
    price: 1599,
}, {
    id: 9,
    name: "JCB Toys",
    image: "./assets/images/jcb.jpg",
    price: 134,
}, {
    id: 10,
    name: "Rabbit Toys",
    image: "./assets/images/rabbit.png",
    price: 300,
}, {
    id: 11,
    name: "Talking Cat",
    image: "./assets/images/cat.png",
    price: 657,
}, {
    id: 12,
    name: "Monkey Musical Toys",
    image: "./assets/images/monkey-musical.webp ",
    price: 219,
}];
var likeCount = 0

function likeProduct() {
    likeCount++;
    document.getElementById("likebtn").innerHTML = likeCount;
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
    } else {
        cartdata.quantity = 1
        cartlist.push(cartdata);

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