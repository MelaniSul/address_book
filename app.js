// define variables
// app data elements
const firstName = document.querySelector('#first_name').value;


// app data
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');

// define event listeners
// add contact to table - submit button
form.addEventListener('submit', addContact);

// project functions
// addContact
function addContact(e) {
    //contact data from form data
    const lastName = document.querySelector('#last_name').value;
    const city = document.querySelector('#city').value;
    const street = document.querySelector('#street').value;
    const postCode = document.querySelector('#postcode').value;
    const phone = document.querySelector('#phone').value;
    //create ui element
    const ui = new UI();
    if (firstName === '' || lastName === '' || city === '' || street === '' || postCode === '' || phone === '') {
        ui.alert("Add all new contact data!");
    } else {
        console.log("Create contact");
        const person = new Person(firstName.value, lastName.value, city.value, street.value, postCode.value, phone.value);
        console.log("Create user interface");
        // add new person to hmtl table
        ui.addPersonToTable(person);
        console.log(contacts);
    }
    e.preventDefault();
}