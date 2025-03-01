let sectionYes = document.getElementById("section-yes");
let sectionNo = document.getElementById("section-no");
let theTurnaround = document.getElementById("theTurnaround");
let shipingform = document.getElementById("shipingform");
let orderInfo = document.getElementById("orderInfo");
let artwork = document.getElementById("artwork");
let submiltlist = document.getElementById("submiltlist");
let div = document.querySelector(".col");
// ======get input value=====

let formData = {
  fullname: "",
  email: "",
  companyName: "",
  phone: "",
  about: "",
  reOrder: "",
  invoiceNumber: "",
  garmentsType: "",
  color: "",
  size: "",
  quantity: "",
  garmentsList: "",
  lastOrder: "",
  isTurnaround: "",
  shipingname: "",
  reciptentCompany: "",
  shipingAddress: "",
  shipingSuite: "",
  shipingcity: "",
  shipingState: "",
  shipingZip: "",

  // name: document.getElementById("fullname").value.trim(),
  // email: document.getElementById("Email").value.trim(),
  // companyName: document.getElementById("CompanyName").value.trim(),
  // phone: document.getElementById("Phone").value.trim(),
  // about: document.getElementById("about").value.trim(),
  // gender: document.querySelector('input[name="gender"]:checked')
  //   ? document.querySelector('input[name="gender"]:checked').value
  //   : "",
};
let isValidate = false;
let showGarmentsbox = false;
let isValid = true;
let showTurnAround = false;

// ====handle input change====
function handleChange(event) {
  formData = {
    ...formData,
    [event.target.name]: event.target.value.trim(),
  };
  validateForm();

  // ==========showGarmentsbox========
  //  if(!formData.garmentsType || !formData.color || !formData.size || !formData.quantity){
  //   showGarmentsbox = false;
  // }else{
  //   showGarmentsbox=true
  // }
  // if(showGarmentsbox){
  //   document.getElementById("showGarmentsbox").classList.remove("hidden");
  //   document.getElementById("artwork").classList.remove("hidden");
  //   document.getElementById("artwork").classList.add("animateContainer");
  // }else{
  //   document.getElementById("showGarmentsbox").classList.add("hidden")
  // }
}

// =====form validation===
// =====form validation===
function validateForm() {
  // =====name error=====
  if (!formData.fullname) {
    document.getElementById("nameError").innerHTML =
      "Please fill in this field";
    document.getElementById("nameError").classList.remove("hidden");
  } else {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("nameError").classList.add("hidden");
  }
  // ======emailError==========
  if (!formData.email) {
    document.getElementById("emailError").innerHTML =
      "Please fill in this field";
    document.getElementById("emailError").classList.remove("hidden");
  } else {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("emailError").classList.add("hidden");
  }
  // ======PhoneError==========
  if (!formData.phone) {
    document.getElementById("PhoneError").innerHTML =
      "Please fill in this field";
    document.getElementById("PhoneError").classList.remove("hidden");
  } else {
    document.getElementById("PhoneError").innerHTML = "";
    document.getElementById("PhoneError").classList.add("hidden");
  }
  // ======aboutError==========
  if (!formData.about) {
    document.getElementById("aboutError").innerHTML =
      "Please fill in this field";
    document.getElementById("aboutError").classList.remove("hidden");
  } else {
    document.getElementById("aboutError").innerHTML = "";
    document.getElementById("aboutError").classList.add("hidden");
  }

  // ========check the validetion=======(first)
  if (
    !formData.fullname ||
    !formData.email ||
    !formData.phone ||
    !formData.about
  ) {
    isValid = false;
  } else {
    isValid = true;
  }
  // ======hide or show REORDER by addeding classlist=========
  if (isValid) {
    document.getElementById("reOrder").classList.remove("hidden");
    document.getElementById("reOrder").classList.add("animateContainer");
  }
  // =======invoice validate======
  if (formData.invoiceNumber.length > 5) {
    document.getElementById("lastOrder").classList.remove("hidden");
    document.getElementById("lastOrder").classList.add("animateContainer");
  } else {
    document.getElementById("lastOrder").classList.add("hidden");
  }

  // =========turnaround=====
  if (!formData.garmentsType || !formData.size || !formData.quantity) {
    showTurnAround = false;
  } else {
    showTurnAround = true;
  }
  if (showTurnAround) {
    theTurnaround.classList.remove("hidden");
    theTurnaround.classList.add("animateContainer");
  }
}

function toggleSections() {
  let choice = document.querySelector('input[name="choice"]:checked').value;
  if (choice === "yes") {
    formData.reOrder = "true";
    sectionYes.classList.remove("hidden");
    sectionYes.classList.add("animateContainer");
    sectionNo.classList.add("hidden");
    console.log(sectionYes);
  } else if (choice === "no") {
    formData.reOrder = false;
    sectionNo.classList.remove("hidden");
    sectionNo.classList.add("animateContainer");
    sectionYes.classList.add("hidden");
  }
}
function lastOrder() {
  let isSameAslastOrder = document.querySelector(
    'input[name="choice1"]:checked'
  ).value;
  formData.lastOrder = isSameAslastOrder;
  if (isSameAslastOrder === "true") {
    theTurnaround.classList.remove("hidden");
    theTurnaround.classList.add("animateContainer");
    orderInfo.classList.add("hidden");
  } else if (isSameAslastOrder === "false") {
    orderInfo.classList.remove("hidden");
    orderInfo.classList.add("animateContainer");
    theTurnaround.classList.remove("hidden");
  }
}
function turnaround() {
  let pickup = document.querySelector(
    'input[name="isTurnaround"]:checked'
  ).value;
  formData.isTurnaround = pickup;

  if (pickup === "true") {
    artwork.classList.remove("hidden");
    artwork.classList.add("animateContainer");
    shipingform.classList.add("hidden");
    if (formData.lastOrder == "true") {
      artwork.classList.add("hidden");
      submiltlist.classList.remove("hidden");
    }
  } else if (pickup === "false") {
    shipingform.classList.remove("hidden");
    shipingform.classList.add("animateContainer");
    artwork.classList.remove("hidden");
    artwork.classList.add("animateContainer");
    if (formData.lastOrder === "true") {
      artwork.classList.add("hidden");
      shipingform.classList.remove("hidden");
      submiltlist.classList.remove("hidden");
    } else if (formData.lastOrder === "false") {
      artwork.classList.remove("hidden");
    }
  }
}

function artworkradio() {
  console.log(formData.reOrder);
}

// ========handle submit=======
function handleClick() {
  console.log(formData);

  if (!formData.reOrder == "") {
    console.log(typeof formData.reOrder);
  } else {
    console.log(formData.reOrder);
  }
  let serviceID = 'service_mgaa7q8';
  let templateID = 'template_j467516';
  let templateParams = {
    name: formData.fullname,
    email: formData.email,
    companyName: formData.companyName,
    phone: formData.phone,
    about: formData.about,
    reOrder: formData.reOrder,
    invoiceNumber: formData.invoiceNumber,
    garmentsType: formData.garmentsType,
    color: formData.color,
    size: formData.size,
    quantity: formData.quantity,
    lastOrder: formData.lastOrder,
    isTurnaround: formData.isTurnaround,
    
    shipingname: formData.shipingname,
    reciptentCompany: formData.reciptentCompany,
    shipingAddress: formData.shipingAddress,
    shipingcity: formData.shipingcity,
    shipingState: formData.shipingState,
    shipingZip: formData.shipingZip,
  };
  // these IDs from the previous steps

  emailjs.send('service_mgaa7q8', 'template_j467516', templateParams)
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error);
    });
}
