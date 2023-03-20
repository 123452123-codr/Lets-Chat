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