//main function
todoMain();

function todoMain() {
    const DEFAULT_OPTION = 'All';

//variables declaration
let inputElem,
    inputElem2,
    button,
    filterEl;

    //run function
    getElements();
    addListeners();

    //selecting html id and tag
    function getElements() {
        inputElem = document.getElementById('input1');
        inputElem2 = document.getElementById('input2');
        filterEl = document.getElementById('categoryFilter');
        button = document.getElementById('addBtn');
    }

    //click function
    function addListeners() {
        //buton add
        button.addEventListener('click', addEntry, false);
        //button filter
        filterEl.addEventListener('change', filterEntry, false);
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

         updateFilterOpt();

        function deleteItem() {
            //remove row
            trEl.remove();
            //delete category
            updateFilterOpt();
        }

        function done() {
            //toggle the checkbox styling
            trEl.classList.toggle('strike')
        }
    }

    function filterEntry() {
        //selecting row
        let rows = document.getElementsByTagName('tr');
        //select filter value
        let select = filterEl.value;

        if(select == DEFAULT_OPTION) {
            //show all tasks
            Array.from(rows).forEach((row) => {
                    row.style.display = '';    
            });
        } else {
            //show tasks based on category filter
            Array.from(rows).forEach((row, index) => {
                if(index == 0){
                    return;
                }
    
                //select value from 'td' element
                let category = row.getElementsByTagName('td')[2].innerText;
                //hide and show per category
                if(category == filterEl.value) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

    }

    function updateFilterOpt() {
        let opts = [];
        let rows = document.getElementsByTagName('tr');

        //show tasks based on category filter
        Array.from(rows).forEach((row, index) => {
            if(index == 0){
                return;
            }

            //select value from 'td' element
            let category = row.getElementsByTagName('td')[2].innerText;
            opts.push(category);
            
        });

        let optionSet = new Set(opts);
        //empty the selection
        filterEl.innerHTML = '';
        let newOptEl = document.createElement('option');
             newOptEl.value = DEFAULT_OPTION;
             newOptEl.innerText = DEFAULT_OPTION;
             filterEl.appendChild(newOptEl);

        for(let opt of optionSet) {
            let newOptEl = document.createElement('option');
             newOptEl.value = opt;
             newOptEl.innerText = opt;
             filterEl.appendChild(newOptEl);
        }
    }
}