
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
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        background: '#19191A',

    })
    

}
else if(e.target.id == "ask"){

    Swal.fire({
        title: `ask`,
        background: '#19191A',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
        actions: 'my-actions',
        denyButton: 'order-3',
        confirmButton: 'order-2',
        
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('not saved', '', 'info')
        }
      })
    

}

else if(e.target.id == "or"){
    Swal.fire({
        title: `Or`,
        background: '#19191A',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
        actions: 'my-actions',
        denyButton: 'order-3',
        confirmButton: 'order-2',
        
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('not saved', '', 'info')
        }
      })
    

}

}