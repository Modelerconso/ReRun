// click Input (style border is origin) for data valid (red comeback to origin)
const clickInput = (elementId) => {
    document.getElementById(elementId.id).style.border = "1px solid rgb(177, 177, 177)"
}

// check data validation
const dataValidation = (dataDOM) => {
    // if DOM is not have data. it will set style this input (red) and return false.
    if(!dataDOM.value){
        dataDOM.style.border = "1px solid red"
        return 1
    }else{
        // if DOM is have data return true.
        return 0
    }
}

// Get data register user.
const getRegisterData = async() => {
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

    // variable check data valid and message tell user.
    let checkError = 0
    let messageDOM = document.getElementById("message")

    // Check all data valid in form. (if it have number more 1 data invalid)
    checkError += dataValidation(usernameDOM)
    checkError += dataValidation(firstpasswordDOM)
    checkError += dataValidation(secondpasswordDOM)
    checkError += dataValidation(emailDOM)
    checkError += dataValidation(firstnameDOM)
    checkError == dataValidation(lastnameDOM)
    checkError += dataValidation(genderDOM)
    checkError += dataValidation(birthdayDOM)
    checkError += dataValidation(numbercardDOM)
    checkError += dataValidation(phoneDOM)

    // Validation form
    if(checkError==0){
        // It is not have error for input data (full data in form).
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

        // Register data
        try{
            const response = await axios.post(
                'http://localhost:8000/user/register',
                dataRegister
            )
            console.log(response.data)
        } catch(error){
            console.log(error)
        }
        console.log("ลงทะเบียนสำเร็จ")

        // Show message success
        messageDOM.innerText = "ลงทะเบียนสำเร็จ"
        messageDOM.className = "message success"
    }else{
        // Data invalid
        // Show message unsuccess.
        let errorDOM = "กรอกข้อมูลไม่ครบถ้วน"
        console.log("ลงทะเบียนไม่สำเร็จ")

        // insert text error to html.
        messageDOM.innerHTML = errorDOM
        messageDOM.className = "message unsuccess"
    }
    
}