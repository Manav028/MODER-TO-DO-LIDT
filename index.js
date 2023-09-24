const searchbar = document.body.getElementsByClassName("search-bar")[0];
const listtaskul = document.body.getElementsByClassName("list-task-ul")[0];

searchbar.addEventListener("keyup",e=>{
    let usertask = searchbar.value.trim();
    if(e.key == "Enter"){
        let todos = localStorage.getItem("todo-list")
        if(!todos){
            todos=[];
        }
        let taskinfo = {name: usertask,status: "pending"}
        todos.push(taskinfo);
        localStorage.setItem("todo-list",JSON.stringify(todos))
    }
})