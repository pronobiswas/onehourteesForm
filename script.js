

function validateForm() {
  let formData = {
    name: document.getElementById("fullname").value.trim(),
    email: document.getElementById("Email").value.trim(),
    companyName: document.getElementById("CompanyName").value.trim(),
    phone: document.getElementById("Phone").value.trim(),
    about: document.getElementById("about").value.trim(),
    gender: document.querySelector('input[name="gender"]:checked')
      ? document.querySelector('input[name="gender"]:checked').value
      : "",
  };
  let isValid = true;

  document.getElementById("nameError").textContent = formData.name
    ? ""
    : "Name is required";
  document.getElementById("phoneError").textContent = /^[0-9]{10}$/.test(
    formData.phone
  )
    ? ""
    : "Enter a valid 10-digit phone number";
  document.getElementById("emailError").textContent =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ""
      : "Enter a valid email";

  if (
    !formData.name ||
    !/^[0-9]{10}$/.test(formData.phone) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    isValid = false;
    
  }

  if (isValid) {
    document.getElementById("orderSection").classList.remove("hidden");
  }
}

function toggleSections() {
  let choice = document.querySelector('input[name="choice"]:checked').value;
  let sectionYes = document.getElementById("section-yes");
  let sectionNo = document.getElementById("section-no");

  if (choice === "yes") {
    sectionYes.classList.remove("hidden");
    sectionNo.classList.add("hidden");
  } else if (choice === "no") {
    sectionNo.classList.remove("hidden");
    sectionYes.classList.add("hidden");
  }
}
function handleClick(){
  console.log("kaj kortiche");
  
}
function handleChange(this){
  // validateForm();
  console.log("handleChange");
  console.log(this.value);
}