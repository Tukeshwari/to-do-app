let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
form.addEventListener("submit", (e) =>{
e.preventDefault();
formValidation();
})

let formValidation = ()=>{
    if(textInput.value == ""){
        console.log("failure");
        msg.innerHTML= "Task cannot be blank"
    }
    else{
        console.log("success");
        msg.innerHTML= "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (()=>{
            add.setAttribute("data-bs-dismiss", "none");
        })()
    }
};

let data = {};
let acceptData = () =>{
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    console.log(data);
    createTask();
    resetForm();
};

let createTask = () =>{
    tasks.innerHTML += `<div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
     <i data-bs-toggle="modal" data-bs-target="#form" onclick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
     <i onclick="deleteTask(this)" class="fa-solid fa-trash-can"></i> 
    </span>
</div>`;
};

let resetForm = () =>{
    textInput.value ="";
    dateInput.value ="";
    textarea.value = "";
};
 
let deleteTask = (e) =>{
    e.parentElement.parentElement.remove();
};
let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
    selectedTask.remove();
};