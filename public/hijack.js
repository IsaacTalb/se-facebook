document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);

    fetch('/api/submit-form', { // Updated to point to the serverless function
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
