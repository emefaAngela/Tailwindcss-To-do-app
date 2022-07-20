var list = document.getElementById("lists");
var addInput = document.getElementById("to-do-input");

function createTodo(){
    var text = addInput.value;

    if (text === ""){
        return;
    }

    var hr = document.createElement("hr");
    hr.classList.add("hr");

    var li = document.createElement("li");
    li.classList.add("list");

    var checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type=("checkbox");

    var paragraph= document.createElement("p");
    paragraph.classList.add("input-field");
    paragraph.textContent = text;

    var removebtn = document.createElement("div");
    removebtn.classList.add("remove");
    removebtn.innerHTML ="&cross;";

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(removebtn);
    list.appendChild(hr);
    list.appendChild(li);

    addInput.value = "";

}

function removeTodo(removeElement){
removeElement.parentElement.remove();
}

function toggleComplete(inputElement){
    if(inputElement.checked === false){
        inputElement.parentElement.classList.remove("complete");
    } else{
        inputElement.parentElement.classList.add("complete");
    }

}

list.addEventListener("click",function(event){

    switch (event.target.tagName){
        case "P":
            showEditInput();
            break;
        case "DIV":
            removeTodo(event.target);
            break;
        
    }
}

);

list.addEventListener("change", function(event){
    if(event.target.tagName === "INPUT" && event.target.type === "checkbox" ){
        toggleComplete(event.target);
    }

});


addInput.addEventListener("keypress",function(event){
    if( event.key === "Enter"){
        createTodo();
    }
}

);