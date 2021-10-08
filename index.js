function add_user() {
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("Let's Chat Website User Name", user_name);
    window.location.replace("room.html");
}

function load_content() {
    if (localStorage.getItem("Let's Chat Website User Name"))
    {
        document.getElementById("user_name").value = localStorage.getItem("Let's Chat Website User Name");
    }
}