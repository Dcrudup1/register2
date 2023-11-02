
// Function to display users in the table
function displayUsers() {
    let storedStudents = JSON.parse(localStorage.getItem("stringValue")) || [];
    let tableBody = document.getElementById("usersTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    if (storedStudents.length > 0) {
        for (let i = 0; i < storedStudents.length; i++) {
            let student = storedStudents[i];
            let tr = `
                <tr>
                    <td>${student.email}</td>
                    <td>${student.firstname}</td>
                    <td>${student.lastname}</td>
                    <td>${student.age}</td>
                    <td>${student.grade101}</td>
                    <td>${student.grade102}</td>
                    <td>${student.grade103}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', tr);
        }
    } else {
        // Handle the case where there are no registered students.
        tableBody.innerHTML = "<tr><td colspan='7'>No registered users.</td></tr>";
    }
}

// Function to clear the table visually
function clearTable() {
    let tableBody = document.getElementById("usersTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
}

// Function to initialize and display users
function init() {
    // Check if the current page is users.html before adding the event listener
    if (window.location.pathname.endsWith("users.html")) {
        // Add an event listener to the "Clear All" button
        document.getElementById("clearAllButton").addEventListener("click", function() {
            // Clear the table content visually
            clearTable();

            // Clear all data in localStorage
            localStorage.clear();
        });
    }

    displayUsers(); 
}

// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);