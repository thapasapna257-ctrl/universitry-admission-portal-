function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let percentage = document.getElementById("percentage").value;
    let board = document.getElementById("board").value;
    let course = document.getElementById("course").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" || percentage === "" || board === "" || course === "") {
        message.style.color = "red";
        message.innerText = "Please fill all required fields!";
        return;
    }

   
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid email!";
        return;
    }

    
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid 10-digit phone number!";
        return;
    }

    message.style.color = "green";
    message.innerText = "Form submitted successfully!";
    document.getElementById("admissionForm").reset();
}
