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

    var checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");

    var paragraph= document.createElement("div");
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


addInput.addEventListener("keypress",function(event){
    if( event.key === "Enter"){
        createTodo();
    }
}

);