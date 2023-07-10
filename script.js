const container = document.querySelector('.container');
const form = document.querySelector('form')
const title = document.getElementById('title');
const description = document.getElementById('description');

const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[];

showAllTasks();

function showAllTasks(){
    tasks.forEach((element,index) => {
        const div = document.createElement('div')
        div.setAttribute('class','task')

        const innerdiv = document.createElement('div')
        div.appendChild(innerdiv)

        const p = document.createElement('p')
        p.innerText = element.title
        innerdiv.append(p)
        console.log(p)

        const span = document.createElement('span')
        span.innerHTML = element.description
        innerdiv.append(span)

        const btn = document.createElement('button')
        btn.setAttribute('class','deleteBtn')
        btn.innerText = "-";
        div.append(btn)

        container.append(div)

        btn.addEventListener('click',()=>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks))
            showAllTasks();
        })
    });
}


function removeTasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task")
        div.remove();
    })
}




form.addEventListener("submit",(e)=>{
    //the page will be not reloaded by default.
    e.preventDefault();

    removeTasks();
    tasks.push({
        title:title.value,
        description: description.value
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
    showAllTasks();

    // after showing the input field should be clear
    title.value = ""
    description.value = ""
})




