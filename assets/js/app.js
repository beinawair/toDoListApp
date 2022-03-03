//main function
todoMain();

function todoMain() {
//variables declaration
let inputElem,
    inputElem2,
    button,
    ulElem;

    getElements();
    addListeners();

    //selecting html id and tag
    function getElements() {
        inputElem = document.getElementById('input1');
        inputElem2 = document.getElementById('input2');
        ulElem = document.getElementsByTagName('ul')[0];
        button = document.getElementById('addBtn');
    }

    //click function
    function addListeners() {
        button.addEventListener('click', addEntry, false);
    }

    //add new task function
    function addEntry() {
        //collecting input value
        let inputValue = inputElem.value;
        inputElem.value = '';
        let inputValue2 = inputElem2.value;
        inputElem2.value = '';

        //add new row
        let table = document.getElementById('todo-table')
        let trEl = document.createElement('tr')
        table.appendChild(trEl);
       
        //checkbox cell
        let checkboxEl = document.createElement('input')
        checkboxEl.type = 'checkbox';
        checkboxEl.addEventListener('click', done, false);
        let tdEl01 = document.createElement('td');
        tdEl01.appendChild(checkboxEl);
        trEl.appendChild(tdEl01);

        //to-do cell
         let tdEl02 = document.createElement('td');
         tdEl02.classList.add('task');
         tdEl02.innerText = inputValue;
         trEl.appendChild(tdEl02);

         //category cell
         let tdEl03 = document.createElement('td');
         tdEl03.innerText = inputValue2;
         trEl.appendChild(tdEl03);

         //delete cell
         let spanEl = document.createElement('span');
         spanEl.innerText = 'clear';
         spanEl.className = 'material-icons';
         spanEl.addEventListener('click', deleteItem, false);
         let tdEl04 = document.createElement('td');
         tdEl04.appendChild(spanEl);
         trEl.appendChild(tdEl04);

        function deleteItem() {
            trEl.remove();
        }

        function done() {

            trEl.classList.toggle('strike')
        }
    }
}