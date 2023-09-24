const searchbar = document.body.getElementsByClassName("search-bar")[0];
const listtaskul = document.body.getElementsByClassName("list-task-ul")[0];

searchbar.addEventListener("keyup",e=>{
    if(e.key == "Enter"){
        let searchinput = searchbar.value;
        let li = document.createElement("li");
        li.classList.add("list-task-li");
        li.classList.add("flex");
        li.innerHTML = searchinput
        listtaskul.appendChild(li);
    }
})