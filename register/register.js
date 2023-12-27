function getRegisterData(){
    let usernameDOM = document.querySelector("input[name=username]")
    let firstpasswordDOM = document.querySelector("input[name=password-1]")
    let secondpasswordDOM = document.querySelector("input[name=password-2]")
    let emailDOM = document.querySelector("input[name=email]")
    let firstnameDOM = document.querySelector("input[name=firstname]")
    let lastnameDOM = document.querySelector("input[name=lastname]")
    let genderDOM = document.getElementById("gender")
    let birthdayDOM = document.querySelector("input[name=birthday]")
    let numbercardDOM = document.querySelector("input[name=number-card]")
    let phoneDOM = document.querySelector("input[name=phone]")

    let dataRegister = {
        username: usernameDOM.value,
        firstpassword: firstpasswordDOM.value,
        secondpassword: secondpasswordDOM.value,
        email: emailDOM.value,
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        gender: genderDOM.value,
        birthday: birthdayDOM.value,
        numbercard: numbercardDOM.value,
        phone: phoneDOM.value
    }
    
    console.log(dataRegister)
}