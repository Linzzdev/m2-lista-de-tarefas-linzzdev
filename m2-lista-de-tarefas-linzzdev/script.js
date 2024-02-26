const buttonAdd = document.getElementsByClassName("form__button--add-task")[0];  
let task = [
];



buttonAdd.addEventListener("click", function(evt){
  const tipo = document.getElementsByTagName("select")[0].value;
  const titulo = document.getElementById("input_title").value;
  console.log(task)
  evt.preventDefault()
  return createTaskItem(tipo,titulo)


}); 
window.onload = function(){
  let localTasks = JSON.parse(localStorage.getItem("tasks"))
  for(let i = 0; i < localTasks.length; i++){
    let{titulo,tipo,id} = localTasks[i]
    let li = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let p = document.createElement("p");
    let button= document.createElement("button")
  
  
  
  
    button.setAttribute("onclick","deleteTask("+id+")");
      
  
    li.classList.add ("task__item");
    div.classList.add  ("task-info__container");
    span.classList.add  ("task-tipo");
    button.classList.add   ("task__button--remove-task");
  
    p.innerText = (titulo)
  
      switch(tipo){
        case "urgente":
        span.classList.add  ("span-urgent");
        span.style.backgroundColor = "red";
          break;
        case "importante":
          span.classList.add  ("span-important");
          span.style.backgroundColor = "yellow";
        break;
        case "normal":
            span.classList.add  ("span-normal");
            span.style.backgroundColor = "green";
        break;
    }
    li.setAttribute("id",id)
  
  
  
    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(button);
    ul.appendChild(li);
  }
  task = localTasks
 }

let ul = document.getElementsByClassName("tasks__list")[0];


function deleteTask(id){
  for(let i = 0; i< task.length; i++){
    if (task[i].id == id ){
      task.splice(i,1)
      document.getElementById(id).remove()
      break;
    }
    
}
localStorage.setItem("tasks",JSON.stringify(task))
}

function createTaskItem(type,title){
  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let button= document.createElement("button")
  let id = new Date().getTime();




  button.setAttribute("onclick","deleteTask("+id+")");
    

  li.classList.add ("task__item");
  div.classList.add  ("task-info__container");
  span.classList.add  ("task-tipo");
  button.classList.add   ("task__button--remove-task");

  p.innerText = (title)

    switch(type){
      case "":
        alert("Você precisa adicionar o tipo ")
        return console.error();
      case "urgente":
      span.classList.add  ("span-urgent");
      span.style.backgroundColor = "red";
        break;
      case "importante":
        span.classList.add  ("span-important");
        span.style.backgroundColor = "yellow";
      break;
      case "normal":
          span.classList.add  ("span-normal");
          span.style.backgroundColor = "green";
      break;
  }
  li.setAttribute("id",id)



  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);
  ul.appendChild(li);



  task.push({tipo: type, titulo:title, id:id})
  localStorage.setItem("tasks",JSON.stringify(task))
  return li;
}