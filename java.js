function addToCart(){
    document.getElementById("mycart").innerHTML=
    "Abaya Elegante - $49";
}

let cart = {};

function updateCartCount() {
    let total = 0;

    for (let id in cart) {
        total += cart[id];
    }

    document.getElementById("cart-count").textContent = total;
}

function addToCart(id) {
    cart[id] = 1;
    renderControls(id);
    updateCartCount();
}

function increase(id) {
    cart[id]++;
    renderControls(id);
    updateCartCount();
}

function decrease(id) {
    cart[id]--;

    if (cart[id] <= 0) {
        delete cart[id];

        document.getElementById(`cart-controls-${id}`).innerHTML =
            `<button onclick="addToCart(${id})">Add to Cart</button>`;
    } else {
        renderControls(id);
    }

    updateCartCount();
}


let images = [
    "image12.jpeg",
  "image13.jpeg",
  "image15.jpeg"
];

let index = 0;

setInterval(() => {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  document.querySelector(".hero").style.backgroundImage =
    `url(${images[index]})`;

}, 3000);



document.querySelectorAll(".navbar-nav .nav-link, .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        const navbar = document.getElementById("navbarTogglerDemo02");
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
        bsCollapse.hide();
    });
});












