$(document).on("click", "#joinroom", function(data)
{
    checkNameEmpty();
    setLocalName();
    location.href = "./HTML/rooms.html";
});

$(document).on("click", "#hostroom", function(data)
{
    checkNameEmpty();
    setLocalName();
    console.log("else called host");
    location.href = "./HTML/Host.html";
});

function checkNameEmpty()
{
    if(document.getElementById("usr").value == "")
    {
        alert("Please enter a name.");
        return;
    }
}

function setLocalName()
{
    localStorage.setItem("name", document.getElementById("usr").value);
}
