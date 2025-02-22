import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_mMjOXCr6v5fPzhI6PLKPyUDxnz_g5VY",
    authDomain: "varaghar121.firebaseapp.com",
    projectId: "varaghar121",
    storageBucket: "varaghar121.appspot.com",
    messagingSenderId: "915326723380",
    appId: "1:915326723380:web:1c84b8b43f7f0b1565f161"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadImage () {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return alert("Select an image!");

    const storageRef = ref(storage, "images/" + file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    document.getElementById("preview").src = url; // Display image
    console.log("Uploaded Image URL:", url);
};



// ========================================
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
  imageUrl:","


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
  if (formData.invoiceNumber.length > 3) {
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
    artwork.classList.add("hidden");
  } else if (choice === "no") {
    formData.reOrder = false;
    sectionNo.classList.remove("hidden");
    artwork.classList.remove("hidden");
    sectionNo.classList.add("animateContainer");
    sectionYes.classList.add("hidden");
  }
}
// lastOrder
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
// ========handle submit=======
async function  handleClick() {
  
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

  emailjs.send('service_xa2qkga', 'template_b67s4xa', templateParams)
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error);
    });
}
console.log("hello");
