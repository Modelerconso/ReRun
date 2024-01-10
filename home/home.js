const menuResponsive = () => {
    let menuDOM = document.getElementById("mymenu")
    let headerDOM = document.getElementById("header")
    if(menuDOM.className === "menu"){
        menuDOM.className += " responsive"
        headerDOM.className += " responsive"
        iconDOM.className += " responsive"
    }else {
        menuDOM.className = "menu"
        headerDOM.className = "header"
    }
}