document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  // email
  const exampleInputEmail1 = document.getElementById("exampleInputEmail1");
  const inputValue = exampleInputEmail1.value;
  // password

  const exampleInputPassword1 = document.getElementById(
    "exampleInputPassword1"
  );
  const passValue = exampleInputPassword1.value;

  // regular expression
  const emailregEX =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const passRegEx =
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

  if (!inputValue || !passValue) {
    return alert("Email and password field cannot be empty");
    }
    
    if (emailregEX.test(inputValue) && passRegEx.test(passValue)) {
    //   email 
    document.getElementById("emailValidrightText").classList.remove("d-none");
        document.getElementById("emailValidWrongText").classList.add("d-none");
        // pass 
    document.getElementById("passValidrightText").classList.remove("d-none");
    document.getElementById("passValidWrongText").classList.add("d-none");
    document.getElementById("pass").classList.add("d-none");
    } else {
        // email 
    document.getElementById("emailValidWrongText").classList.remove("d-none");
        document.getElementById("emailValidrightText").classList.add("d-none");
        // pass 
    document.getElementById("passValidrightText").classList.add("d-none");
    document.getElementById("passValidWrongText").classList.remove("d-none");
    document.getElementById("pass").classList.remove("d-none");
  }
});
