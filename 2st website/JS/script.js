/*----------------home page alert massage------------*/
function showMessage() 
{
    alert("First Complete registration and then login to book a hotel Room.");
    window.location.replace("registration.html");
}
  
/*-----------------login page validation------------*/
function validateLogin() 
{
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) 
    {
        alert("Please enter a valid email address");
        return false;
    }

    if (password.length < 6) 
        {
            alert("Password must be at least 6 characters long.");
            return false;
        }
    return true;
}

/*-----------------Registration page validation------------*/
function validateregistrationform() {
    const fullname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const language = document.getElementById("language").value;
    const city = document.getElementById("city").value.trim();

    // Full name validation
    if (fullname === "") 
    {
        alert("Please enter your full name.");
        return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) 
    {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation 
    if (password.length < 6) 
    {
        alert("Enter the Password must be at least 6 characters long.");
        return false;
    }

    // Birthdate validation
    if (birthdate === "") 
    {
        alert("Please enter your birth date.");
        return false;
    }

    // Gender validation
    if (gender === "" || gender === "Select Gender") 
    {
        alert("Please select your gender.");
        return false;
    }

    // Language validation
    if (language === "" || language === "Select Language") 
    {
        alert("Please select a language.");
        return false;
    }

    // City validation
    if (city === "") 
    {
        alert("Please enter your city.");
        return false;
    }

    // Mobile number validation 
    const mobilePattern = /^\d{10}$/;
    if (!mobile.match(mobilePattern)) 
    {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    return true; 
}
