document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    messageBox.textContent = "Sending...";
    messageBox.className = "form-message";

    emailjs.sendForm("service_mhavgir", "template_qeq5v18", form)
      .then(() => {
        messageBox.textContent = "Message sent successfully! Thank you for reaching out.";
        messageBox.className = "form-message success";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        messageBox.textContent = "Oops! Something went wrong. Please try again.";
        messageBox.className = "form-message error";
      });
  });
});
