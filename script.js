const lists = document.querySelectorAll('.lists');
const task = document.querySelector('.task');


//Adding addEventListeners
task.addEventListener('dragstart', dragStart);
task.addEventListener('dragend', dragEnd);

//Loop(lists functions)
for(const list of lists) {
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', drop);
}

//Functions for task
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'task';
}

//Functions for lists

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'lists';
}

function drop() {
    this.className = 'lists';
    this.append(task);
}

let Arr1 = [

    firstCard = {
        name: 'PythonScript',
        status: 'str',
        estimate: 'str'
    },

    secondCard = {
        name: 'Java++',
        status: 'str',
        estimate: 'str'
    },

    thirdCard = {
        name: 'CScript',
        status: 'str',
        estimate: 'str'
    }

]

function arraySort() {
    Arr1.forEach(element => console.log(element))
}

arraySort();
