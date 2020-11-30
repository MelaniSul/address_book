// define variables

// app data html elements
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');

// define event listeners
// add contact to table - submit button
form.addEventListener('submit', addContact);
//delete contact
contacts.addEventListener('click', deleteContact);

// project functions
// addContact
function addContact(e) {
    // contact data from form element
    const firstName = document.querySelector('#first_name').value;
    const lastName = document.querySelector('#last_name').value;
    const city = document.querySelector('#city').value;
    const street = document.querySelector('#street').value;
    const postCode = document.querySelector('#postcode').value;
    const phone = document.querySelector('#phone').value;

    // create new ui object
    const ui = new UI();
    //create new ls object
    const ls = new LS();

    // control form data
    if (firstName === "" | lastName === "" | city === "" | street === "" | postCode === "" | phone === "") {
        ui.alertMessage("Add ALL new contact data!", "problem");
    } else {
        // create new person object with form data
        const person = new Person(firstName, lastName, city, street, postCode, phone);
        // add person object data to html table
        ui.addPersonToTable(person);
        //save persons data to ls
        ls.saveContact(person);
        ui.alertMessage("added contact to address book", "ok");
    }
    e.preventDefault();
}

function deleteContact(e) {
    const ui = new UI();
    ui.deletePersonFromTable(e.target);
    ui.alertMessage("Contact was deleted!", "ok");
    e.preventDefault();
}