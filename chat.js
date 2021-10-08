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

function getData() { firebase.database().ref("messages/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
