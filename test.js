let toDoListArray = JSON.parse(localStorage.getItem('savedList')); // The Array of objects will display the data before and after the any operation permanently.
divText(); // Call the function outside in order for the LocalStorage to be updated.



function divText(){
// Loop through every value of the array
// Turn the values into paragraphs to put inside <div> (12)
// Store the values inside a accumulator variable (13)
// Add a delete button to the html (12)
    let todoListHTML = ''; // an empty variable to store the accumulated HTML below.
    
    for (let i = 0; i < toDoListArray.length; i++){
        // ToDoListArray is no longer an array of string.
        // It is an array of objects with 2 properties.
        // Extract it's properties values and put inside variables

        let todoObject = toDoListArray[i];
        let verb = todoObject.verb;
        let example= todoObject.example;
        let noun= todoObject.noun;
        let todoListNames = `
        <div>${verb}</div>
        <div>${example}</div>
        <div>${noun}</div>
        <button onclick="
                toDoListArray.splice(${i},1);
                divText();
        " class="js-button-css">Delete</button>
        `; // The generated HTML
        todoListHTML += todoListNames ; // HTML accumulator
    }

    localStorage.setItem('savedList', JSON.stringify(toDoListArray)); // Store the list of objects inside a localStorage.
    document.querySelector('.js-todo-list')
        .innerHTML =  todoListHTML;                                   // Add the generated html to the variable every time the button is clicked
        return (JSON.parse(localStorage.getItem('savedList')))        // Return the saved list outside of the function.
}

// Collect the input value & store it inside a variable (8)
// Make the value empty after button is clicked (10)

function addTask(){
    const inputElement = document.querySelector('.js-input');
    const verb = inputElement.value;

    const inputExampleElement = document.querySelector('.js-duedate');
    const example = inputExampleElement.value;

    const inputNounElement = document.querySelector('.js-noun');
    const noun = inputNounElement.value;

    if (verb !== '' && example !== ''){
    toDoListArray.push({
        verb:verb,
        example:example,
        noun: noun
    });
    inputElement.value ='';
    inputExampleElement.value=''; //in order to have inputs restored
    inputNounElement.value='';
    console.log(toDoListArray)
    divText();
    }
}



