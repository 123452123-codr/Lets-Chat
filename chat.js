var firebaseConfig = {
      apiKey: "AIzaSyAxrFX-ytpCE57rLMn-T3Nh3j6Y0GGou8c",
      authDomain: "pro-kwitter.firebaseapp.com",
      databaseURL: "https://pro-kwitter-default-rtdb.firebaseio.com",
      projectId: "pro-kwitter",
      storageBucket: "pro-kwitter.appspot.com",
      messagingSenderId: "334075946539",
      appId: "1:334075946539:web:cba484fc08dfa342a62c6e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("Kwitter Website User Name");
var room_key = localStorage.getItem("Kwitter Room_Key");

function send() {
      var message = document.getElementById("message").value;
      firebase.database().ref("kwitter/" + room_key).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
