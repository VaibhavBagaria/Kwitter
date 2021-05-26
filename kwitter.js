function Login() {
    User_name=document.getElementById("User_Name").value;
    localStorage.setItem("User-Name",User_name);
    window.location="kwitter_room.html";
}
