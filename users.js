//function that uses the array of users
function displayusers(userArray) {
    for(var i = 0; i < userArray.length; i++){
        let user = userArray[i];
        tr=`
        <tr >
            <td>${user.inputEmail}</td>
            <td>${user.inputPassword}</td>
            <td>${user.inputFirstName}</td>
            <td>${user.inputLastName}</td>
            <td>${user.inputAge}</td>
            <td>${user.input101}</td>
            <td>${user.input102}</td>
            <td>${user.input103}</td>
        </tr>
        `;
        $("#usersTable").append(tr);

    }

}


function init()
{
    let users = readUsers();// getting from the SM(store manager)
    displayusers(users);// call back the dispalyUser function
}

window.onload = init;