function generate() {
    let str = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i = 0; i < document.getElementById("lengthslider").value; i++) {
        str += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("output").value = str;
}

function settings() {
    let selector = document.getElementById("settings");

    if(selector.style.display === "none"){
        selector.style.display = "block";
    }
    else {
        selector.style.display = "none"
    }
}