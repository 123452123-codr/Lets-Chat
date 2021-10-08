function add_user() {
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("Kwitter Website User Name", user_name);
    window.location.replace("room.html");
}

function load_content() {
    if (localStorage.getItem("Kwitter Website User Name"))
    {
        document.getElementById("user_name").value = localStorage.getItem("Kwitter Website User Name");
    }
}