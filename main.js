var todos = ["Buy Milk", "Go Shopping"];

function addTodo(todo) {
     todos.push(todo);
}

var input = document.querySelector("#todoInput")
var ul = document.querySelector(".todolist")
var button = document.querySelector("button")

button.addEventListener("click", (event) => {
    const inputValue = input.value
    addTodo(inputValue);
    addToLi();
})

function addToLi(){
ul.innerHTML = ""
    todos.forEach(todo => {
        var li = document.createElement("li")
        console.log(li)
        li.innerHTML =  "<h1>"+ todo + "</h1>" 
        ul.appendChild(li);
    })
}

function init() {
    
    addToLi()

}
init();

console.log(todos)