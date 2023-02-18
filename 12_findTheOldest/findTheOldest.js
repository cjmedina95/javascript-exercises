const findTheOldest = function(peopleList) {
    const dateObj = new Date();
    const currentYear = dateObj.getFullYear();
    let oldestPerson = {};
    let oldestAge = 0;

    peopleList.forEach(function(person) {
        let personAge = 0;
    
        if (!Object.keys(person).includes("yearOfDeath")) {
            personAge = currentYear - person.yearOfBirth;
        }
        else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (personAge > oldestAge) {
            oldestPerson = person;
            oldestAge = personAge;
        }     
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
