let sectionYes = document.getElementById("section-yes");
  let sectionNo = document.getElementById("section-no");
  let theTurnaround = document.getElementById("theTurnaround");
  let shipingform = document.getElementById("shipingform")
// ======get input value=====
let formData = {
  fullname:"",
  email:"",
  companyName:"",
  phone:"",
  about:"",
  reOrder:'false',
  invoiceNumber:"",
  garmentsType:"",
  color:"",
  size:"",
  quantity:"",
  garmentsList:"",
  isTurnaround:"",
  
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
function handleChange(event){
  console.log(event.target);
  
  formData={
    ...formData,
    [event.target.name] : event.target.value.trim()
  }
  validateForm();
  
   // ==========showGarmentsbox========
  //  if(!formData.garmentsType || !formData.color || !formData.size || !formData.quantity){
  //   showGarmentsbox = false;
  // }else{
  //   showGarmentsbox=true
  // }
  // if(showGarmentsbox){
  //   document.getElementById("showGarmentsbox").classList.remove("hidden")
  // }else{
  //   document.getElementById("showGarmentsbox").classList.add("hidden")
  // }
  
}
// =====form validation===
// =====form validation===
function validateForm() {
  

  // =====name error=====
  if(!formData.fullname){
    document.getElementById("nameError").innerHTML = "Please fill in this field";
    document.getElementById("nameError").classList.remove("hidden")
  }else{
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("nameError").classList.add("hidden")
  }
  // ======emailError==========
  if(!formData.email){
    document.getElementById("emailError").innerHTML = "Please fill in this field";
    document.getElementById("emailError").classList.remove("hidden")
  }else{
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("emailError").classList.add("hidden")
  }
   // ======PhoneError==========
   if(!formData.phone){
     document.getElementById("PhoneError").innerHTML = "Please fill in this field";
     document.getElementById("PhoneError").classList.remove("hidden")
   }else{
     document.getElementById("PhoneError").innerHTML = "";
     document.getElementById("PhoneError").classList.add("hidden")
   }
   // ======aboutError==========
   if(!formData.about){
     document.getElementById("aboutError").innerHTML = "Please fill in this field";
     document.getElementById("aboutError").classList.remove("hidden")
   }else{
     document.getElementById("aboutError").innerHTML = "";
     document.getElementById("aboutError").classList.add("hidden")
   }
   
  // ========check the validetion=======(first)
  if(!formData.fullname || !formData.email || !formData.phone || !formData.about){
    isValid=false;
  }else{
    isValid = true;
  }
  // ======hide or show REORDER by addeding classlist=========
  if(isValid){
    document.getElementById('reOrder').classList.remove("hidden")
  }else{
    document.getElementById('reOrder').classList.add("hidden")
  }
  // =======invoice validate======
  if (formData.invoiceNumber.length>5) {
    document.getElementById('lastOrder').classList.remove("hidden");
  }else{
    document.getElementById('lastOrder').classList.add("hidden");
  }

  // =========turnaround=====
  if(!formData.garmentsType || !formData.size || !formData.quantity){
    showTurnAround = false;
  }else{
    showTurnAround= true;
  }
  if(showTurnAround){
    theTurnaround.classList.remove("hidden");
  }





  // document.getElementById("phoneError").textContent = /^[0-9]{10}$/.test(
  //   formData.phone
  // )
  //   ? ""
  //   : "Enter a valid 10-digit phone number";


  // document.getElementById("emailError").textContent =
  //   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  //     ? ""
  //     : "Enter a valid email";

  // if (
  //   !formData.name ||
  //   !/^[0-9]{10}$/.test(formData.phone) ||
  //   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  // ) {
  //   isValid = false;
    
  // }

 

  // if (isValid) {
  //   document.getElementById("orderSection").classList.remove("hidden");
  // }
}


function toggleSections() {
  let choice = document.querySelector('input[name="choice"]:checked').value;
  if (choice === "yes") {
    formData.reOrder = "true"
    sectionYes.classList.remove("hidden");
    sectionNo.classList.add("hidden");
  } else if (choice === "no") {
    formData.reOrder = false;
    sectionNo.classList.remove("hidden");
    sectionYes.classList.add("hidden");
  }
}

function turnaround(){
  let pickup = document.querySelector('input[name="isTurnaround"]:checked').value;
  formData.isTurnaround = pickup;
  console.log(pickup);

  if (pickup === "true") {
    shipingform.classList.remove("hidden")
    
  } else if (pickup === "false") {
    shipingform.classList.add("hidden");
  }
  
}


// ========handle submit=======
function handleClick(){
  console.log(formData);
  console.log(theTurnaround);
  
}