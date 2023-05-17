//function para remover o elemento pai. Nesse caso, clicou no "remove button", a li será removida. Sacou?
function removerElementoPai(elemento){
    elemento.parentNode.remove();
}


//function dar check nas tasks. Clicou em "check", a li/task será alterada
function taskDone(elemento){
    elemento.parentNode.classList.add("task_done");
}

//function para desfazer o "check". Clicou novamente em "check", a class será removida.
function taskUndone(elemento){
    elemento.parentNode.classList.remove("task_done");
}



//function para adicionar uma task
function addTask(){
    let taskTitle = document.querySelector("input#inputTask").value; // pegamos o valor inputado

    //o Usuário precisar inputar alguma coisa
    if(taskTitle != ""){
        //clonamos a li padrao
        const liPadrao = document.querySelector(".task");
        const newTask = liPadrao.cloneNode(true);
        

        //acessamos o novo elemento, acessamos o span filho e alteramos o conteudo desse span.
        newTask.querySelector("span.texto").textContent = taskTitle;


        //removemos as classes desnecessarias
        newTask.classList.remove("hideElement");


        //adicionamos dentro da ul
        const ul = document.querySelector("ul");
        ul.appendChild(newTask);

        
        //limpamos o input
        document.querySelector("input#inputTask").value = "";



        //Removendo task -  Acessamos essa nova task, acessamos o "remove button" e criamos um evento pra ele
        const removeButton = newTask.querySelector(".deleteIcon");
        removeButton.addEventListener("click", function(){
            removerElementoPai(this);
        });


        //Check task -  Acessamos essa nova task, acessamos o "check button" e criamos um evento pra ele
        const checkButton = newTask.querySelector(".checkIcon");
        checkButton.addEventListener("click", function(){
            
            //Colocamos ou retiramos a class "task_done". Se o elemento já possuir, removemos. Se o elemento não possuir, adicionamos.
            checkButton.parentNode.classList.toggle("task_done");

            //OUTRA FORMA DE FAZER:
            //se a a task ja tiver sido concluida, removemos o "check"
            // if(checkButton.parentNode.classList.contains("task_done")){
            //     taskUndone(this);
            // }
            // //se nao, damos um "check"
            // else{
            //     taskDone(this);
            // }
        }); 
    }  
}



//Adicionando um evento "click" para o button "add task"
const addButton = document.querySelector("button.addButton");
addButton.addEventListener("click", function(){
    addTask();
});








   