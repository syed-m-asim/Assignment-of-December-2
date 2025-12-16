
const form = document.getElementById("admissionForm");
const statusDiv = document.getElementById("result");

// Step 1: submit admission form
function submitForm() {
    return new Promise((resolve, reject) => {
        statusDiv.innerText = "Submitting Form...";
        setTimeout(() => {
            resolve("Form Submitted Successfully.");
        }, 1000);
    });
}

// Step 2: verify fee
function verifyFee() {
    return new Promise((resolve, reject) => {
        statusDiv.innerText = "Verifying Fee...";
        setTimeout(() => {
            resolve("Fee Verified.");
        }, 1000);
    });
}

// Step 3: confirm admission
function confirmAdmission() {
    return new Promise((resolve, reject) => {
        statusDiv.innerText = "Confirming Admission...";
        setTimeout(() => {
            resolve("Admission Confirmed.");
        }, 1000);
    });
}

// Form Submit Event + Promise Chaining
form.addEventListener("submit", function (asim) {
    asim.preventDefault();
    submitForm()
        .then((message) => {
            console.log(message)
            statusDiv.innerText = message;
            return verifyFee();
        })
        .then((message) => {
            console.log(message)
            statusDiv.innerText = message;
            return confirmAdmission();
        })
        .then((message) => {
            console.log(message)
            statusDiv.innerText = message;
        })
        .catch((error) => {
            console.error("Error:", error)
            statusDiv.innerText = "Error";
        });
});


