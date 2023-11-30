function submitData(){
    let firstnameDOM = document.querySelector("input[name=firstname]")
    let lastnameDOM = document.querySelector("input[name=lastname]")
    let genderDOM = document.querySelector("input[name=gender]:checked")
    let birthdayDOM = document.querySelector("input[name=age]")
    let numbercardDOM = document.querySelector("input[name=number-card-person]")
    let emailDOM = document.querySelector("input[name=email]")
    let phonDOM = document.querySelector("input[name=phone]")
    let shirtTypesDOM = document.querySelector("input[name=shirt-type]")
    let shirtSizesDOM = document.querySelector("input[name=shirt-size]")
    let typeRunDOM = document.querySelector("input[name=type-run]")
    
    const dataRegister = {
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        gender: genderDOM.value,
        birthday: birthdayDOM.value,
        numbercard: numbercardDOM.value,
        email: emailDOM.value,
        phon: phonDOM.value,
        shirtType: shirtTypesDOM.value,
        shirtSize: shirtSizesDOM.value,
        typeRun: typeRunDOM.value
    }

    console.log(dataRegister)
}   

function cancelData(){

}