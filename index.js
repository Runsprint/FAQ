let buttons = document.querySelectorAll(".butt");
let active = null;
 buttons.forEach (button =>{    //pARAGRAPH just name
        button.addEventListener("click", ()=>{ debugger
        button.style.color = "black";
        button.style.fontWeight = "bold";
        button.children[0].style.transform = "rotate(180deg)";
        button.nextElementSibling.style.display = "flex";
        if(active){
          active.style.color = "#4B4C5F"
          active.style.fontWeight = "400"
          active.children[0].style.transform = "rotate(0deg)";
          active.nextElementSibling.style.display = "none";  
        }
    
        active = button;
    })
    
})