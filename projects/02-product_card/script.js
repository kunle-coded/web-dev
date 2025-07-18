"use strict";

// Elements
const likeBtn = document.querySelector(".like--button");
const addCartBtn = document.querySelector(".btn");
const btnIcon = document.querySelector(".btn--icon");
const cartCntEl = document.querySelector(".display");
const productDetails = document.querySelector(".desc__container");
const cartEl = document.querySelector(".cart--item");
const cartLength = document.getElementById("cart--qty");
const itemQty = document.getElementById("qty");
const itemColor = document.getElementById("color");
const colorPicker = document.querySelector(".color_label");
const priceEl = document.getElementById("price");

// Variables
const cart = [];
const productName = productDetails.children[0].textContent;
const itemName = cartEl.children[1].textContent;
const cartItemImg = cartEl.children[0];

// Function

// Events
likeBtn.addEventListener("click", function () {
  likeBtn.classList.toggle("liked");
});

addCartBtn.addEventListener("click", function () {
  const newItem = {
    id: cart.length,
    name: productName,
  };

  cart.push(newItem);
  cartEl.children[1].textContent = cart[0].name;

  cartLength.textContent = itemQty.value;

  if (cart.length >= 1) {
    cartCntEl.classList.remove("hidden");
  }
});

itemQty.addEventListener("change", function (e) {
  cartLength.textContent = e.target.value;
  const price = Number(priceEl.textContent.split("$")[1]);
  priceEl.textContent = price * Number(e.target.value);
});

itemColor.addEventListener("change", function () {
  const selectedOption = itemColor.options[itemColor.selectedIndex];
  colorPicker.style.backgroundColor = selectedOption.value;
  cartItemImg.style.borderColor = selectedOption.value;
});
