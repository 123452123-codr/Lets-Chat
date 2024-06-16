var firebaseConfig = {
  apiKey: "AIzaSyAtr61FngCCp8qjrAUWCIZiyHAl7c8ELXs",
  authDomain: "cv-int-chat.firebaseapp.com",
  databaseURL: "https://cv-int-chat-default-rtdb.firebaseio.com",
  projectId: "cv-int-chat",
  storageBucket: "cv-int-chat.appspot.com",
  messagingSenderId: "867892740194",
  appId: "1:867892740194:web:1f8bb23c024a338db2113b",
  measurementId: "G-FGB9KGRW8H"
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