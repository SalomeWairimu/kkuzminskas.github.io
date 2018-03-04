function checkUser() {
   var name = document.forms["logging-in"]["username-return"].value;
   var password = document.forms["logging-in"]["password-return"].value;
    if (name== "RocketMan")
    {
    	if(password=="ElonMusk")
    	{
    		document.getElementById('returning_User').action="homePage.html";
    	}
    	else
    	{
        document.getElementById('returning_User').action="login.html";
    		alert("Incorrect Username or password");
    	}
    }


    else if (name== "Fido")
    {
      if(password=="Treats")
      {
        document.getElementById('returning_User').action="homePage2.html";
      }
      else
      {
        document.getElementById('returning_User').action="login.html";
        alert("Incorrect Username or password");
      }
    }

    else {
      document.getElementById('returning_User').action="login.html";
      alert("Incorrect Username or password");
    }

}
