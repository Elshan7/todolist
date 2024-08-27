// new Task Todo list

// Todo List yaradacaqsiniz Todo elave edin 
// hissesine kliklediyinizde listeye add olunmalidi butun todolari temizle hissene 
// klikledyimizde butun todolar silinmelidi pen(qelem) hissesine kliklediyimizde ise 
// tododaki contenti deyisdireceyimiz bir pencere (modal) yarada bilersiz elave olaraq
//  x duymesini klilklediyimizde todo silinmelidi todolist axtarma hissesnide hansi
//  todolistimizi axtaririqsa onu neticede vermelidi elave olaraq hansi todolistimiz 
// eger tamamlanibsa (yeni o listdeki todo artiq edilibse) uzerinde kliklediyimizde 
// backgroundu yasil olmali ve content sozun 
// uzerinde xett cekilmelidi 

// QEYD: todolariniz sehife refresh oldugunda, yeni komp yanib sonduyunde silinmemelidi
// bunun ucun localstorageden isdifade ede bilersiz. 



const todoAddForm = document.querySelector("#todoAddForm");
const todoInput = document.querySelector("#todoName");
const listgrop = document.querySelector(".list-group");
const searchInput = document.querySelector("#todoSearch")
const liTags = document.querySelectorAll("li");

let dataBig = JSON.parse(localStorage.getItem('todos')) || [];
addTodo(dataBig);

todoAddForm.addEventListener("submit", getForm);



function getForm(e) {
    e.preventDefault()
    dataBig.push(todoInput.value)
    addTodo(dataBig)
    console.log(dataBig);
    todoInput.value = ""
}


function addTodo(data) {
    listgrop.innerHTML = ""
    data.map((item,index) => {
        listgrop.innerHTML += `
         <li class="list-group-item d-flex justify-content-between">${item}
         <div class="d-flex  align-items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" id = "pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg>
                            <a href="#" onclick ="removeTodo(${index})" class="delete-item mx-3">
                                 <i class="fa fa-remove " id ="remove" ></i>
                            </a>
         </div>
                        </li>
        `
    })

    document.querySelectorAll('.list-group-item').forEach(li => {
        li.addEventListener('click', () => {
            li.style.backgroundColor = 'greenyellow'; 
            li.style.textDecoration = 'line-through';
        });
    });

   
}


document.getElementById("todoClearButton").addEventListener("click", totalTrash)
function totalTrash() {
    dataBig = []
    addTodo(dataBig)
}


function removeTodo(index) {
dataBig.splice(index, 1);
addTodo(dataBig);  
}


searchInput.addEventListener("input", getValue);

function getValue() {
    const value = searchInput.value.toLowerCase();
    const filterData = dataBig.filter(item => item.toLowerCase().includes(value));
    addTodo(filterData);
}

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(dataBig));
}

 
