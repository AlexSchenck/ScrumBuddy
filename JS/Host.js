// JavaScript File
var myDatabase = firebase.database();
var roomID = getRoomId();

$(function(){
    
    var usersRef = myDatabase.ref('rooms/' + roomID + '/users');
console.log("Current room: " + roomID);
    loadUsers(usersRef, roomID);
});

function getRoomId(){
    var roomid
    
    roomid = localStorage.getItem("currentHostRoomID");
  
    return roomid;
};

function StartVote(){
    setTimeout(function(){window.location.href="Result.html"} , 1000);
};
function appendUserRow(userList, userName){
  var newRow = $("<div></div>");
  newRow.addClass("row");
           
  // add the row for the user
  var nameColumn = $("<div></div>");
  nameColumn.html(userName);
  
  userList.append(newRow);  
  newRow.append(nameColumn);
};
function loadUsers(usersRef){
  var onlineUser = $("#user-list");
  var counter = 1;
  
  onlineUser.html("");
  
  usersRef.on('value', function(snapshot) {
       
      snapshot.forEach(function(data) {
          var userName = data.val().name;
         
          // add user name
          if (data.key != "name") {
              appendUserRow(onlineUser, counter +". " + userName);
              counter++;
          }

        })
    });
};

window.onbeforeunload=function(e){
    var roomRef = myDatabase.Ref("rooms/" + roomID);
    
    console.log(roomID + " will be removed.");
    
    //var roomRef = firebase.database().Ref("rooms/" + roomID);
    console.log(roomID + " will be deleted at last.")
};
