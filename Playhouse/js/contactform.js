"use strict";

const submitBtn = document.querySelector("#submit");
const contactEmail = document.querySelector("#contact-email");
const contactFirstName = document.querySelector("#contact-FName");
const contactLastName = document.querySelector("#contact-LName");
const contactMobileNumber = document.querySelector("#contact-mobile");
const contactMessage = document.querySelector("#contact-message");

submitBtn.addEventListener("click", (e) => {
  if (contactEmail.value.match(validRegex)) {
    e.preventDefault();
    window.location.href = "../thankyou.html";
  } else {
    contactEmail.focus();
  }
});
