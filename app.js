//create the constructor
function Student(email, password, firstname, lastname, age, grade101, grade102, grade103) {
  this.email = email;
  this.password = password;
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.grade101 = grade101;
  this.grade102 = grade102;
  this.grade103 = grade103;
}

//create the register function

function register() {
    //get the inputs using jQuery

    let inputEmail= $("#email").val();
    let inputPassword= $("#password").val();
    let inputFirstname= $("#firstname").val();
    let inputLastname= $("#lastname").val();
    let inputAge= $("#age").val();
    let inputGrade101= $("#grade101").val();
    let inputGrade102= $("#grade102").val();
    let inputGrade103= $("#grade103").val();

    let newStudent = new Student (inputEmail,inputPassword,inputFirstname,inputLastname,inputAge,inputGrade101,inputGrade102,inputGrade103);
    if(studentIsValid(newStudent)) {
        console.log("student is valid");
        save(newStudent);
        console.log(newStudent);
    } else {
        console.log("not valid");
    }  
    clearInput();
}

//Create validation

function studentIsValid(aStudent) {
let studentValidation = true;

if (aStudent.email === "") {
    studentValidation = false;
    $("#email").addClass("error");
} else {
    $("#email").removeClass("error");
}
if (aStudent.password === "") {
    studentValidation = false;
    $("#password").addClass("error");
} else {
    $("#password").removeClass("error");
}
if (aStudent.age === "") {
    studentValidation = false;
    $("#age").addClass("error");
} else {
    $("#age").removeClass("error");
}
if (aStudent.firstname === "") {
    studentValidation = false;
    $("#firstname").addClass("error");
} else {
    $("#firstname").removeClass("error");
}
if (aStudent.lastname === "") {
    studentValidation = false;
    $("#lastname").addClass("error");
} else {
    $("#lastname").removeClass("error");
}
if (aStudent.grade101 === "") {
    studentValidation = false;
    $("#grade101").addClass("error");
} else {
    $("#grade101").removeClass("error");
}
if (aStudent.grade102 === "") {
    studentValidation = false;
    $("#grade102").addClass("error");
} else {
    $("#grade102").removeClass("error");
}
if (aStudent.grade103 === "") {
    studentValidation = false;
    $("#grade103").addClass("error");
} else {
    $("#grade103").removeClass("error");
}

return studentValidation;
}

function clearInput() {
    $("#email").val("");
    $("#password").val("");
    $("#firstname").val("");
    $("#lastname").val("");
    $("#age").val("");
    $("#grade101").val("");
    $("#grade102").val("");
    $("#grade103").val("");
}

function displayUsers(userArray) {
  for (var i = 0; i < userArray.length; i++) {
      let user = userArray[i];
      let tr = `
      <tr>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.firstname}</td>
          <td>${user.lastname}</td>
          <td>${user.age}</td>
          <td>${user.grade101}</td>
          <td>${user.grade102}</td>
          <td>${user.grade103}</td>
      </tr>
      `;
      $("#usersTable tbody").append(tr);
  }
}

function init() {
  // Display users when the page loads
  let users = readUsers();
  displayUsers(users);

  // Hook events
  $("#btnRegister").on("click", register);
}

window.onload = init;






