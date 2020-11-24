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
    if (firstName.value === '') {
        alert("Add new contact data!")
    } else {
        const person = new Person(firstName.value, lastName.value, city.value, street.value, postCode.value, phone.value);
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.city}</td>
                        <td>${person.street}</td>
                        <td>${person.postCode}</td>
                        <td>${person.phone}</td>`;
        contacts.appendChild(tr);
        console.log(contacts);
        e.preventDefault();
    }
}
