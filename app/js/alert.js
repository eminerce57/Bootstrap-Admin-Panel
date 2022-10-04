
click()

function click(){
    let buttons =document.querySelectorAll(".btn")
    buttons.forEach(button => {
        button.addEventListener("click", events)
    });
 
}

function events(e){
console.log(e.target.id)

if(e.target.id == "default"){
alert("alert")
}
else if(e.target.id == "custom"){

    Swal.fire({
        title: `Custom alert`,
        background: '#19191A',
    
    
    })
    

}

}