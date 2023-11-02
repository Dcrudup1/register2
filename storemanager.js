function save(student) {
    let stringValue = JSON.parse(localStorage.getItem("stringValue")) || [];
    stringValue.push(student);
    localStorage.setItem("stringValue", JSON.stringify(stringValue));
}
function readUsers() {
    // Retrieve the array of students from localStorage
    let storedStudents = JSON.parse(localStorage.getItem("stringValue")) || [];
    return storedStudents;
}
