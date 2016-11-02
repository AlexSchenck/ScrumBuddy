$(document).ready(function() {
   var pressed = ""; // Most recently pressed button ID
   var i = 1;
   var thisID = ""; // ID of this button used to eliminate reference errors
   var userName = localStorage.getItem("name");
   var userRoom = localStorage.getItem("currentRoom");
   var userID;
   var roomRef = firebase.database().ref("rooms/" + userRoom + "/users");
   var roomUserRef;
   var pointRef;
   
   // add user to room
   var newUserData = { 
        name : userName,
        point : 0
    };
    
    var newUser = roomRef.push();
    
    localStorage.setItem("currentUser", newUser.key);
    userID = newUser.key;
    roomUserRef = firebase.database().ref("rooms/" + userRoom + "/users/" + userID);
    pointRef = firebase.database().ref("rooms/" + userRoom + "/users/" + userID + "/point");
    
    newUser.set(newUserData);
   
   // define vote button click behavior
   while (i < 9)
   {
      $("#btn".concat(i)).click(function() {
         thisID = "#".concat(this.id);

         if (pressed != thisID)
         {
            // Not pressed again
            // Raise other button if another had been pressed
            if (pressed != "")
            {
               $(pressed).animate({
                  top:"-=5"
               }), 1, function(){};
               
               $(pressed).css("color", "#000000");
            }
            
            // Animate as pushed
            $(thisID).animate({
               top:"+=5"
            }), 1, function(){};
            
            $(thisID).css("color", "#337ab7");
            
            pressed = thisID;
            
            var points = $(thisID).find("span").text();
            
            pointRef.set(points);
            $("h1").html("Your vote is ".concat(points));
         }
      });
      
      i++;
   }

   window.onbeforeunload = function(e) {
      roomUserRef.remove();
   };
});
