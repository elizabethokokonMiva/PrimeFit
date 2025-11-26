// GET ELEMENTS
// -------------------------------
const editBtn = document.getElementById("edit-profile-btn");
const signInBtn = document.getElementById("sign-in-btn");
const deleteDetailsBtn = document.getElementById("delete-details-btn");
const displaySection = document.getElementById("display-section");
const editForm = document.getElementById("profile-edit-form");
const cancelEditBtn = document.getElementById("cancel-edit-btn");

// Profile fields
const avatar = document.getElementById("profile-avatar");
const nameDisplay = document.getElementById("profile-name-display");
const bioDisplay = document.getElementById("profile-bio-display");
const phoneDisplay = document.getElementById("profile-phone");
const emailDisplay = document.getElementById("profile-email");
const addressDisplay = document.getElementById("profile-address");

// Edit fields
const editName = document.getElementById("edit-name");
const editBio = document.getElementById("edit-bio");
const editPhone = document.getElementById("edit-phone");
const editEmail = document.getElementById("edit-email");
const editAddress = document.getElementById("edit-address");

const saveMessage = document.getElementById("save-message");
const userIdDisplay = document.getElementById("user-id-display");
const memberSinceDisplay = document.getElementById("member-since-display");
const lastVisitedDisplay = document.getElementById("last-visited-display");

// -------------------------------
// DEFAULT USER DATA FUNCTION
// -------------------------------
function getDefaultUser() {
  const now = new Date();
  return {
    name: "Guest User",
    bio: "Style Enthusiast & PrimeFit Customer",
    phone: "",
    email: "",
    address: "",
    avatar: "",
    id: `user-${Math.floor(Math.random() * 1000000)}`,
    memberSince: `${now.toLocaleString("default", { month: "short" })} ${now.getFullYear()}`,
    lastVisited: new Date().toLocaleString()
  };
}

// -------------------------------
// INITIALIZE USER
// -------------------------------
let user = JSON.parse(localStorage.getItem("primefit_user"));
if (!user) {
  user = getDefaultUser();
  localStorage.setItem("primefit_user", JSON.stringify(user));
}

// -------------------------------
// LOAD USER INTO DISPLAY
// -------------------------------
function loadUser() {
  nameDisplay.textContent = user.name || "Unnamed User";
  bioDisplay.textContent = user.bio || "PrimeFit Customer";
  phoneDisplay.textContent = user.phone || "—";
  emailDisplay.textContent = user.email || "—";
  addressDisplay.textContent = user.address || "—";
  avatar.src = user.avatar || "https://placehold.co/128x128/4f46e5/ffffff?text=PF";

  userIdDisplay.textContent = `ID: ${user.id}`;
  memberSinceDisplay.textContent = user.memberSince;
  lastVisitedDisplay.textContent = new Date(user.lastVisited).toLocaleString();

  // -------------------------------
  // BUTTON VISIBILITY LOGIC
  // -------------------------------
  if (user.name === "Guest User") {
    editBtn.classList.remove("hidden");       // Guests can edit
    signInBtn.classList.remove("hidden");     // Show login
    deleteDetailsBtn.classList.add("hidden"); // Guests cannot delete
  } else {
    editBtn.classList.remove("hidden");       // Registered users can edit
    deleteDetailsBtn.classList.remove("hidden");
    signInBtn.classList.add("hidden");        // Hide login
  }
}

// Update last visited timestamp and load
user.lastVisited = new Date();
localStorage.setItem("primefit_user", JSON.stringify(user));
loadUser();

// -------------------------------
// EDIT BUTTON
// -------------------------------
editBtn.addEventListener("click", () => {
  editName.value = user.name;
  editBio.value = user.bio;
  editPhone.value = user.phone;
  editEmail.value = user.email;
  editAddress.value = user.address;

  editForm.classList.remove("hidden");
  displaySection.classList.add("hidden");
  editBtn.classList.add("hidden");
  deleteDetailsBtn.classList.add("hidden");
  signInBtn.classList.add("hidden");
});

// -------------------------------
// CANCEL BUTTON
// -------------------------------
cancelEditBtn.addEventListener("click", () => {
  editForm.classList.add("hidden");
  displaySection.classList.remove("hidden");
  loadUser(); // refresh buttons
});

// -------------------------------
// SAVE CHANGES
// -------------------------------
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  user.name = editName.value;
  user.bio = editBio.value;
  user.phone = editPhone.value;
  user.email = editEmail.value;
  user.address = editAddress.value;

  localStorage.setItem("primefit_user", JSON.stringify(user));

  saveMessage.classList.remove("hidden");
  setTimeout(() => saveMessage.classList.add("hidden"), 2000);

  editForm.classList.add("hidden");
  displaySection.classList.remove("hidden");
  loadUser(); // refresh display and buttons
});

// -------------------------------
// DELETE DETAILS BUTTON
// -------------------------------
deleteDetailsBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all your profile details and reset to a guest account?")) {
    user = getDefaultUser();
    localStorage.setItem("primefit_user", JSON.stringify(user));
    loadUser();
    alert("Profile details have been deleted and reset to Guest User.");
  }
});

// -------------------------------
// AVATAR UPLOAD
// -------------------------------
avatar.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";

  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      avatar.src = reader.result;
      user.avatar = reader.result;
      localStorage.setItem("primefit_user", JSON.stringify(user));
    };
    reader.readAsDataURL(file);
  };

  fileInput.click();
});
