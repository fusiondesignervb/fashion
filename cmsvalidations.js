//ALLOW ONLY ALPHABETS
 function onlyAlphabets(e, t) {
			try {
			
                if (window.event) {
					
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
				
				if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)|| (charCode==32)|| (charCode==8))
                    return true;
                else
                    return false;
				
			
				}

            catch (err) {

                alert(err.Description);

            }

        }
//ALPHANUMBER VALIDATION
	function onlyAlphaNum(e, t) {
			try {
			
                if (window.event) {
					
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }
				
				if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)|| (charCode==32)|| (charCode==8)||(charCode > 47 && charCode < 58))
                    return true;
                else
                    return false;
				
			
				}

            catch (err) {

                alert(err.Description);

            }

        }	
//BOTTOM TO TOP CODING

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    }); 
});
//TO CHECK PASSWORD AND CONFIRM PASSWORD
function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
    }
} 

// EMAIL VALIDATION
function emailvalid() 
{
	
	var x = regform.emailid.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
		f1.emailid.value="";
		f1.emailid.focus();
        return false;
    }
	
}

// CONFIRMATION FOR DELETE OPERATION
function del()
{
	if(confirm("Do you really want to delete this record??"))	
	{
		return true;	
	}
	else
	{
		return false;	
	}
}
