class LS {
    saveContact(person) {
        //get persons data from local storage
        let persons;
        //if data doesnt exit
        if (localStorage.getItem('persons') === null) {
            persons = [];
        } else {
            //data exists
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));
    }
}