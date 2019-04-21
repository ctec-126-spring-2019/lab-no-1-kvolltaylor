// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    // added a missing end bracket
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    // fixed end tag for h2
    let output = "<h2>Bruce's Skills</h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    // added an equals sign to declaration
    // added a semicolon after end of declaration
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    // added a semicolon after end of declaration
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    // added a dollar sign before {lastName}
    // added a dollar sign before {city}
    // added a dollar sign before {gpa}
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;

    // deleted double quote mark at end and replaced with a single quote mark so would match the beginning quote mark
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}