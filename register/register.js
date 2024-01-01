// check value in input.
const checkValue = (value) => {
    // if value is not emtry, return true.
    if(value){
        return true
    }else{
        return false
    }
}

// check length number card and phone.
const checkLengthNumber = (elementDOM,number) => {
    var input = document.getElementById(elementDOM.id);
    if (input.value.length > number) {
        input.value = input.value.slice(0, number); // Truncate to 13 characters
    }
}

// onInput (style border is origin) for data valid (red comeback to origin)
const onInputData = (elementDOM) => {
    elementDOM = document.getElementById(elementDOM.id)
    if(checkValue(elementDOM.value)){
        originalInput(elementDOM)
    }else{
        actionInput(elementDOM)
    }
}

// check all data emtry.
const checkAllDataRegister = (allElement) => {
    let checkNumberEmpty = 0
    // username
    if(!checkValue(allElement.usernameDOM.value)){
        actionInput(allElement.usernameDOM)
        checkNumberEmpty += 1
    }
    // first password
    if(!checkValue(allElement.firstpasswordDOM.value)){
        actionInput(allElement.firstpasswordDOM)
        checkNumberEmpty += 1
    }
    // second password
    if(!checkValue(allElement.secondpasswordDOM.value)){
        actionInput(allElement.secondpasswordDOM)
        checkNumberEmpty += 1
    }
    // email
    if(!checkValue(allElement.emailDOM.value)){
        actionInput(allElement.emailDOM)
        checkNumberEmpty += 1
    }
    // firstname
    if(!checkValue(allElement.firstnameDOM.value)){
        actionInput(allElement.firstnameDOM)
        checkNumberEmpty += 1
    }
    // lastname
    if(!checkValue(allElement.lastnameDOM.value)){
        actionInput(allElement.lastnameDOM)
        checkNumberEmpty += 1
    }
    // gender
    if(!checkValue(allElement.genderDOM.value)){
        actionInput(allElement.genderDOM)
        checkNumberEmpty += 1
    }
    // birthday
    if(!checkValue(allElement.birthdayDOM.value)){
        actionInput(allElement.birthdayDOM)
        checkNumberEmpty += 1
    }
    // number card
    if(!checkValue(allElement.numbercardDOM.value)){
        actionInput(allElement.numbercardDOM)
        checkNumberEmpty += 1
    }
    // phone
    if(!checkValue(allElement.phoneDOM.value)){
        actionInput(allElement.phoneDOM)
        checkNumberEmpty += 1
    }
    return checkNumberEmpty == 0
}

// check all format data.
const checkFormatValue = (allElement) => {
    let checkNumberNotMatchPattern = 0
    // email
    if(!allElement.emailDOM.value.match(allElement.emailDOM.pattern)){
        actionInput(allElement.emailDOM)
        checkNumberNotMatchPattern += 1
    }
    return checkNumberNotMatchPattern == 0
}

// original input
const originalInput = (elementDOM) => {
    elementDOM.style.border = "1px solid rgb(177, 177, 177)"
}

// action input
const actionInput = (elementDOM) => {
    elementDOM.style.border = "1px solid red"
}

// Get data register user.
const getRegisterData = async() => {

    dataRegister = {
        usernameDOM: document.querySelector("input[name=username]"),
        firstpasswordDOM: document.querySelector("input[name=password-1]"),
        secondpasswordDOM: document.querySelector("input[name=password-2]"),
        emailDOM: document.querySelector("input[name=email]"),
        firstnameDOM: document.querySelector("input[name=firstname]"),
        lastnameDOM: document.querySelector("input[name=lastname]"),
        genderDOM: document.getElementById("gender"),
        birthdayDOM: document.querySelector("input[name=birthday]"),
        numbercardDOM: document.querySelector("input[name=number-card]"),
        phoneDOM: document.querySelector("input[name=phone]")
    }

    // check all data valid in form. (if it have number more 1 data invalid)
    let checkErrorEmtryData = checkAllDataRegister(dataRegister)
    // check format data
    let checkErrorFormatData = checkFormatValue(dataRegister)
    // combine together
    let checkError = checkErrorEmtryData && checkErrorFormatData

    // data register is ready send to database.
    if(checkError){
        // Collect data
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

        try{
            const response = await axios.post(
                'http://localhost:8000/user/register',
                dataRegister
            )
            console.log("ลงทะเบียนสำเร็จ")

        } catch(error){
            console.log(error)
        }
        
    }else{
        // Data invalid
        console.log("ลงทะเบียนไม่สำเร็จ")
    }
    
}