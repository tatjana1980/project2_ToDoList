// подготовим пустой массив для сбора заданий
let ArrayOfTask = [];
let addTaskText = document.querySelector('.add-task');
let buttonAddTask = document.querySelector('.button-add-task');
let taskList = document.querySelector('.task-list');

// заполняем массив новыми заданиями
function addTask(newTask) {
    ArrayOfTask.push(newTask);
}

// создаем блок для хрвнения задания
const createTaskList = (task) => {
    return (`
    <div class = 'add-task-list'>
        <p class = 'task-text'>${task}</p>
        <button class='button-remove-task'></button>
    </div>
   `);
};
// функция для создания списка заданий
const displayTasksList = () => {
    taskList.innerHTML = "";
    if (ArrayOfTask.length > 0) {
        ArrayOfTask.forEach((task, index) => {
            taskList.innerHTML += createTaskList(task);
        })
    }
    // удаляем выполнение задании при нажатии на кнопку button-remove-task
    let buttonRemoveTask = document.querySelectorAll(".button-remove-task");

    for (let i = 0; i < buttonRemoveTask.length; i++) {
        buttonRemoveTask[i].addEventListener("click", () => {
            let removeTask = buttonRemoveTask[i].previousElementSibling.textContent;
            buttonRemoveTask[i].parentElement.remove();
            ArrayOfTask = ArrayOfTask.filter(item => item !== removeTask);
            // console.log(taskArray);
        });
    }
};

// делаем кнопку для input нерабочей 
let buttonRemove = document.querySelector(".button-remove");
buttonRemove.addEventListener('click', (event) => {
    event.preventDefault();
});

// работа кнопки button-add-task (добавить)
buttonAddTask.addEventListener("click", () => {
    addTask(addTaskText.value);
    displayTasksList();
    addTaskText.value = "";
});

// сортировка To-Do List
const buttonSort = document.querySelector('.button-sort');
let flagSortUp = true;

buttonSort.addEventListener('click', (event) => {
    event.preventDefault();
    // сортировка по алфавиту
    if (flagSortUp) {
        buttonSort.style.backgroundImage = 'url(image/sort_up.svg)';
        flagSortUp = false;
        ArrayOfTask.sort();
        displayTasksList();
    } else { 
        buttonSort.style.backgroundImage = 'url(image/sort_down.svg)';
        flagSortUp = true;
        ArrayOfTask.sort().reverse();
        displayTasksList();
    }
    // console.log(ArrayOfTask);
});

// изменение фона кнопки сортировки при отведении курсора
buttonSort.addEventListener('mouseout', () => {
    if (flagSortUp) {
        buttonSort.style.backgroundImage = 'url(image/sort_down_light.svg)';
    } else {
        buttonSort.style.backgroundImage = 'url(image/sort_up_light.svg)';
    }
});

// изменение фона кнопки сортировки при наведении курсора
buttonSort.addEventListener('mouseover', () => {
    if (flagSortUp) {
        buttonSort.style.backgroundImage = 'url(image/sort_down.svg)';
    } else {
        buttonSort.style.backgroundImage = 'url(image/sort_up.svg)';
    }
});


