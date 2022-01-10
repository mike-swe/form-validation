let userAuth = () => {
    const name = document.getElementById("name");

    const email = document.getElementById("email");

    const Msg = document.getElementById("message");

    const modal = document.getElementById("modal");

    const form = document.getElementsByTagName("form");

    if(name.value.trim() ==="" || email.value.trim() ==="") {
        
        name.style.border = "2px solid hsl(0, 100%, 50%)";
        name.placeholder = "Name is required";
        name.placeholder.style = "hsl(0, 100%, 50%)";

        email.style.border = "2px solid hsl(0, 100%, 50%)";
        email.placeholder = "Email is required";

        name.addEventListener("click", e => {
            name.style.border = "1.5px solid hsl(150, 81%, 13%)";
            name.placeholder = "Name is required";           
        });

        email.addEventListener("click", e => {
            email.style.border = "1.5px solid hsl(150, 81%, 13%)";
            email.placeholder = "Name is required";           
        });

        return false
    } else {

        modal.style.display = "block";
        true
    }
}

let BtnToggle = () => {
    let ClsBtn = document.getElementById("CloseBtn");

    let ExitBtn = document.getElementById("exitBtn");

let modal = document.getElementById("modal");

ExitBtn.addEventListener("click", e => {
    modal.style.display = "none";
});
}