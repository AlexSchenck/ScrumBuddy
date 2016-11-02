$(document).on("click", "#joinroom", function(data) {
    if(document.getElementById("usr").value == "")
    {
        alert("Please enter a name.");
        return;
    }
    else
    {
        setLocalName();
        location.href = "./HTML/rooms.html";
    }
});

$(document).on("click", "#hostroom", function(data) {
    if(document.getElementById("usr").value == "")
    {
        alert("Please enter a name.");
        return;
    }
    else
    {
        setLocalName();
        addRoom();
        console.log("else called host");
    }
});

function setLocalName()
{
    localStorage.setItem("name", document.getElementById("usr").value);
}

function addRoom()
{
    var currentdate = new Date();
    
    if (currentdate.getMinutes() < 10)
    {
        var datetime = currentdate.getHours() + ":0" + currentdate.getMinutes();
    }
    else
    {
        var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
    }
    
    var roomsRef = firebase.database().ref("rooms");
    
    var newRoomData = {
        createdtime: datetime,
        host: localStorage.getItem("name"),
        users: { 
                name: "nullVal"
        }
    };
    var newRoom = roomsRef.push();
    
    localStorage.setItem("currentHostRoomID", newRoom.key);
    
    newRoom.set(newRoomData);
    console.log("Got here");
    location.href = "./HTML/Host.html";
}
