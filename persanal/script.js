// toggle menu
function toggleMenu(){
  const nav = document.getElementById("navMenu");
  if(nav){
    nav.classList.toggle("active");
  }else{
    console.error("navMenu element not found");
  }
}

// project information
function openProject(title, img, desc, tags){
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImg").src = img;
  document.getElementById("modalDesc").innerText = desc;

  let tagBox = document.getElementById("modalTags");
  tagBox.innerHTML = "";
  tags.forEach(tag => {
    let span = document.createElement("span");
    span.innerText = tag;
    tagBox.appendChild(span);
  });

  document.getElementById("projectModal").classList.add("active");
}

function closeProject(){
  document.getElementById("projectModal").classList.remove("active");
}

window.onclick = function(e){
  let modal = document.getElementById("projectModal");
  if(e.target === modal){
    closeProject();
  }
}

// certificate information

function openCert(title, img, desc, tags){
  document.getElementById("certTitle").innerText = title;
  document.getElementById("certImg").src = img;
  document.getElementById("certDesc").innerText = desc;

  let tagBox = document.getElementById("certTags");
  tagBox.innerHTML = "";
  tags.forEach(tag => {
    let span = document.createElement("span");
    span.innerText = tag;
    tagBox.appendChild(span);
  });

  document.getElementById("certModal").classList.add("active");
}

function closeCert(){
  document.getElementById("certModal").classList.remove("active");
}

window.addEventListener("click", function(e){
  let modal = document.getElementById("certModal");
  if(e.target === modal){
    closeCert();
  }
});

// Resume download (PDF error FIXED)
document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.getElementById("downloadResume");

  resumeBtn.addEventListener("click", () => {
    const resumeUrl = "Rahul_Resume.pdf"; // same folder
    const link = document.createElement("a");

    link.href = resumeUrl;
    link.download = "Rahul_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


//contact form submission to google sheets
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const messageEl = document.getElementById("message");

    //  Safety check
    if (!nameEl || !emailEl || !messageEl) {
      alert("Form fields not found");
      return;
    }

    const formData = new FormData();
    formData.append("name", nameEl.value);
    formData.append("email", emailEl.value);
    formData.append("message", messageEl.value);

    fetch("https://script.google.com/macros/s/AKfycbzrx_Q98Yit3hxPbE2QKCJptw9t35-i-9Z5RtoaD0XtCElxogICVmC8OrAzX6TADOYjKA/exec", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      alert("Message sent successfully");
      form.reset();
    })
    .catch(err => {
      alert("Submission failed");
      console.error(err);
    });
  });
});


