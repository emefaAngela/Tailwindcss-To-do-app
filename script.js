// let element_to_drag;
// let element_to_replace;

// const startdrag = (event) =>{
// let element= event.target;
// element_to_drag = element;
// console.log(element_to_drag);
// }

// const replaceitem =(event) =>{
//    let element = event.target;
//    element_to_replace= element;  
// }

// // const dragover =(event) =>{
// //     event.preventdefault();
// // }
// const replace =() =>{
//    let container=document.getElementById("lists"); 
//    console.log("kofi");   
//    container.insertBefore(element_to_replace,element_to_drag)
// }






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
    li.draggable='true';
    // li.ondragover=dragover;
    li.addEventListener('dragstart',startdrag);
    // li.dragstart=startdrag(event);
    li.addEventListener('dragenter',replaceitem);
    // li.ondragenter=replaceitem(event);
    li.addEventListener('dragover',drag_over);
    li.addEventListener('drop',replace);
    // li.ondrop=replace;
   

    var li_container = document.createElement("div");
    li_container.classList.add("inner-container");

    var checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type=("checkbox");

    var paragraph= document.createElement("p");
    paragraph.classList.add("input-field");
    paragraph.textContent = text;

    var removebtn = document.createElement("div");
    removebtn.classList.add("remove");
    removebtn.innerHTML ="&cross;";

    li_container.appendChild(checkbox);
    li_container.appendChild(paragraph);
    li_container.appendChild(removebtn);
    li.appendChild(hr);
    li.appendChild(li_container);
    list.appendChild(li);
    

    addInput.value = "";


   

}

 let element_to_drag;
 let element_to_replace;

const startdrag = (event) =>{
 let element= event.target;
 element_to_drag = element;
}

const replaceitem =(event) =>{
    let element = event.target;
    element_to_replace= element;  
}

const drag_over =(event) =>{
    event.preventdefault();
}
const replace =() =>{
    let container=document.getElementById("lists"); 
    console.log("kofi");   
    container.insertBefore(element_to_replace,element_to_drag);
}





var togglebtn= document.getElementById("toggle");
var body= document.querySelector("body");
var field=document.getElementById("text-field");
var input=document.getElementById("to-do-input");
var img=document.getElementById("bgimage");
var list=document.getElementById("lists");

togglebtn.addEventListener('click',function changemode(){
   this.classList.add('togglemode');
   body.style.background='white';
   body.style.color='black';
  
    field.classList.add('hidden');
   input.classList.remove('input-field');
   input.classList.add('input-field-white');
   img.setAttribute('src','images/bg-desktop-white.jpg');
   
});

// function showEditInput(paragraphElement){

//     var editInput = document.getElementsByName("editInput")[0];
//     if(editInput){
//         editInput.remove();
//     }

//     var input= document.createElement("input");
//     input.type ="text";
//     input.name ="edittask";
//     input.value = paragraphElement.textContent;
//     input.classList.add("input-field");

//     paragraphElement.parentElement.appendChild(input);
//     input.focus();


// }

// function updateTodo(){
//     var editInput = document.getElementsByName("editInput")[0];
//     if(!editInput){
//         return;
//     }
//     var newText = editInput.value;

//     if(newText !== ""){
//         var paragraph = editInput.parentElement.querySelector(".paragraph");
//         paragraph.textContent = newText;
//     }
//     editInput.remove();

// }

function removeTodo(removeElement){
removeElement.parentElement.parentElement.remove();
}

function toggleComplete(inputElement){
    if(inputElement.checked === false){
        inputElement.classList.remove("complete");
    } else{
        inputElement.classList.add("complete");
    }

}

list.addEventListener("click",function(event){

    event.stopPropagation();

    switch (event.target.tagName){
        case "P":
            showEditInput(event.target);
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

// list.addEventListener("keypress", function(event){
//     if(event.target.tagName === "Input" && event.target.type === "text" && event.key === "Enter" ){
//         updateTodo();
//     }
// });

// document.addEventListener("click",updateTodo);



addInput.addEventListener("keypress",function(event){
    event.stopPropagation();
    if( event.key === "Enter"){
        createTodo();
    }
}

);