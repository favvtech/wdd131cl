
// Select the HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Listen for clicks on the Add Chapter button
button.addEventListener('click', function () {

    // Check that the input is not empty
    if (input.value.trim() !== '') {

        // Create a list item
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Add the chapter name to the list item
        li.textContent = input.value.trim();

        // Add the delete symbol to the button
        deleteButton.textContent = '❌';

        // Make the delete button accessible
        deleteButton.setAttribute(
            'aria-label',
            'Remove ' + input.value.trim()
        );

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the unordered list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Return focus to the input field
        input.focus();

    } else {
        // Return focus to the input if it is empty
        input.focus();
    }
});
