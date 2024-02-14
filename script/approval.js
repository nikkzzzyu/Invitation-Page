var yes = document.getElementById('rsvp-yes');
var no = document.getElementById('rsvp-no');
var rec = document.getElementById('recipient');
var guest = document.getElementById('guest');
var submit = document.getElementById('submit');
var buttonsContainer = document.getElementById('buttonsContainer');

// Function to show or hide sections based on user choice
function isChecked(elem) {
    var checkedElement = elem.id;

    // Initially hide all sections
    rec.classList.add('hidden');
    guest.classList.add('hidden');
    submit.classList.add('hidden');

    if (checkedElement == "rsvp-yes") {
        // If "Yes" is selected, show recipient section and create a submit button
        rec.classList.remove('hidden');
        submit.classList.remove('hidden');
        createSubmitButton();
    } else if (checkedElement == "rsvp-no") {
        // If "No" is selected, show submit section and create a submit button
        rec.classList.remove('hidden');
        submit.classList.remove('hidden');
        createSubmitButton();
    }
}

// Function to create and append the submit button
function createSubmitButton() {
    var submitButton = document.createElement("input");
    submitButton.id = "submitYesNo";
    submitButton.name = "submitYesNo";
    submitButton.className = "btTxt submit button";
    submitButton.type = "button"; // Change type to "button"
    submitButton.value = "Submit";

    // Remove existing buttons
    while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }

    // Append the new submit button
    buttonsContainer.appendChild(submitButton);

    // Add click event listener to handle form submission
    submitButton.addEventListener("click", handleSubmit);
}

function handleSubmit() {
    // Display a simple alert for demonstration purposes
    alert("Form Submitted!");
}

function showMessage(choice) {
    // Hide the RSVP container
    document.querySelector('.container').classList.add('hidden');
    
    // Show the message container
    document.getElementById('messageContainer').classList.remove('hidden');

    // Update message content based on the user's choice
    if (choice === 'yes') {
        document.getElementById('messageHeader').innerText = 'RSVP Submitted!';
        document.getElementById('messageContent').innerText = 'Thank you for joining! See you in Lantern Rite!';
    } else {
        document.getElementById('messageHeader').innerText = 'I understand';
        document.getElementById('messageContent').innerText = 'Thank you for your time!';
    }
}

yes.addEventListener("click", function(){
    isChecked(this);
}, false);

no.addEventListener("click", function(){
    isChecked(this);
}, false);

function isChecked(elem) {
    var checkedElement = elem.id;

    // Initially hide all sections
    rec.classList.add('hidden');
    guest.classList.add('hidden');
    submit.classList.add('hidden');

    // Hide both message containers
    document.getElementById('messageContainer').classList.add('hidden');
    document.getElementById('messageContainerSingle').classList.add('hidden');

    if (checkedElement == "rsvp-yes") {
        // If "Yes" is selected, show recipient section and create a submit button
        rec.classList.remove('hidden');
        submit.classList.remove('hidden');
        createSubmitButton();
    } else if (checkedElement == "rsvp-no") {
        // If "No" is selected, show submit section and create a submit button
        rec.classList.remove('hidden');
        submit.classList.remove('hidden');
        createSubmitButton();
    }
}

// Function to handle the form submission and show the appropriate message
function handleSubmit() {
    showMessage(yes.checked ? 'yes' : 'no');
}

// Function to show the message based on user's choice
function showMessage(choice) {
    // Hide the RSVP container
    document.querySelector('.container').classList.add('hidden');
    
    // Show the appropriate message container
    if (choice === 'yes') {
        document.getElementById('messageContainerSingle').classList.remove('hidden');
        // Update message content based on the user's choice
        document.getElementById('messageHeaderSingle').innerText = 'RSVP Submitted!';
        document.getElementById('messageContentSingle').innerText = 'Thank you for joining! See you in Lantern Rite!';
    } else {
        document.getElementById('messageContainerSingle').classList.remove('hidden');
        // Update message content based on the user's choice
        document.getElementById('messageHeaderSingle').innerText = 'I understand';
        document.getElementById('messageContentSingle').innerText = 'Thank you for your time!';
    }
}
