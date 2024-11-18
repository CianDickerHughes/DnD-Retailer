// Author:Cian Hughes, Eoin Ocathasaigh, Darragh Mulvihill

// emails and passwords for account;
let emails = ["bob@dnd.ie", "alice@dnd.ie", "john@dnd.ie"];
let passwords = ["abcdefgh", "01234567", "a2c4e6h8"];
let username1 = ["Bob", "Alice", "John"];
let currentAccountNum = -1;

// if new account made and add to the array
emails.push(localStorage.NewUserEmail);
passwords.push(localStorage.Newpassword);
username1.push(localStorage.NewUserName);

// check if account is valid
function validateAccount(){
    let emailSignIn = document.getElementById("userEmail").value;
    let passwordSignIn  = document.getElementById("userPassword").value;
    

    for(let i = 0; i < emails.length; i++){
        if(emailSignIn == emails[i] && passwordSignIn == passwords[i]){
            currentAccountNum = i;
            localStorage.currentAccountsNum = currentAccountNum;
            localStorage.username = username1[i];
            location.href = "HomePage.html";
        }else{}
    }
    if(currentAccountNum < 0){
        alert("Incorrect email or password");
    }
}

function newAccount(){
    let isValid = 0 ;
    let emailSignUp = document.getElementById("userEmail").value;
     //check if email is valid
     var at = "@";
     var dot = ".";
     let emailAt = emailSignUp.indexOf(at);
     let emailDot = emailSignUp.indexOf(dot);
     if( emailAt == -1 || emailDot == -1){
         alert("You have entered an invalid email address!");
     }
     else{
        isValid = isValid + 1;
     }

    let username2 = document.getElementById("usernameSignUp").value;
    //if username has 8 or more characters
    if (username2.length < 3) {
        alert("Name must have 3 characters");
    } else { isValid = isValid + 1;}

    let passwordSignUp1 = document.getElementById("userPassword1").value;
    let passwordSignUp2 = document.getElementById("userPassword2").value;
    //password
    //if password has 8 or more characters
    if (passwordSignUp1.length < 8) {
        alert("Password must have 8 characters");
    } else { isValid = isValid + 1;}
    //if password1 and password2 is the same
    if (passwordSignUp1 == passwordSignUp2) {
        isValid = isValid + 1;
    } else{
        alert("Password must be the same");
    }	
    
    // check if all validation is true
    if(isValid == 4){
        localStorage.NewUserName = username2;
        localStorage.NewUserEmail = emailSignUp;
        localStorage.Newpassword= passwordSignUp1;

        location.href = "SignInPage.html";        
        return true;
    }    
}