$(document).on("click", "#joinroom", function(data)
{
    if (!nameIsEmpty())
    {
        setLocalName();
        location.href = "./HTML/rooms.html";
    }
});

$(document).on("click", "#hostroom", function(data)
{
    if (!nameIsEmpty())
    {
        setLocalName();
        location.href = "./HTML/Host.html";
    }
});

function nameIsEmpty()
{
    if(document.getElementById("usr").value == "")
    {
        alert("Please enter a name.");
        return true;
    }

    return false;
}

function setLocalName()
{
    localStorage.setItem("name", document.getElementById("usr").value);
}
