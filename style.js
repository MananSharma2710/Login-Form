function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(name == ""){
        document.getElementById("nameError").innerHTML = "*"
        return false;
    }
    if(email == ""){
        document.getElementById("emailError").innerHTML = "*"
        return false;
    }if(password == ""){
        document.getElementById("passwordError").innerHTML = "*"
        return false;
    }
    name.addEventListener("keypress",(event)=>{
        if(event.key === "Enter")
            document.getElementsByClassName("button").click();
    })
    email.addEventListener("keypress",(event)=>{
        if(event.key === "Enter")
            document.getElementsByClassName("button").click();
    })
    password.addEventListener("keypress",(event)=>{
        if(event.key === "Enter")
            document.getElementsByClassName("button").click();
    })
}
