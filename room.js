var firebaseConfig = {
      apiKey: "AIzaSyBKL3FA6uVkEkVlsQ1tsq6m-n3x8TmBG5w",
      authDomain: "secret-society-9a963.firebaseapp.com",
      databaseURL: "https://secret-society-9a963-default-rtdb.firebaseio.com",
      projectId: "secret-society-9a963",
      storageBucket: "secret-society-9a963.appspot.com",
      messagingSenderId: "973739609418",
      appId: "1:973739609418:web:9983d71e04a8874b8bc5b3",
      measurementId: "G-X7D9MELV5Y"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("Let's Chat Website User Name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      var room_key = document.getElementById("room_name").value;

      firebase.database().ref("messages/").child(room_key).update({
            purpose: "adding room key",
            status: "under development"
      });

      localStorage.setItem("Let's Chat Room_Key", room_key);

      window.location.replace("chat.html");
}

function getData() {
      firebase.database().ref("messages/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room names ", Room_names);

                  var row = "<div class='room_name' id=" + Room_names + " onclick='redirectTo(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
      });});
}

function redirectTo(name) {
      console.log(name);
      localStorage.setItem("Let's Chat Room_Key", name);
      window.location.replace("chat.html");
}

getData();

function log_out() {
      firebase.auth().signOut().then(() => {
            localStorage.removeItem("Let's Chat Website User Name");
            localStorage.removeItem("Let's Chat Room_Key");
            window.location.replace("index.html");
      }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode);
            alert(errorMessage);
      });
}