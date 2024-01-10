// check length number card and phone.
const checkLengthNumber = (elementInput,number) => {
    let input = document.getElementById(elementInput.id);
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
const checkElement = async (elementInputID,elemetResponseID) => {

    let elementInput = document.getElementById(elementInputID)
    let elementResponse = document.getElementById(elemetResponseID)
    
    // username
    if(!checkValue(elementInput.value) && (elementInput.id === "username")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก Username')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "username")){
        // check duplicate username.
        let message = ""
        dataUsername = {
            username: elementInput.value
        }
        try{
            const response = await axios.post(
                'http://localhost:8000/user/resgister-check-field',
                dataUsername
            )
            message = response.data.message
        } catch(error){
            console.log(error)
        }

        if(message!="check field success"){
            elementResponse.setAttribute('value',message)
            actionInput(elementInput,elementResponse)
            return 1
        } else{
            // value isn't emptry
            elementResponse.setAttribute('value',"Username ใช้งานได้ ")
            originalInput(elementInput,elementResponse)
        }
    } 
    
    // firstpassword
    if(!checkValue(elementInput.value) && (elementInput.id === "password-1")){
        // value emptry
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "password-1")){
        // value isn't emptry
        originalInput(elementInput,elementResponse)
    } 

    // secondpassword
    if(!checkValue(elementInput.value) && (elementInput.id === "password-2")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก Password')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "password-2")){
        // Check first password and this input
        let firstpassword = document.getElementById("password-1").value
        if((firstpassword != "") && firstpassword != elementInput.value){
            elementResponse.setAttribute('value','Password ไม่ตรงกัน')
            actionInput(elementInput,elementResponse)
            return 1
        } else{
            // value isn't emptry
            elementResponse.setAttribute('value',"Password ใช้งานได้ ")
            originalInput(elementInput,elementResponse)
        }
        
    } 

    // email
    if(!checkValue(elementInput.value) && (elementInput.id === "email")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก Email')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "email")){
        // check pattern data (email)
        if(!elementInput.value.match(elementInput.pattern)){
            // format invalid
            elementResponse.setAttribute('value','Pattern ของ Email ไม่ถูกต้อง!')
            actionInput(elementInput,elementResponse)
            return 1
        }else{
            // check duplicate email.
            let message = ""
            dataEmail = {
                email: elementInput.value
            }
            try{
                const response = await axios.post(
                    'http://localhost:8000/user/resgister-check-field',
                    dataEmail
                )
                message = response.data.message
            } catch(error){
                console.log(error)
            }

            if(message!="check field success"){
                elementResponse.setAttribute('value',message)
                actionInput(elementInput,elementResponse)
                return 1
            } else{
                // value isn't emptry
                elementResponse.setAttribute('value',"Password ถูกต้อง")
                originalInput(elementInput,elementResponse)
            }
        }
    } 

    // firstname
    if(!checkValue(elementInput.value) && (elementInput.id === "firstname")){
        // value emptry
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "firstname")){
        // value isn't emptry
        elementResponse.setAttribute('value',"กรอกชื่อเรียบร้อย")
        originalInput(elementInput,elementResponse)
    } 

    // lastname
    if(!checkValue(elementInput.value) && (elementInput.id === "lastname")){
        // value emptry
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "lastname")){
        // value isn't emptry
        elementResponse.setAttribute('value',"กรอกนามสกุลเรียบร้อย")
        originalInput(elementInput,elementResponse)
    } 

    // gender
    if(!checkValue(elementInput.value) && (elementInput.id === "gender")){
        // value emptry
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "gender")){
        // value isn't emptry
        elementResponse.setAttribute('value',"ระบุเพศเรียบร้อย")
        originalInput(elementInput,elementResponse)
    } 

    // birthday
    if(!checkValue(elementInput.value) && (elementInput.id === "birthday")){
        // value emptry
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "birthday")){
        // value isn't emptry
        elementResponse.setAttribute('value',"กรอกวันเกิดเรียบร้อย")
        originalInput(elementInput,elementResponse)
    } 


    // numbercard
    if(!checkValue(elementInput.value) && (elementInput.id === "number-card")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก เลขบัตรประจำตัวประชาชน')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "number-card")){
        if(!elementInput.value.match(elementInput.pattern)){
            // format invalid
            elementResponse.setAttribute('value','กรุณากรอกหมายเลขให้ครบถ้วน!')
            actionInput(elementInput,elementResponse)
            return 1
        }else{
            // check duplicate numbercard.
            let message = ""
            dataNumbercard = {
                numbercard: elementInput.value
            }
            try{
                const response = await axios.post(
                    'http://localhost:8000/user/resgister-check-field',
                    dataNumbercard
                )
                message = response.data.message
            } catch(error){
                console.log(error)
            }

            if(message!="check field success"){
                elementResponse.setAttribute('value',message)
                actionInput(elementInput,elementResponse)
                return 1
            } else{
                // value isn't emptry
                elementResponse.setAttribute('value',"บัตรประจำตัวประชาชนใช้งานได้")
                originalInput(elementInput,elementResponse)
            }
        }
    } 

    // phone
    if(!checkValue(elementInput.value) && (elementInput.id === "phone")){
        // value emptry
        elementResponse.setAttribute('value','กรุณากรอก เบอร์โทร')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "phone")){
        if(!elementInput.value.match(elementInput.pattern)){
            // format invalid
            elementResponse.setAttribute('value','กรุณากรอกเบอร์โทรให้ครบถ้วน!')
            actionInput(elementInput,elementResponse)
            return 1
        }else{
           // check duplicate phone.
           let message = ""
           dataNumbercard = {
            phone: elementInput.value
           }
           try{
               const response = await axios.post(
                   'http://localhost:8000/user/resgister-check-field',
                   dataNumbercard
               )
               message = response.data.message
           } catch(error){
               console.log(error)
           }

           if(message!="check field success"){
               elementResponse.setAttribute('value',message)
               actionInput(elementInput,elementResponse)
               return 1
           } else{
               // value isn't emptry
               elementResponse.setAttribute('value',"เบอร์โทรใช้งานได้")
               originalInput(elementInput,elementResponse)
           }
        }
    } 
    
    return 0
}

// original input
const originalInput = (elementInput,elementResponse) => {
    elementInput.style.border = "1px solid green"
    elementResponse.innerHTML = 
        "<div style='display: flex; mix-blend-mode: multiply; justify-content: center; align-items: center;'>" +
        elementResponse.getAttribute("value") + "<img src='../img/correct.png' style='margin-left: 3px;width: 11px;height: 11px'>" + 
        "</div>"
    elementResponse.style.color = "green"
}

// wrong input
const actionInput = (elementInput,elementResponse) => {
    elementInput.style.border = "1px solid red"
    elementResponse.innerHTML = elementResponse.getAttribute("value")
    elementResponse.style.color = "red"
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
    checkError += await checkElement(usernameID,'response-username')
    checkError += await checkElement(firstpasswordID,'response-firstpassword')
    checkError += await checkElement(secondpasswordID,'response-secondpassword')
    checkError += await checkElement(emailID,'response-email')
    checkError += await checkElement(firstnameID,'response-firstname')
    checkError += await checkElement(lastnameID,'response-lastname')
    checkError += await checkElement(genderID,'response-gender')
    checkError += await checkElement(birthdayID,'response-birthday')
    checkError += await checkElement(numbercardID,'response-number-card')
    checkError += await checkElement(phoneID,'response-phone')

    // data register is ready send to database.
    if(checkError===0){
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
            let elementShowSuccessRegister = document.getElementById("box-register")
            elementShowSuccessRegister.innerHTML = 
            "<div>" +
                "<div style='mix-blend-mode: multiply;'>" +
                "<div style='display: flex; justify-content: center; align-items: center;'>" + "<img src='../img/correct.png' style='width: 200px;height: 200px; margin-bottom: 30px;'>"+ "</div>" + 
                "<div style='text-align: center; font-size: 54px; font-weight: bold'>" + "ลงทะเบียนสำเร็จ" + "</div>" +
                "</div>"
            "</div>"
        } catch(error){
            console.log(error)
        }
        
    }else{
        // Data invalid
        console.log("ลงทะเบียนไม่สำเร็จ")
    }
    
}