// Author:Cian Hughes, Eoin Ocathasaigh, Darragh Mulvihill

let usernames = localStorage.username;
let currentAccountNum1 = localStorage.currentAccountsNum;
if(currentAccountNum1 > -1){
  //updata the sign in button to a dropdown button that displays the username
  document.getElementById("username").innerHTML = "<li class='nav-item dropdown'> <a class='nav-link text-dark bg-light border border-light rounded dropdown-toggle' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> "+ usernames +" </a> <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'> <a type='button' onclick='LogOutAccount()' class='dropdown-item'>Log Out</a> </div> </li>";
}

function LogOutAccount() {
  localStorage.username = ""
  localStorage.currentAccountsNum = -1
  location.href = "HomePage.html";
}