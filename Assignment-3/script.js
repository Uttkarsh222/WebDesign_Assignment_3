function Title(t1) {
    this.mytitle = t1;
}

Title.prototype.getName = function () {
    return (this.mytitle);
}

var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
};

var error = 0;
document.getElementById('add').addEventListener('click', () => {
    const table = document.getElementById('myTable');
    var len = document.getElementsByTagName("tbody").length;
    var tbody = document.getElementsByTagName("tbody")[len - 1];
    var student = table.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || "Book 0"
    console.log(student);
    var lastindex = student.split(" ")[1];
    var studentCount = parseInt(lastindex) + 1;
    var trNode = document.createElement("tr");
    var tdCheckBoxNode = document.createElement("td");
    tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img src="down.png" onclick="onClickimg(this)" width="25px" />'
    var tdBookNode = document.createElement("td");
    tdBookNode.innerHTML = 'Student ' + (studentCount)
    var tdAuthor = document.createElement("td");
    tdAuthor.innerHTML = 'Teacher ' + (studentCount)
    var tdAward = document.createElement("td");
    tdAward.innerHTML = 'Approved'
    var tdsem = document.createElement("td");
    tdsem.innerHTML = 'Fall'
    var tdtype = document.createElement("td");
    tdtype.innerHTML = 'TA'
    var tdbud = document.createElement("td");
    tdbud.innerHTML = '43585'
    var tdper = document.createElement("td");
    tdper.innerHTML = '100%'
    var tddel = document.createElement("td");
    tddel.innerHTML = ''
    trNode.appendChild(tdCheckBoxNode);
    trNode.appendChild(tdBookNode);
    trNode.appendChild(tdAuthor);
    trNode.appendChild(tdAward);
    trNode.appendChild(tdsem);
    trNode.appendChild(tdtype);
    trNode.appendChild(tdbud);
    trNode.appendChild(tdper);
    // trNode.appendChild(tddel);
    tbody.appendChild(trNode);
    var r = document.createElement("tr");
    r.innerHTML = '<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>';
    r.className = "dropDownTextArea";
    tbody.appendChild(r);
    if (!error)
        alert("Student " + studentCount + " Record added successfully");
    if (error)
        alert("Student Record could not be added due to error");
});

var clickon = 0;

function onClickimg(img) {

    var selectedRow = img.parentElement.parentElement.nextElementSibling;
    console.log(selectedRow.className);
    if (selectedRow.className === "dropDownTextArea") {
        selectedRow.className = "dropDownTextAreanew";
    } else {
        selectedRow.className = "dropDownTextArea";
    }

}

function onClickCheckBox(checkBox) {
    var selectedRow = checkBox.parentElement.parentElement;


    if (checkBox.checked == true) {
        clickon++;
        selectedRow.style.backgroundColor = "Yellow";
        var deleteButton = document.createElement("td");
        deleteButton.innerHTML = '<button id="deleted" type="button"onclick="onDeleteRow(this)">Delete</button>'
        var editButton = document.createElement("td");
        editButton.innerHTML = '<button id="edit" type="button"onclick="onEdit(this)">Edit</button>'
        selectedRow.appendChild(deleteButton);
        selectedRow.appendChild(editButton);
        document.getElementById("del").className = "checknew";
        document.getElementById("edit").className = "checknew";
        document.getElementById("button").className = "showbutton";
        document.getElementById("button").disabled = false;

    } else {
        clickon--;
        selectedRow.style.backgroundColor = "#fff";
        if (clickon < 1) {
            document.getElementById("button").disabled = true;
            document.getElementById("button").className = "button";
            document.getElementById("del").className = "check";
            document.getElementById("edit").className = "check";
        }
        selectedRow.deleteCell(8);
        selectedRow.deleteCell(8);

    }
}

function onEdit(editedRef) {
    var selectedRow = editedRef.parentElement.parentElement;

    var student = selectedRow.firstElementChild.nextElementSibling.innerHTML;
    var studentDetails = selectedRow.firstElementChild.nextElementSibling;
    let edit = prompt("Edit details of " + student,
        student + " " +
        studentDetails.nextElementSibling.innerHTML + " " +
        studentDetails.nextElementSibling.nextElementSibling.innerHTML + " " +
        studentDetails.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML + " " +
        studentDetails.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML + " " +
        studentDetails.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML + " " +
        studentDetails.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
    );

    if (edit === null || edit === "") {} else {
        alert("Student data updated successfully");
    }

    if (clickon < 1) {
        document.getElementById("button").disabled = true;
        document.getElementById("button").className = "button";
        document.getElementById("del").className = "check";
        document.getElementById("edit").className = "check";
    }
}

function onDeleteRow(deletedRef) {
    clickon--;
    var selectedRow1 = deletedRef.parentElement.parentElement;
    var selectedRow2 = deletedRef.parentElement.parentElement.nextElementSibling;
    var student = selectedRow1.firstElementChild.nextElementSibling.innerHTML;
    console.log(student);
    var lastindex = student.split(" ")[1];
    var studentCount = parseInt(lastindex);
    console.log(selectedRow1.rowIndex, selectedRow2.rowIndex);
    if (confirm("Do you want to delete Student " + studentCount + " Record")) {
        document.getElementById("myTable").deleteRow(selectedRow1.rowIndex);

        document.getElementById("myTable").deleteRow(selectedRow2.rowIndex);
        alert("Student " + studentCount + " Record deleted successfully");
    } else {
        clickon++;
    }

    if (clickon < 1) {
        document.getElementById("button").disabled = true;
        document.getElementById("button").className = "button";
        document.getElementById("del").className = "check";
        document.getElementById("edit").className = "check";
    }


}
