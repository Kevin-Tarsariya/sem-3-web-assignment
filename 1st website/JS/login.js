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
