const choice = document.getElementById("choice");
const product_container = document.querySelector(".product-id-container");
const product = document.querySelector(".product");
const name_input = document.getElementById("name");
const number = document.getElementById("number");
const message = document.getElementById("message");
const working_ids = ["#1AB2", "#6AH2", "#8JA1", "#0KK2"];

const top_value = document.querySelector(".top");

function checkName() {
  const name_value = name_input.value.trim();
  const right_or_wrong = name_value.length >= 4 && !/\d/.test(name_value);
  correctOrWrong(name_input, right_or_wrong);
}
function checkNumber() {
  const phone_value = number.value.trim();
  const right_or_wrong = /^\d{3} \d{3} \d{4}$/.test(phone_value);
  applyValidationStyles(number, right_or_wrong);
}
function checkProductID() {
  if (product.style.display === "none") {
    return true;
  }
  const product_value = product.value.trim();
  const right_or_wrong = working_ids.includes(product_value);
  applyValidationStyles(product, right_or_wrong);
}
function checkMessage() {
  const message_value = message.value.trim();
  const right_or_wrong =
    message_value.length >= 10 && message_value.length <= 30;
  applyValidationStyles(message, right_or_wrong);
}
function correctOrWrong(element, truth_value) {
  if (truth_value) {
    element.style.borderColor = "green";
  } else {
    element.style.borderColor = "red";
  }
}

product_container.style.display = "none";
choice.addEventListener("change", function () {
  if (choice.value === "Product Info") {
    product_container.style.display = "inline-block";
  } else {
    product_container.style.display = "none";
  }
});

name_input.addEventListener("blur", checkName);
number.addEventListener("blur", checkNumber);
product.addEventListener("blur", checkProductID);
message.addEventListener("blur", checkMessage);

top_value.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

top_value.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

top_value.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const toptwo_value = document.querySelector("#top");
const about_value = document.querySelector(".about");
const product_value = document.querySelector(".product");
const contact_value = document.querySelector(".contact-us");
const reference_value = document.querySelector(".references");
const about_link = document.querySelector("#aboutlink");
const product_link = document.querySelector("#productslink");
const contact_link = document.querySelector("#contactlink");
const reference_link = document.querySelector("#referencelink");

toptwo_value.addEventListener("click", function (e) {
  window.scrollTo({
    behavior: "smooth",
  });
});

about_link.addEventListener("click", function (e) {
  e.preventDefault();
  about_value.scrollIntoView({
    behavior: "smooth",
  });
});

product_link.addEventListener("click", function (e) {
  product_value.scrollIntoView({
    behavior: "smooth",
  });
});

contact_link.addEventListener("click", function (e) {
  contact_value.scrollIntoView({
    behavior: "smooth",
  });
});

reference_link.addEventListener("click", function (e) {
  reference_value.scrollIntoView({
    behavior: "smooth",
  });
});

const parallax_img = $(".parallox");

jQuery(window).scroll(function () {
  if (parallax_img.visible(true)) {
    let parallox_animation =
      -200 + (jQuery(document).scrollTop() - parallax_img.offset().top) / 1.5;
    if ($(window).width() < 1224) {
      parallox_animation =
        0 + (jQuery(document).scrollTop() - parallax_img.offset().top) / 2;
    }
    parallox_animation += "px";
    parallax_img.css({ "background-position": "center " + parallox_animation });
  }
});

const day_message = {
  Monday: "Monday's Deal: Shoes.",
  Tuesday: "Tuesday's Deal: Boots.",
  Wednesday: "Wednesday's Deal: Slippers.",
  Thursday: "Thursday's Deal: Running Shoe.",
  Friday: "Friday's Deal: Basketball Shoes.",
  Saturday: "Saturday's Deal: Heels.",
  Sunday: "Sunday's Deal: Tennis Shoes.",
};

const array = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today_date = new Date();
let today_day_number = today_date.getDay();
let today_day_string = array[today_day_number];

const header = document.querySelector(".home-text");

header.innerHTML = day_message[today_day_string];

const dropdownBtn = document.querySelector(".profile-dropdown");
const dropdownList = document.querySelector(".profile-dropdown-list");

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent the event from propagating to the window
  dropdownList.classList.toggle("active"); // Toggle the 'active' class
});

// Add event listener for clicking outside the dropdown
window.addEventListener("click", function () {
  dropdownList.classList.remove("active"); // Remove the 'active' class
});
