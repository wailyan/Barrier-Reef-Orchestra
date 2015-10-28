function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
	
	var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {
        alert("Email must be filled out");
        return false;
    }
	
	var x = document.forms["form"]["number"].value;
    if (x == null || x == "") {
        alert("Number must be filled out");
        return false;
    }
	
	var x = document.forms["form"]["text"].value;
    if (x == null || x == "") {
        alert("You have not filled out any comments.");
        return false;
    }
	
	
}
