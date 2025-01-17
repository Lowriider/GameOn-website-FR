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
const cityBtn = document.querySelectorAll('input[name="location"]');
const checkboxTOU = document.getElementById("checkbox1");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const birthdate = document.getElementById("birthdate");
const email = document.getElementById("email");
const tournament = document.getElementById('quantity');
const errorBlock = document.getElementsByClassName("formData__error");

// all var declared //
const regLetters = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
const regNumbers = /^[0-9]+$/;
const regmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regBirth = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
const cityData = formData[5];
const termOfUse = formData[6];
let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let birthdayOk = false;
let tournamentOk = false;
let cityBtnChecked;

// Event listener // 
closeForm.addEventListener('click', closeModal);
submitFormOk.addEventListener('click', submitForm);
cityData.addEventListener('mouseover', checkCity);


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

//alert form not OK //
function formNotOK() {
  alert("verifiez les champs en rouge")
}
// alert form is ok
function formOK() {
  alert("le formulaire a été transmis avec succès")
}

// fields error messages //
function errorMessages(field) {
  switch (field.getAttribute('id')) {
    case 'first': // Si field ID = first then display this text. //
      errorBlock[0].innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      break;
    case 'last':
      errorBlock[1].innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      break;
    case 'email':
      errorBlock[2].innerText = "Veuillez vérifier votre adresse email.";
      break;
    case 'birthdate':
      errorBlock[3].innerText = "Vous devez entrer votre date de naissance.";
      break;
    case 'quantity':
      errorBlock[4].innerText = "Veuillez mettre des nombres de 0 à 100";
      break;
  }
}
function errorMessagesReset(field) {
  switch (field.getAttribute('id')) {
    case 'first': // Si field ID = first then display this text. //
      errorBlock[0].innerText = "";
      break;
    case 'last':
      errorBlock[1].innerText = "";
      break;
    case 'email':
      errorBlock[2].innerText = "";
      break;
    case 'birthdate':
      errorBlock[3].innerText = "";
      break;
    case 'quantity':
      errorBlock[4].innerText = "";
      break;
  }
}

// surligne le champs invalide // 
function highlightField(field, erreur) {
  if (erreur) {
    field.style.backgroundColor = "#fba";
    errorMessages(field);
  } else
    field.style.backgroundColor = "";
    
    // errorMessagesReset(field);
}

// check first name field // 
function checkFirst(field) {
  if (field.value.length < 2 || !regLetters.test(field.value)) { // if this field length =
    highlightField(field, true);
  } else {
    highlightField(field, false);
    errorMessagesReset(field);
    firstNameOk = true;
  }
}

// check last name field //
function checkLast(field) {
  if (field.value.length < 2 || !regLetters.test(field.value)) {
    highlightField(field, true);
  } else {
    highlightField(field, false);
    errorMessagesReset(field);
    lastNameOk = true;
  }
}

// check birthdate //
function checkBirthdate(field) {
  if (!regBirth.test(field.value)) {
    highlightField(field, true);
  } else {
    highlightField(field, false);
    errorMessagesReset(field);
    birthdayOk = true;
  }
}

// check email //
function checkMail(field) {
  if (field.value.length < 2 || !regmail.test(field.value)) {
    highlightField(field, true);
  } else {
    highlightField(field, false);
    errorMessagesReset(field);
    emailOk = true;
  }
}

// check le champ question //
function checkTournament(field) {
  if (field.value.length < 1 || field.value > 100 || !regNumbers.test(field.value)) { // if length of field is sup or equal to 1 and 
    highlightField(field, true);
  } else {
    highlightField(field, false);
    errorMessagesReset(field);
    tournamentOk = true;
  }
}

// check le bouton radio coché //
function checkCity() {
  for (let i = 0; i < cityBtn.length; i++) {
    if (cityBtn[i].checked) { /* check all the boxes and return true if box is checked */
      cityBtnChecked = true;
    }
  }
  if (!cityBtnChecked) {
    errorBlock[5].innerText = "Veuillez cocher une ville";
    return false
  } 
  else {
    errorBlock[5].innerText = "";
    return true; // if var = true then function must return true //
  }
}

// check term of use //

function checkTermOfUse() {
  if (checkboxTOU.checked) { /* if box is checked then return true */
    return true;
  } else
    return false;
}

// check if fields are ok //

function checkAllFields() {
  if (firstNameOk && lastNameOk && emailOk && birthdayOk && tournamentOk && checkCity() && checkTermOfUse()) { // if functions or var = true all fields are OK so function return true //
    errorBlock[5].innerText = "";
    return true;
  }
  else {
    if (!firstNameOk) {
      firstName.style.backgroundColor = "#fba";
    }
    if (!lastNameOk) {
      lastName.style.backgroundColor = "#fba";
    }
    if (!emailOk) {
      email.style.backgroundColor = "#fba";
    }
    if (!birthdayOk) {
      birthdate.style.backgroundColor = "#fba";
    }
    if (!tournamentOk) {
      tournament.style.backgroundColor = "#fba";
    }
    if (!checkCity()) {
      errorBlock[5].innerText = "Veuillez cocher une ville";
    }
    return false;
  }
}
/* reset all var to false after submiting*/
function reset() {
  firstNameOk = false;
  lastNameOk = false;
  emailOk = false;
  birthdayOk = false;
  tournamentOk = false;
  cityBtnChecked = false;
}
// submit form + message //

function submitForm(e) {
  e.preventDefault(); // prevent default action of the button if the form is not filled with all the infos //
  checkCity();
  checkTermOfUse();
  checkAllFields();

  if (checkAllFields()) {
    formOK();
    closeModal();
    reset();
  } else if (!checkTermOfUse()) {
    alert("vous devez accepter les CGU avant d'envoyer le formulaire");
  } else {
    formNotOK();
  }
}

// mettre un paragraphe dans bloc erreur //