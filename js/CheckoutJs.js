// Author:Cian Hughes
let isValid = 0;   
// check if all details are filled out
function validateCheckout(){
     isValid = 0;    

// billing address
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    // check if name filled in
    if(isNaN(FirstName) && isNaN(LastName)){
        isValid++;
    }
    else{
        alert("Please entered your First and Last Name.");
    } 

    let address1 = document.getElementById("address1").value;
    let address2 = document.getElementById("address2").value;
    // check if address is filled out
    if(isNaN(address1) || isNaN(address2)){
        isValid++;
    }
    else{
        alert("Please entered your Address");
    } 

    let country = document.getElementById("country").value;
    // check if country is selected
    if(country > 0){
        isValid++;
    }
    else{
        alert("Please select a Country")
    }

    let county = document.getElementById("county").value;
    // check if county is filled out
    if(isNaN(county)){
        isValid++;
    }
    else{
        alert("Please entered a County");
    } 

    let eircode = document.getElementById("eircode").value;
    // check if Eircode/Postcode is filled out
    if(isNaN(eircode)){
        isValid++;
    }
    else{
        alert("Please entered your Eircode/Postcode");
    }

// payment
    let cardNumbe = document.getElementById("cardNumber").value;
    // check if if card number
    if(cardNumbe.length >= 16){
        isValid++;
    }
    else{
        alert("Please entered your Card Number");
    }

    let expirationDate = document.getElementById("expirationDate").value;
    // check if if card number
    if(isNaN(expirationDate)){
        isValid++;
    }
    else{
        alert("Please entered the Expiration Date of your Card");
    }

    let cvv = document.getElementById("cvv").value;
    // check if if card number
    if(cvv.length >= 3){
        isValid++;
    }
    else{
        alert("Please entered the CVV Number of your Card");
    }

    if(isValid == 8){
        alert("That you for Buying from the DnD Store. \n\n sending you back to the Home Page.")
        location.href = "HomePage.html";        
        return true;
    }    
    
}
