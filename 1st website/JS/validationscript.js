/*-----------------login page validation------------*/
function validateForm() 
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) 
    {
        alert("Please enter a valid email address!!");
        return false;
    }

    
    if(password.length<6) 
    {
        alert("Password must be atleast 6 characters long!!");
        return false;
    }

    return true;
}

/*-----------------Registration page validation------------*/
function validateregistrationform() 
{
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const contact = document.getElementById("Contact").value;
    const pincode = document.getElementById("pincode").value;

    // First name validation
    if (fname === "") 
    {
        alert("Please enter your first name.");
        return false;
    }

    // Last name validation
    if (lname === "") 
    {
        alert("Please enter your last name.");
        return false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) 
    {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    if (password.length < 6) 
    {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Contact number validation
    if(contact.length !== 10) 
    {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // Pincode validation
    if(pincode.length !== 6) 
    {
        alert("Please enter a valid 6-digit pincode.");
        return false;
    }

    return true;
}