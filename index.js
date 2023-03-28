// let buttons = document.querySelectorAll(".butt");
// let active = null;
//  buttons.forEach (button =>{    //button just name
//         button.addEventListener("click", ()=>{ debugger
//         button.style.color = "black";
//         button.style.fontWeight = "bold";
//         button.children[0].style.transform = "rotate(180deg)";
//         button.nextElementSibling.style.display = "flex";    // we wrote this code and didnt work if we clicked 2 timens active and chatGPT fixed this problem andhave next code
//         if(active){
//           active.style.color = "#4B4C5F"
//           active.style.fontWeight = "400"
//           active.children[0].style.transform = "rotate(0deg)";
//           active.nextElementSibling.style.display = "none";  
//         }
//     })
    
// })
let buttons = document.querySelectorAll(".butt");
let active = null;


buttons.forEach(button => {
  button.addEventListener("click", () => { debugger
    if (button === active) {
      // if the clicked button is the active button,
      // toggle its state by resetting the active variable to null
      //this will do if active== active when clicked 2 times same button
      active.style.color = "#4B4C5F"
      active.style.fontWeight = "400"
      active.children[0].style.transform = "rotate(0deg)";
      active.nextElementSibling.style.display = "none";
      active = null;
    } else {
      // if the clicked button is not the active button,
      // update the active variable and apply the active state to the button
      button.style.color = "black";
      button.style.fontWeight = "bold";
      button.children[0].style.transform = "rotate(180deg)";
      button.nextElementSibling.style.display = "flex";
      // this if we need for if active is another button , it will turn on and last ective will turn off 
      if(active){
          active.style.color = "#4B4C5F"
          active.style.fontWeight = "400"
          active.children[0].style.transform = "rotate(0deg)";
          active.nextElementSibling.style.display = "none";  
          // toggleActive(active);
        }
      active = button;
    }
  })
});