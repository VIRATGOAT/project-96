// Your web app's Firebase configuration
user_name="";
room_name="";

const firebaseConfig = {
  apiKey: "AIzaSyBX5_1-cBP_ZZ_An_wpXssegfm1cqLZoJg",
  authDomain: "kwitter-a91e8.firebaseapp.com",
  databaseURL: "https://kwitter-a91e8-default-rtdb.firebaseio.com",
  projectId: "kwitter-a91e8",
  storageBucket: "kwitter-a91e8.appspot.com",
  messagingSenderId: "797333851226",
  appId: "1:797333851226:web:17cbabc71dc9f6342a5c63"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
    room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose:"adding RoomName"
     });
     localStorage.setItem("room_name", room_name);
     window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("RoomName"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html";
}
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}
