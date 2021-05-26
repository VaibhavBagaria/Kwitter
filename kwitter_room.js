name1=localStorage.getItem("User-Name");
document.getElementById("userName").innerHTML="Welcome "+name1;
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCYRjyjG4krA033EggS1k-W70HL9vm7CdY",
      authDomain: "kwitter-c9d12.firebaseapp.com",
      databaseURL: "https://kwitter-c9d12-default-rtdb.firebaseio.com",
      projectId: "kwitter-c9d12",
      storageBucket: "kwitter-c9d12.appspot.com",
      messagingSenderId: "323947276547",
      appId: "1:323947276547:web:b5cd8a1b6be315818da136"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function Add_Room() {
          room_name=document.getElementById("roomName").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding_Room_Name"
          });
          localStorage.setItem("Room_Name",room_name)
          console.log(room_name);
         window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_Name "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirect_To_Room_Name(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("Output").innerHTML+=row;
      });});}
getData();

function redirect_To_Room_Name(name) {
      localStorage.setItem("Room_Name",name)
      window.location="kwitter_page.html";
}

function Logout() {
      localStorage.removeItem("Room_Name")
      localStorage.removeItem("User-Name")
      window.location="index.html";
}
