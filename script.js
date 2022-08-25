var array = [];

myFunc = () => {
    var id = document.getElementById("id").value;
    array.push(id); 
    console.log(array);
}

var selectedRow = null;

function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}


//increament
let count = 0;
const value = document.getElementById("value");

function increment() {
    count++;
    value.innerText = count;
}
//Decrement
function decrement() {
    count--;
    value.innerText = count;
}


function showAlert(message, classsName) {
    const div = document.createElement("div");
    div.className = `alert alert-${classsName}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear all fields
function clearFields() {
    document.querySelector("#id").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#age").value = "";
    document.querySelector('#gender').value = "";
}

var listData = []
//Add Data
document.querySelector("#employee-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //get form values
    const id = document.querySelector("#id").value;
    myFunc();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const gender = document.querySelector("#gender").value;

    //validate
    if (id == "" || name == "" || age == "" || gender == "") {
        alert("Please fill in all fields", "remove");
    }
    else if (document.getElementById("age").value <= 18 || document.getElementById("age").value > 60) {
        alert("age should be between 18 to 60");
        return false;
    }
    else {
        if (selectedRow == null) {
            const req = {
                id: id,
                name: name,
                age: age,
                gender: gender
            }
            console.log(listData);
            for (let d of listData) {
                if (d.id == id) {
                    alert("ID is Already Exists");
                    return
                }
            }
            listData.push(req);
            const list = document.querySelector("#employee-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>
               <a href="#" onclick="decrement()" class="btn btn-remove btn-sm delete">Delete</a>
             </td>
            `;
            list.appendChild(row);
            increment();
            selectedRow = null;
            
            alert("Employee Data Added Successfully!!", "success");

        }
        else {
            selectedRow.children[0].textContent = id;
            selectedRow.children[1].textContent = name;
            selectedRow.children[2].textContent = age;
            selectedRow.children[3].textContent = gender;
            selectedRow = null;
        }
        clearFields();
    }
});


document.querySelector('#employee-list').addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        alert("Employee Data Deleted Successfulyy!!", "remove");
    }
});