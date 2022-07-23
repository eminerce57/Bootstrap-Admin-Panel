sidebar()

function sidebar(){
    request.get("js/json/sidebar.json").then((value)=>{
        const sidebarSpace = document.getElementById("sidebar-content")
        value.sidebar.forEach(sidebar => {
        sidebarSpace.innerHTML +=`
         <li class="nav-item">
         <a class="nav-link ${checkActive(sidebar.href)} " href="${sidebar.href}">
         <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class="${sidebar.icon}"></i>
        </div>
        <span class="nav-link-text ms-1">${sidebar.title}</span>
            </a>
            </li>
        `

        });


    })
    .catch((error)=>{
        console.log(error)

    })

}

function checkActive(sidePath){
    let pathname = window.location.pathname

    pathname = pathname.substring(1)
    
if(sidePath == pathname){
    return "active"
}
else{
    return " "
}
}