var firebaseConfig = {
    apiKey: "AIzaSyA3yZHHCz8XCpnniTlHIh-fSefKy73JEpo",
    authDomain: "coming-soon-7f020.firebaseapp.com",
    databaseURL: "https://coming-soon-7f020.firebaseio.com",
    projectId: "coming-soon-7f020",
    storageBucket: "coming-soon-7f020.appspot.com",
    messagingSenderId: "1065766586683",
    appId: "1:1065766586683:web:28b146eba15651281c4f1e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();


const submitBtn = document.getElementById('submitBtn')


let email = document.getElementById('email');

const database = firestore.collection("BinaryData")

submitBtn.addEventListener("click", function(e){
    
    let userEmail = email.value;

    // To acess the database collection
    database.doc().set({
        Email: userEmail
    }).then(function(){
            window.location.href="thankyou.html";
        })
        document.getElementById("contactform").reset()  
})
