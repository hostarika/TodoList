const darkBtn = document.getElementById("dark-btn");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const send = document.getElementById("add-btn");
const inputText = document.getElementById("input-text");
const todoList = document.getElementById("todo-list");






darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.length > 0) {
        sun.style.display = "block";
        moon.style.display = "none";
       
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
    }
});



send.addEventListener("click",()=>{
    if (inputText.value.trim().length<1) {
        alert("Nimadir narsa yozing")
    }else{
        const li =document.createElement("li")
        li.innerHTML=`            
        <input type="checkbox" id="check">
        <h2 class="todo-text">  ${inputText.value}</h2>
        <div class="btn-box">
            <button class="change-btn" id="change-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete-btn" id="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;


    todoList.appendChild(li)
    inputText.value="";
    }
})

