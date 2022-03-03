todoMain();

function todoMain() {
let inputElem,
    inputElem2,
    button,
    ulElem;

    getElements();
    addListeners();

    function getElements() {
        inputElem = document.getElementById('input1');
        inputElem2 = document.getElementById('input2');
        ulElem = document.getElementsByTagName('ul')[0];
        button = document.getElementById('addBtn');
    }

    function addListeners() {
        // button.addEventListener('click', onChange, false);
        button.addEventListener('click', addEntry, false);
    }

    //function onChange (event)
    function addEntry() {
        // let flag = true;
        
        let inputValue = inputElem.value;
        inputElem.value = '';
        let inputValue2 = inputElem2.value;
        inputElem2.value = '';

                    // ulElem.innerHTML += `<li>${inputValue}</li>`;
        // let liElem = document.createElement('li');

        // let checkboxElem = document.createElement('input');
        // checkboxElem.type = 'checkbox';
        // liElem.appendChild(checkboxElem);
        // let textElem = document.createElement('span');
        // textElem.innerText = inputValue + " - " + inputValue2;
        // liElem.appendChild(textElem);


        //             // liElem.innerText = inputValue;
        //             // liElem.addEventListener('click', onClick, false);

        // let spanElem = document.createElement('span');
        // spanElem.innerText = 'delete';
        // spanElem.className = 'material-icons';

        // spanElem.addEventListener('click', deleteItem, false);

        // liElem.appendChild(spanElem);
        // ulElem.appendChild(liElem);


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
            // if(flag) {
            //     // this.style.textDecoration = 'line-through';
            //     this.classList.add('strike');
            //     flag = !flag;
            // } else {
            //     // this.style.textDecoration = 'none';
            //     this.classList.remove('strike');
            //     flag = !flag;
            // }

            trEl.classList.toggle('strike')
        }
    }
}