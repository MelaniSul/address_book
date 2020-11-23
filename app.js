const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const city = document.querySelector('#city');
const street = document.querySelector('#street');
const postCode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');
const contact = [firstName, lastName, city, street, postCode, phone];

form.addEventListener('submit', addContact);

function addContact(e) {
    if (firstName.value === '' || lastName.value === '' ||
        city.value === '' || street.value === '' || postCode.value === '' || phone.value === '') {
        alert("Add new contact data!")
    } else {
        const tr = document.createElement('tr');
        contact.forEach(function (contactData) {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(firstName.value));
            tr.appendChild(td);
        });
        contacts.appendChild(tr);
        e.preventDefault();
    }
}