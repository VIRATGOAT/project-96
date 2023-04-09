// Your web app's Firebase configuration
user_name="";
room_name="";

const firebaseConfig = {
  apiKey: "AIzaSyCb7a3N_TnWy-QlJusc6XbPKA33TfD3REc",
  authDomain: "kwitter-web-app-11b11.firebaseapp.com",
  databaseURL: "https://kwitter-web-app-11b11-default-rtdb.firebaseio.com",
  projectId: "kwitter-web-app-11b11",
  storageBucket: "kwitter-web-app-11b11.appspot.com",
  messagingSenderId: "919335886432",
  appId: "1:919335886432:web:c7ee275d5a4e46c8cded05",
  measurementId: "G-LPLPT9RPF0"
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
