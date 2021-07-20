// Responsive navbar function //

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements // 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const submitFormOk = document.querySelector(".btn-submit");
const firstNameOk = document.getElementById('first').value;
const lastNameOk = document.getElementById("last").value;
const emailOk = document.getElementById("email").value;
const birthdayOk = document.getElementById("birthdate");
const tournamentOk = document.getElementById("quantity");
const cityOk = document.getElementById("");
const regLetters = /^[a-zA-Z]+$/;
const regNumbers = /^[0-9]+$/;
const regmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regBirth = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
// const cityData = formData[5].document.getElementByTagName('input');
// console.log(cityData)


// Event listener // 
closeForm.addEventListener('click', closeModal);
submitFormOk.addEventListener('click', submitForm);


// launch modal event // 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form // 
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form //

function closeModal() {
  modalbg.style.display = "none";
}

// Submit form + check //
function formNotOK() {
  alert("verifiez les champs")
}

function checkFormOK() {



}

function highlightField(field, erreur) {
  if (erreur) {
    field.style.backgroundColor = "#fba";
  } else
    field.style.backgroundColor = "";
}

function checkLast(field) {
  console.log('go1')
  if (field.value.length < 2 || !regLetters.test(field.value)) {
    highlightField(field, true);
    return false;
  } else {
    highlightField(field, false);
    return true;
  }
}

function checkFirst(field) {
  if (field.value.length < 2 || !regLetters.test(field.value)) {
    highlightField(field, true);
    return false;
  } else {
    highlightField(field, false);
    return true;
  }
}

function checkBirthdate(field) {
  if (!regBirth.test(field.value)) {
    highlightField(field, true);
    return false;
  } else {
    highlightField(field, false);
    return true;
  }
}

function checkMail(field) {
  if (field.value.length < 2 || !regmail.test(field.value)) {
    highlightField(field, true);
    return false;
  } else {
    highlightField(field, false);
    return true
  }
}

function checkTournament(field) {
  if (field.value.length < 1 || field.value > 100 || !regNumbers.test(field.value)) {
    highlightField(field, true);
    return false;
  } else {
    highlightField(field, false);
    return true
  }
}

function checkCity() {

}

function submitForm(e) {
  e.preventDefault();
  if (checkFormOK() === true) {
    alert('prenom ok')
  }

}