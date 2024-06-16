var firebaseConfig = {
      apiKey: "AIzaSyBJeMPQagpmNm8MGsHhw9aBlwoVU9yTegg",
      authDomain: "enjoychatting-pro.firebaseapp.com",
      databaseURL: "https://enjoychatting-pro-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "enjoychatting-pro",
      storageBucket: "enjoychatting-pro.appspot.com",
      messagingSenderId: "509860403153",
      appId: "1:509860403153:web:1680629d8b641e2455f2f0",
      measurementId: "G-52P9TL2VQM"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("Let's Chat Website User Name");
var room_key = localStorage.getItem("Let's Chat Room_Key");

function send() {
      var message = document.getElementById("message").value;
      firebase.database().ref("messages/" + room_key).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("message").value = "";
}

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
      var updated_like = Number(likes) + 1;
      console.log(updated_like);

      firebase.database().ref("messages/" + room_key).child(messageid).update({
            like: updated_like
      });
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