"use strict";
/* Navigation starts */
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

/* Navigation ends */

// Modal Container
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll("#nav-links-btn");
// Sign Up/In form control
const signupContent = document.querySelector(".signup-content");
const signupForm = document.querySelector(".signup-form");
const signupImageLink = document.querySelector(".signup-image-link");
const signinLink = document.querySelector(".signin-link");
const signup = document.querySelector("#signup");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const rePassInput = document.getElementById("re_pass");
const checkInput = document.getElementById("agree-term");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  function removeRegistered() {
    const registered = document.querySelector(".welcome");
    const registeredAccount = document.getElementById("registeredAccount");
    if (!registeredAccount.classList.contains("deactive")) {
      registered.classList.add("deactive");
    }
  }
  removeRegistered();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  signupForm.classList.remove("deactive");
  signupImageLink.classList.remove("deactive");
  signinLink.classList.add("deactive");
  signupContent.classList.remove("success-register");
  nameInput.value = "";
  emailInput.value = "";
  passInput.value = "";
  rePassInput.value = "";
  checkInput.checked = 0;
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const email = document.querySelector("#email");

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signup.addEventListener("click", (e) => {
  if (email.value.match(validRegex)) {
    e.preventDefault();
    // create our own html element
    const welcomeHead = document.createElement("h1");
    welcomeHead.className = "welcome";
    const node = document.createTextNode("Registered Successfully!");
    welcomeHead.appendChild(node);

    signupContent.appendChild(welcomeHead);

    signupContent.classList.add("success-register");

    signupForm.classList.add("deactive");
    signupImageLink.classList.add("deactive");
    signinLink.classList.remove("deactive");
  } else {
    email.focus();
  }
});
