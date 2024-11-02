// cart Tab
let cartIcon = document.querySelector(".cart-icon i");
let cartTab = document.querySelector(".cart-tab");
let closeBtn = document.querySelector(".close");

function showCart() {
  cartTab.classList.toggle("showcart");
  console.log("done");
}
function closeCart() {
  cartTab.classList.remove("showcart");
}
cartIcon.addEventListener("click", showCart);
closeBtn.addEventListener("click", closeCart);
// -------------------------------------------
let cart = [];

// ------------------------------------------------
// Add event listener to color radio inputs
// ------------------------------------------------
const colorRadios = document.querySelectorAll(
  '.color-name input[type="radio"]'
);
const colorCircles = document.querySelectorAll(".color-name .circle");

colorRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    colorCircles.forEach((circle) => {
      circle.style.border = "";
    });
    const selectedCircle = radio
      .closest(".color-name")
      .querySelector(".circle");
    selectedCircle.style.border = "2px solid red";
  });
});

// ------------------------------------------------
// Function to add item to cart
// ------------------------------------------------
function addToCart() {
  // Get selected bike properties
  const checkedRadio = document.querySelector(
    ".color-dots input[type='radio']:checked"
  );
  const color = checkedRadio
    ? checkedRadio.nextElementSibling.textContent.charAt(0).toUpperCase() +
      checkedRadio.nextElementSibling.textContent.slice(1).toLowerCase()
    : null;

  const size =
    document.querySelector(".size input:checked").id.charAt(0).toUpperCase() +
    document.querySelector(".size input:checked").id.slice(1).toLowerCase();
  const price = document.getElementById("price").value;
  const weight = document.getElementById("weight").value;

  // Create cart item object
  const cartItem = {
    color,
    size,
    price,
    weight,
  };

  // Add item to cart array
  cart.push(cartItem);

  // Update cart count
  let cartNotification = document.querySelector(".cart-num");
  cartNotification.textContent = cart.length;

  // Update cart tab content
  updateCartTab();
  alert("Cart Item add successfully");
}

// Function to update cart tab content
function updateCartTab() {
  const cartTab = document.querySelector(".cart-tab");
  const itemList = document.querySelector(".item-list");

  // Clear existing items
  itemList.innerHTML = "";

  // Loop through cart array and add items to cart tab
  cart.forEach((item, index) => {
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("cart-product");

    const cartImg = document.createElement("div");
    cartImg.classList.add("cart-img");
    cartImg.innerHTML = `<img src="./images/bike blue.png" />`;

    const itemData = document.createElement("div");
    itemData.classList.add("item-data");

    const listCart = document.createElement("div");
    listCart.classList.add("list-cart");

    listCart.innerHTML = `
      <div class="cart-color">Color: ${item.color}</div>
      <div class="cart-price">Price: ${item.price}</div>
      <div class="cart-size">Size: ${item.size}</div>
      <div class="cart-weight">Weight: ${item.weight}</div>
    `;

    itemData.appendChild(listCart);
    cartProduct.appendChild(cartImg);
    cartProduct.appendChild(itemData);
    itemList.appendChild(cartProduct);
  });
}

// Add event listener to labels to select  radio input
const colorLabels = document.querySelectorAll(".color-name label");
colorLabels.forEach((label) => {
  label.addEventListener("click", () => {
    const radioInput = label.querySelectorAll("input");
    radioInput.forEach((e) => {
      e.checked = true;
    });
    // radioInput.checked = true;
  });
});

const sizeLabels = document.querySelectorAll(".size label");
sizeLabels.forEach((label) => {
  label.addEventListener("click", () => {
    const radioInput = label.querySelectorAll("input");
    radioInput.forEach((e) => {
      e.checked = true;
    });
  });
});

// Add event listener to "Add to Cart" button
let addtoCartBTn = document.querySelector(".addtocart");
addtoCartBTn.addEventListener("click", addToCart);
