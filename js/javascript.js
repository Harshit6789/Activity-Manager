/* deceleration of variables */
let studentsArray = [];
let studentElement, name, date, priorty;
let uname, udate, ustatus, upriorty;

/* check if html loaded completely */
var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        setAndGetItem();
    }
}, 10); //checks after 10 ms

/* onFormSubmit function link to the html page */
function onFormSubmit() {
    let currentDate = new Date().toISOString().split("T")[0];
    name = document.getElementById('name').value;
    date = document.getElementById('date').value;
    status = document.getElementById('status').value;
    priorty = document.getElementById('priorty').value;
    studentElement = {
        name: name,
        date: date,
        status: status,
        priorty: priorty
    };

    //Get and set the value in Local storage 
    if (studentElement.date === currentDate) {
        studentsArray.push(studentElement);
        setAndGetItem("insert");
    }
    setAllTask(studentElement);
}

/* Getters and Setters for local storage */
function setAndGetItem(value) {
    if (!value) {
        let arr = JSON.parse(localStorage.getItem("User"));
        if (arr && arr.length) {
            studentsArray = arr;
            insertRecord();
        }
        else {
            if (studentsArray && studentsArray.length)
                localStorage.setItem('User', JSON.stringify(studentsArray));
        }
    }
    else {
        localStorage.removeItem("User");
        if (studentsArray && studentsArray.length) {
            localStorage.setItem('User', JSON.stringify(studentsArray));
            insertRecord();
            resetForm();
        }
        else {
            document.getElementById("employeeList").getElementsByTagName('tbody')[0].innerHTML = "";
        }
    }
}

// Insert the data from the form
function insertRecord() {
        let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
        table.innerHTML = "";
        for (i = 0; i < studentsArray.length; i++) {
            let newRow = table.insertRow(i);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = studentsArray[i].name;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = studentsArray[i].date;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = studentsArray[i].status;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = studentsArray[i].priorty;
            cell4 = newRow.insertCell(4);
            cell4.innerHTML = `<a id=${i} onclick = "editRow(this.id)">Edit</a> 
                     <a id=${i} onclick ="deleteRow(this.id)">Delete</a>`;
        }
}


// Reset the form 
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("status").value = "";
    document.getElementById("priorty").value = "";
    selectedRow = null;
}

// Edit the Row storage();
function editRow(rowId) {
    document.getElementById("name").value = studentsArray[rowId].name;
    document.getElementById("date").value = studentsArray[rowId].date;
    document.getElementById("status").value = studentsArray[rowId].status;
    document.getElementById("priorty").value = studentsArray[rowId].priorty;
    let x = document.getElementById("update");
    x.style.display = "inline";
    let y = document.getElementById("submit");
    y.style.display = "none";
    document.getElementById("update").value = rowId;
}
//update the row
function updateRow() {
    rowId = document.getElementById("update").value;
    uname = document.getElementById("name").value;
    udate = document.getElementById("date").value;
    ustatus = document.getElementById("status").value;
    upriorty = document.getElementById("priorty").value;
    let x = document.getElementById("update");
    x.style.display = "none";
    let y = document.getElementById("submit");
    y.style.display = "inline";
    studentsArray.splice(rowId, 1, { name: uname, date: udate, status: ustatus, priorty: upriorty });
    setAndGetItem("update");
}


// Delete the row
function deleteRow(rowId) {
    if (confirm("Are you sure you want to delete the row")) {
        studentsArray.splice(rowId, 1);
        setAndGetItem("delete");
    }
}

//set the another array
function setAllTask(object) {
    let arr = [];
    let localArr = JSON.parse(localStorage.getItem("User1"));
    if (localArr && localArr.length) {
        arr = localArr;
        localArr.push(object);
    } else {
        arr.push(object);
    }
    localStorage.removeItem("User1");
    localStorage.setItem("User1", JSON.stringify(arr));
}
