/* deceleration of variables */
let studentsArray = [];
let studentElement, name, date, priorty;
let uname, udate, ustatus, upriorty;

/* check if html loaded completely */
var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        getItem();
    }
}, 10); //checks after 10 ms


/* Getters and Setters for local storage */
function getItem() {
    let arr = JSON.parse(localStorage.getItem("User1"));
    if (arr && arr.length) {
        studentsArray = arr;
        insertRecord();
    }
}

function setItem() {
    localStorage.removeItem("User1");
    if (studentsArray && studentsArray.length) {
        localStorage.setItem('User1', JSON.stringify(studentsArray));
    }
    else {
        document.getElementById("employeeList").getElementsByTagName('tbody')[0].innerHTML = "";
    }
    getItem();
}

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



function editRow(rowId) {
    document.getElementById("form1").style.display = "inline";
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
    document.getElementById("form1").style.display = "none";
    studentsArray.splice(rowId, 1, { name: uname, date: udate, status: ustatus, priorty: upriorty });
    setItem();
}

function deleteRow(rowId) {
    if (confirm("Are you sure you want to delete the row")) {
        studentsArray.splice(rowId, 1);
        setItem();
    }
}
//sort the data
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("employeeList");
    switching = true;
    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}


function searchFun() {
    let filter = document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById("employeeList");
    let tr = myTable.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}