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
var room_key = localStorage.getItem("Let's Chat Room_Key");
var input = document.getElementById("message");

function send() {
      var message = document.getElementById("message").value;
      firebase.database().ref("messages/" + room_key).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("message").value = "";
}

input.addEventListener("keypress", function(event) {
      event.preventDefault();

      if(event.key == "Enter") {
            document.getElementById("send").click();
      }
});

function getData() { 
      firebase.database().ref("messages/" + room_key).on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose" && childKey != "status") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);
         var name = message_data['name'];
         var message = message_data['message'];
         var likes = message_data['like'];

         var name_with_tag = "<h4>" + name + "<img class='user_tick' draggable='false' src='tick.png'></h4>";
         var message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         var btn_with_tag = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + likes + "' onclick='updateLikes(this.id)'>";
         var span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + likes + "</span></button><hr>";

         var row = name_with_tag + message_with_tag + btn_with_tag + span_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); 
}

getData();

function updateLikes(messageid) {
      console.log("Clicked on liked button - " + messageid);
      var likes = document.getElementById(messageid).value;
      if (likes == "0") {
            var updated_like = Number(likes) + 1;
            console.log(updated_like);

            firebase.database().ref("messages/" + room_key).child(messageid).update({
                  like: updated_like
            });
      }
      else {
            var waste = 1;
            waste += 1;
            console.log(waste)
      }
}

function leavechat() {
      var confirmmessage = confirm("Do you want to leave this chat?");
      if (confirmmessage == true) {
            window.location.replace("room.html")
      }
}

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