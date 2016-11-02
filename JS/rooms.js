$(function() {

    // get reference of rooms node in the database
    var roomsRef = firebase.database().ref("rooms");

    getRoomsInfo(roomsRef);

});

// user clicked to join a room
$(document).on("click", ".join-room-button", function(data) {
    var roomKey = this.id;
    localStorage.setItem("currentRoom", roomKey);
    
    //addUserIntoRoom(roomKey);
    window.location.href = "vote.html";
});


/*
// add a user into they room they chose to join
function addUserIntoRoom(roomKey) {
    var newUserData = { 
        name : localStorage.getItem("name"),
        point : 0
    };
    
    var roomUsersRef = firebase.database().ref("rooms/" + roomKey + "/users");
    
    var newUser = roomUsersRef.push();
    
    // set current user guid
    localStorage.setItem("currentUser", newUser.key);
    
    newUser.set(newUserData);
    
    window.location.href = "vote.html";
}
*/

// get room info from the database and load the info for
// each room to the user
function getRoomsInfo(roomsRef) {

    var roomCount = 0;
    var buttonsHolder = $("#room-buttons");

    // register value change event listener and load the
    // list of rooms to the user
    roomsRef.on('value', function(snapshot) {

        // empty the current rooms list
        $("#room-buttons").html("");
        snapshot.forEach(function(data) {

            //  room key
            var roomKey = data.key;

            // get room's host and created time
            var hostName = data.val().host;
            var createdTime = data.val().createdtime;
            
            if (hostName != "DefaultRoom") {
    
                roomCount++;
                
                console.log("Created time: " + createdTime + " Host: " + hostName);
    
                // add a new row for each room
                var newRow = $("<div></div>");
                newRow.addClass("row");
    
                // add host name info
                var hostNameColumn = $("<div></div>");
                hostNameColumn.addClass("col-md-2  col-md-offset-3  col-xs-3 col-sm-3");
                hostNameColumn.html("<b>Host:</b> " + hostName);
    
                // add created time info
                var createdTimeColumn = $("<div></div>");
                createdTimeColumn.addClass("col-md-2 col-xs-5 col-sm-3");
                createdTimeColumn.html("<b>Created at:</b> " + createdTime);
    
                // add new join button
                var newButton = $("<button type='button'></button>");
                newButton.addClass('join-room-button btn btn-primary');
                newButton.text("Join");
                newButton.attr("id", roomKey);
    
                // connect DOM elements together
                buttonsHolder.append(newRow);
                newRow.append(hostNameColumn);
                newRow.append(createdTimeColumn);
                newRow.append(newButton);
    
                // add break line
                buttonsHolder.append("<hr/>");
            }
        });
            
        if (roomCount == 0) {
            buttonsHolder.append("<h4>No rooms are currently being hosted</h4>");
        }
    });
    buttonsHolder.addClass("jumbotron");
}

