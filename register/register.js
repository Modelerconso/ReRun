// check length number card and phone.
const checkLengthNumber = (elementInput,number) => {
    var input = document.getElementById(elementInput.id);
    if (input.value.length > number) {
        input.value = input.value.slice(0, number); // Truncate to 13 characters
    }
}

// check value in input.
const checkValue = (value) => {
    // if value is not emtry, return true.
    if(value){
        return true
    }else{
        return false
    }
}

// check emtry and format data.
const checkElement = (elementInputID,elementHeaderID,elemetResponseID) => {
    let checkNumberEmpty = 0
    let elementInput = document.getElementById(elementInputID)
    let elementHeader = document.getElementById(elementHeaderID)
    let elementResponse = document.getElementById(elemetResponseID)
    
    // username
    if(!checkValue(elementInput.value) && (elementInput.id == "username")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "username")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 
    
    // firstpassword
    if(!checkValue(elementInput.value) && (elementInput.id == "password-1")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "password-1")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 

    // secondpassword
    if(!checkValue(elementInput.value) && (elementInput.id == "password-2")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "password-2")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 

    // email
    if(!checkValue(elementInput.value) && (elementInput.id == "email")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก Email')
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "email")){
        // check pattern data (email)
        if(!elementInput.value.match(elementInput.pattern)){
            // format invalid
            elementResponse.setAttribute('value','Pattern ของ Email ไม่ถูกต้อง!')
            actionInput(elementInput,elementHeader,elementResponse)
            checkNumberEmpty += 1
        }else{
            // value isn't emptry
            originalInput(elementInput,elementHeader,elementResponse)
        }
    } 

    // firstname
    if(!checkValue(elementInput.value) && (elementInput.id == "firstname")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "firstname")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 

    // lastname
    if(!checkValue(elementInput.value) && (elementInput.id == "lastname")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "lastname")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 

    // gender
    if(!checkValue(elementInput.value) && (elementInput.id == "gender")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "gender")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 

    // birthday
    if(!checkValue(elementInput.value) && (elementInput.id == "birthday")){
        // value emptry
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "birthday")){
        // value isn't emptry
        originalInput(elementInput,elementHeader,elementResponse)
    } 


    // numbercard
    if(!checkValue(elementInput.value) && (elementInput.id == "number-card")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก เลขบัตรประจำตัวประชาชน')
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "number-card")){
        if(!elementInput.value.match(elementInput.pattern)){
            // format invalid
            elementResponse.setAttribute('value','กรุณากรอกหมายเลขให้ครบถ้วน!')
            actionInput(elementInput,elementHeader,elementResponse)
            checkNumberEmpty += 1
        }else{
            // value isn't emptry
            originalInput(elementInput,elementHeader,elementResponse)
        }
    } 

    // phone
    if(!checkValue(elementInput.value) && (elementInput.id == "phone")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก เบอร์โทร')
        actionInput(elementInput,elementHeader,elementResponse)
        checkNumberEmpty += 1
    } else if(checkValue(elementInput.value) && (elementInput.id == "phone")){
        if(!elementInput.value.match(elementInput.pattern)){
            // format invalid
            elementResponse.setAttribute('value','กรุณากรอกเบอร์โทรให้ครบถ้วน!')
            actionInput(elementInput,elementHeader,elementResponse)
            checkNumberEmpty += 1
        }else{
            // value isn't emptry
            originalInput(elementInput,elementHeader,elementResponse)
        }
    } 
    
    return checkNumberEmpty
}

// original input
const originalInput = (elementInput,elementHeader,elementResponse) => {
    elementInput.style.border = "1px solid rgb(177, 177, 177)"
    elementResponse.innerHTML = ""
    elementHeader.style.marginBottom = "17.5px"
}

// wrong input
const actionInput = (elementInput,elementHeader,elementResponse) => {
    elementInput.style.border = "1px solid red"
    elementResponse.innerHTML = elementResponse.getAttribute("value")
    elementResponse.style.color = "red"
    elementHeader.style.marginBottom = "0px"
}

// Get data register user.
const getRegisterData = async() => {

    let usernameID = "username"
    let firstpasswordID = "password-1"
    let secondpasswordID = "password-2"
    let emailID = "email"
    let firstnameID = "firstname"
    let lastnameID = "lastname"
    let genderID = "gender"
    let birthdayID = "birthday"
    let numbercardID = "number-card"
    let phoneID = "phone"

    let usernameDOM = document.getElementById(usernameID)
    let firstpasswordDOM = document.getElementById(firstpasswordID)
    let secondpasswordDOM = document.getElementById(secondpasswordID)
    let emailDOM = document.getElementById(emailID)
    let firstnameDOM = document.getElementById(firstnameID)
    let lastnameDOM = document.getElementById(lastnameID)
    let genderDOM = document.getElementById(genderID)
    let birthdayDOM = document.getElementById(birthdayID)
    let numbercardDOM = document.getElementById(numbercardID)
    let phoneDOM = document.getElementById(phoneID)

    // check all data valid in form. (if it have number more or equal 1 data invalid)
    let checkError = 0
    checkError += checkElement(usernameID,'text-username','response-username')
    checkError += checkElement(firstpasswordID,'text-firstpassword','response-firstpassword')
    checkError += checkElement(secondpasswordID,'text-secondpassword','response-secondpassword')
    checkError += checkElement(emailID,'text-email','response-email')
    checkError += checkElement(firstnameID,'text-firstname','response-firstname')
    checkError += checkElement(lastnameID,'text-lastname','response-lastname')
    checkError += checkElement(genderID,'text-gender','response-gender')
    checkError += checkElement(birthdayID,'text-birthday','response-birthday')
    checkError += checkElement(numbercardID,'text-number-card','response-number-card')
    checkError += checkElement(phoneID,'text-phone','response-phone')

    // data register is ready send to database.
    if(checkError==0){
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