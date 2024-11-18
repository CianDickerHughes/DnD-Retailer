// Author: Eoin Ocathasaigh, Cian Dicker-Hughes, Darragh Mulvihill

let totalcost;

function read(){
    let diceSet = sessionStorage.qty1; 
    let diceMat = sessionStorage.qty2; 
    let essentialsKit = sessionStorage.qty3;
    let diceBag = sessionStorage.qty4;

    // check if variables not undefined
    if(typeof diceSet === 'undefined')
    {diceSet = 0;}    
    if(typeof diceMat === 'undefined')
    {diceMat = 0;}    
    if(typeof essentialsKit === 'undefined')
    {essentialsKit = 0;} 
    if(typeof diceBag === 'undefined')
    {diceBag = 0;}       

    //alert("Order details extracted from web storage and displayed in table");
    // get quantity for each Products
    document.getElementById("qty1").textContent = diceSet;
    document.getElementById("qty2").textContent = diceMat;
    document.getElementById("qty3").textContent = essentialsKit;
    document.getElementById("qty4").textContent = diceBag;
    
    // get cost of all Products
    document.getElementById("total1").textContent = diceSet * 8.99;
    document.getElementById("total2").textContent = diceMat * 11.99;
    document.getElementById("total3").textContent = essentialsKit * 19.99;
    document.getElementById("total4").textContent = diceBag * 11.99;

    // get total cost
    totalcost =(diceSet * 8.99) + (diceMat * 11.99) + (essentialsKit * 19.99) + (diceBag * 11.99);
    totalcost = totalcost.toFixed(2);
    document.getElementById("total").textContent = totalcost;
}	
read();

// updata the if user is sign in and get 10% discount 
if(currentAccountNum1 > -1){
    // get discount
    let discount1 = totalcost * 0.10;
    let discountCost = totalcost - discount1;
    
    // round to two decimal places
    discount1 = discount1.toFixed(2);
    discountCost = discountCost.toFixed(2);

    //discount
    document.getElementById("discount").innerHTML = "<td colspan='2'>10% Discount</td><td colspan='2'>You are saving "+ discount1 +"</td><td>=</td>";
    document.getElementById("total").textContent = discountCost;
  }