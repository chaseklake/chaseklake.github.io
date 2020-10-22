function menuSwitch() {
    var menuTxt = document.getElementById("menuBtn");
    var menuList = document.getElementById("menu");    
    if (menuList.className == "menuOff") {   
        menuList.className = "menuOn";
        menuTxt.textContent = "<";   
    } else {
        menuList.className = "menuOff";   
        menuTxt.textContent = ">"; 
    }    
} 