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

function add_user() {
    var user_name = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      localStorage.setItem("Let's Chat Website User Name", user_name);
      window.location.replace("room.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode);
      alert(errorMessage);
    });
}