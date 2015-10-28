function validateForm() {
    var x = document.forms["memberform"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
	
	var x = document.forms["memberform"]["email"].value;
    if (x == null || x == "") {
        alert("Email must be filled out");
        return false;
    }
	
	var x = document.forms["memberform"]["number"].value;
    if (x == null || x == "") {
        alert("Number must be filled out");
        return false;
    }
	
	var x = document.forms["memberform"]["address"].value;
    if (x == null || x == "") {
        alert("Address must be filled out");
        return false;
    }
	
	var x = document.forms["memberform"]["address"].value;
    if (x == null || x == "") {
        alert("Address must be filled out");
        return false;
    }
	
	var x = document.forms["memberform"].value;
    if (
	memberform.adult.checked == false &&
	memberform.student.checked == false &&
	memberform.family.checked == false &&
	memberform.concession.checked == false) 
	{
		alert ('You havent selected a membership type');
		return false;
	} else { 	
		return true;
	}
	
}
