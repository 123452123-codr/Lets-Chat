var firebaseConfig = {
      apiKey: "AIzaSyBSN_uMmHOmoOM-UwsU8CpKiXQ0IRvK5wU",
      authDomain: "lets-chat-pro.firebaseapp.com",
      databaseURL: "https://lets-chat-pro-default-rtdb.firebaseio.com",
      projectId: "lets-chat-pro",
      storageBucket: "lets-chat-pro.appspot.com",
      messagingSenderId: "84120085307",
      appId: "1:84120085307:web:9b2239f97f014bac6a0d1e"
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