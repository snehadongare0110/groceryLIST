var selectedRow = null;
const formData ={};
formData["id"] =  document.getElementById("id").value;
formData["name"] =  document.getElementById("name").value;
formData["age"] =document.getElementById("age").value;
formData["gender"] = document.getElementById("gender").value;



function onFormSubmit(e) {
    
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        
          resetForm();
           
       
    }
}
// retrive form data
function readFormData(){
    const rformData =formData;
    rformData["id"] =  document.getElementById("id").value;
    rformData["name"] =  document.getElementById("name").value;
    rformData["age"] =document.getElementById("age").value;
    rformData["gender"] = document.getElementById("gender").value;
    return rformData;
    }

//  insert form data

function insertNewRecord(data){
    const table = document.getElementById("elist").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    let cell1= newRow.insertCell(0);
    cell1.innerHTML=data.id;
    let cell2= newRow.insertCell(1);
    cell2.innerHTML=data.name;
    let cell3= newRow.insertCell(2);
    cell3.innerHTML=data.age;
    let cell4= newRow.insertCell(3);
    cell4.innerHTML=data.gender;
    let cell5= newRow.insertCell(4);
    cell5.innerHTML= `<button class="btn-d" onclick="ondel(this)">Delete</button>`;
}
// delete form data
function ondel(td){
    if(confirm("do you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("elist").deleteRow(row.rowIndex); 
    }
    resetForm();
}

//reset the data
function resetForm(){
    document.getElementById("id").value ="";
    document.getElementById("name").value ="";
    document.getElementById("age").value ="";
    document.getElementById("gender").value ="";

}

//validate the form

function validate(){
    isvalid=true;
    if(document.getElementById("id").value === formData.id){
        isvalid=false;
        alert("this ID is aready been used !");
    }else if(document.getElementById("age").value < 19 || document.getElementById("age").value > 60){
        isvalid=false;
        alert("age should be between 19 to 60!");
    }
    return isvalid;
}

