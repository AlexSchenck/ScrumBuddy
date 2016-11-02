// JavaScript File
var myDatabase = firebase.database();
var roomID = getRoomId();

$(function(){
    var usersRef = myDatabase.ref('rooms/' + roomID + '/users');
    var myChart = new chart();

    displayChart(usersRef, myChart);
});
function getRoomId(){
    var roomid
    
    roomid = localStorage.getItem("currentHostRoomID");
  
    return roomid;
};
window.onbeforeunload=function(e){
    var roomRef = myDatabase.Ref("rooms/" + roomID);
    
    console.log(roomID + " will be removed.");
    roomRef.remove();
};
function displayChart(usersRef, myChart){
        
    
    mychart.print();
    
};
function CalculateAveragePoints(){
    mychart.print();
    
};
function getMinList(){
    mychart.print();
    
};
function getmaxList(){
    mychart.print();
    
};
