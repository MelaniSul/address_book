class UI {
    addPersonToTable(person) {
        // create tr
        const tr = document.createElement('tr');
        // create all td with person data
        tr.innerHTML = `<td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.city}</td>
                        <td>${person.street}</td>
                        <td>${person.postcode}</td>
                        <td>${person.phone}</td>
        `;
        // append tr to table
        contacts.appendChild(tr);
    }

    alert(message) {
        //Create div for message
        const div = document.createElement('div');
        //add class to div
        div.className = "alert"
        //create string value of message for div
        const string = document.createTextNode(message);
        //add message to div
        div.appendChild(string);
        //find components - before and after div element
        const card = document.querySelector('.card-title');
        const appForm = document.querySelector('#contact-form');
        //add alert info to html
        card.insertBefore(div, appForm);
        //set alert for 5sek
        setTimeout(function () {
            document.querySelector("alert").remove();
        }, 5000);
    }
}