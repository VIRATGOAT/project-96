user_name="";
room_name="";

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="Kwitter_room.html";
}





function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html";
  }