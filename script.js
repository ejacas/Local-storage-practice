let fullName = document.getElementById("fullName")
const submit = document.getElementById("submit")
const table = document.querySelector("table")
let nameArray = []

submit.addEventListener("click", function(){
    // localStorage.clear()
    var tableRow = table.insertRow(-1)

    var cell1 = tableRow.insertCell(0)
    var cell2 = tableRow.insertCell(1)

    // nameArray = [fullName.value.split(" ")]
    
    localStorage.setItem("nameArray", nameArray)
    
    cell1.innerText = localStorage.getItem("nameArray")[0]
    cell2.innerText = localStorage.getItem("nameArray")[1]

    fullName.value = ""
})

