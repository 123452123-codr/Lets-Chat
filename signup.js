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

function load_content() {
  if (localStorage.getItem("Let's Chat Website User Name"))
  {
      document.getElementById("user_name").value = localStorage.getItem("Let's Chat Website User Name");
  }
}