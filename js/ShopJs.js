// Author: Eoin Ocathasaigh, Darragh Mulvihill
//Quantity of the Products
function add(quantity){
    if(quantity == 1){
        sessionStorage.qty1 = document.getElementById("qty1").value;
    }else if(quantity == 2){
        sessionStorage.qty2 = document.getElementById("qty2").value;
    }else if(quantity == 3){
        sessionStorage.qty3 = document.getElementById("qty3").value;
    }else if(quantity == 4){
        sessionStorage.qty4 = document.getElementById("qty4").value;
    }
    alert("Order added to cart");
}