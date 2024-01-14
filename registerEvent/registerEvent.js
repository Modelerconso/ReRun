function submitData(){
    let firstnameDOM = document.querySelector("input[name=firstname]")
    let lastnameDOM = document.querySelector("input[name=lastname]")
    let genderDOM = document.querySelector("input[name=gender]")
    let birthdayDOM = document.querySelector("input[name=age]")
    let numbercardDOM = document.querySelector("input[name=number-card-person]")
    let emailDOM = document.querySelector("input[name=email]")
    let phoneDOM = document.querySelector("input[name=phone]")
    let shirtTypesDOM = document.getElementById("shirt-type-values")
    let shirtSizesDOM = document.getElementById("shirt-size-values")
    let typeRunDOM = document.getElementById("run-type-values")
     
    const dataRegisterEvent = {
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        gender: genderDOM.value,
        birthday: birthdayDOM.value,
        numbercard: numbercardDOM.value,
        email: emailDOM.value,
        phone: phoneDOM.value,
        shirtType: shirtTypesDOM.value,
        shirtSize: shirtSizesDOM.value,
        typeRun: typeRunDOM.value
    }
}   

function clearData(){
    document.querySelector("input[name=email]").value = ""
    document.querySelector("input[name=phone]").value = ""
    document.getElementById("shirt-type-values").value = ""
    document.getElementById("shirt-size-values").value = ""
    document.getElementById("run-type-values").value = ""
}

// Responsive menu
const menuResponsive = () => {
    let menuDOM = document.getElementById("mymenu")
    let headerDOM = document.getElementById("header")
    if(menuDOM.className === "menu"){
        menuDOM.className += " responsive"
        headerDOM.className += " responsive"
    }else {
        menuDOM.className = "menu"
        headerDOM.className = "header"
    }
}