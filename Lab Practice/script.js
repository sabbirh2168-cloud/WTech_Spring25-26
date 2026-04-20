const form = document.getElementById("dataForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputs = form.querySelectorAll("input");
    let isValid = true;

    // Validation check
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
        }
    });

    if (!isValid) {
        errorMsg.textContent = "Field Value need to be filled up";
        return;
    } else {
        errorMsg.textContent = "";
    }

    // Print values in console
    let formData = {};

    inputs.forEach(input => {
        formData[input.name] = input.value;
    });

    console.log("Form Submitted Data:");
    console.log(formData);

    alert("Form submitted successfully!");
});