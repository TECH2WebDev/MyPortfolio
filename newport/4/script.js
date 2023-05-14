
let start = document.getElementsByClassName("start")[0]
let taskmenu = document.getElementsByClassName("taskmenu")[0]
 
start.addEventListener("click", ()=>
{
    console.log("clicked");
    if(taskmenu.style.bottom == "45px"){
        taskmenu.style.bottom = "-655px"
    }
    else{
        taskmenu.style.bottom = "45px"
    }
})

