function validate()
{
    var username=document.getElementById("uname");
    var password=document.getElementById("pass");
    if(username.value.trim()=="" )
    {
        alert("No Username");
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Password requried");
        return false;
    }
   
    else
    {
        return true;
    }
}