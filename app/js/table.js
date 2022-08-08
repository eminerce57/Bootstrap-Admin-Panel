
getUserData()
function getUserData(){
let table = document.getElementById("table-body")
request.get("js/json/example-user-data.json").then((response)=>{

response.user.forEach(user => {

table.innerHTML +=`
<tr>
<td>${user.name}</td>
<td>${user.surname}</td>
<td>${user.status}</td>
<td>${user.salary}</td>
<td>
<button onclick="dangerAlert()" class="btn btn-danger t-button"><i class="fa-solid fa-trash-can"></i></button>
<button onclick="updateModal()" class="btn btn-info t-button"><i class="fa-solid fa-pen"></i></button>
</td>

</tr>

`

});

return true
}).catch((error)=>{

console.log(error)
})

setTimeout(function(){

    $('#table_id').DataTable();
},100)
}
