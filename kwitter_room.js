const firebaseConfig = {
      apiKey: "AIzaSyA3kzHwi1PgREd9UKYwXsl6oZaMYDRyaUs",
      authDomain: "kwitter-app-9172a.firebaseapp.com",
      databaseURL: "https://kwitter-app-9172a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9172a",
      storageBucket: "kwitter-app-9172a.appspot.com",
      messagingSenderId: "541316853168",
      appId: "1:541316853168:web:10d7fb42f9125ce5a87a75"
    }; 

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

    function addRoom()
    {
      Room_names = document.getElementById("room_names").value;

      firebase.database().ref("/").child(Room_names).update({
        purpose : "adding room name"
      });
      localStorage.setItem("room_names",room_names);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
    });
  }
    getData();

    function redirectToRoomName(name)
    {
      console.log(name)
      localStorage.setItem("room_names",name)
      window.location = "kwitter_page.html";
    }  

    function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_names");
      window.location = "index.html";
    }