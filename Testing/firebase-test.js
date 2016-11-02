var database = firebase.database();

function writeUserData() {
	firebase.database().ref('rooms').set({
		this: "this",
		is: "is",
		a: "a",
		test: "test"
	});
}