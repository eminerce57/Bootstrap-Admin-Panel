
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
<td>${user.active}</td>
</tr>

`

});

return true
}).catch((error)=>{

console.log(error)
})


}
