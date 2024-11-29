const findTheOldest = function(people) {
  const ages = people.map(person => {
    let age = 0;
    if (person.yearOfDeath)
      age = person.yearOfDeath - person.yearOfBirth;
    else
      age = new Date().getFullYear() - person.yearOfBirth;

    return age;
  } )
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] == Math.max(...ages))
      return people[i];
  }
};

// Do not edit below this line
module.exports = findTheOldest;
