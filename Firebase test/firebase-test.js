function listenData() {
    var ref = firebase.database().ref('rooms');
    ref.on('value', function(snapshot) {
       alert("eyp"); 
    });
}

function writeUserData() {
	firebase.database().ref('rooms').set({
		this: "this",
		is: "is",
		a: "a",
		test: "test"
	});
}