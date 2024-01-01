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

// get data for element 
const getDataFormElement = ({input,text,textEmtry,selfclass,classOther,selfid,idOther,message}) => {
    let data ={
        type: {
            input: input,
            text: text,
            textEmtry: textEmtry
        },
        class: {
            selfclass: selfclass,
            classOther: classOther
        },
        id: {
            selfid: selfid,
            idOther: idOther
        },
        message: message
    }
    return data
}

// check all data emtry.
const checkAllDataRegister = (allElement) => {
    let checkNumberEmpty = 0
    let elementSelectSpecial = null
    let data = {}
    // username
    if(!checkValue(allElement.usernameDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-username")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-username",message: "กรุณากรอก Username"})
        actionInput(elementSelectSpecial,data)
        // for input "username".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.usernameDOM,data)
        checkNumberEmpty += 1
    }
    
    // first password
    if(!checkValue(allElement.firstpasswordDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-firstpassword")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-firstpassword",message: "กรุณากรอก Password"})
        actionInput(elementSelectSpecial,data)
        // for input "first password".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.firstpasswordDOM,data)
        checkNumberEmpty += 1
    }
    // second password
    if(!checkValue(allElement.secondpasswordDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-secondpassword")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-secondpassword",message: "กรุณากรอก Password"})
        actionInput(elementSelectSpecial,data)
        // for input "second password".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.secondpasswordDOM,data)
        checkNumberEmpty += 1
    }
    // email
    if(!checkValue(allElement.emailDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-email")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-email",message: "กรุณากรอก Email"})
        actionInput(elementSelectSpecial,data)
        // for input "email".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.emailDOM,data)
        checkNumberEmpty += 1
    }
    // firstname
    if(!checkValue(allElement.firstnameDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-firstname")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-firstname",message: "กรุณากรอก ชื่อ"})
        actionInput(elementSelectSpecial,data)
        // for input "first name".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.firstnameDOM,data)
        checkNumberEmpty += 1
    }
    // lastname
    if(!checkValue(allElement.lastnameDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-lastname")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-lastname",message: "กรุณากรอก นามสกุล"})
        actionInput(elementSelectSpecial,data)
        // for input "lastname".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.lastnameDOM,data)
        checkNumberEmpty += 1
    }
    // gender
    if(!checkValue(allElement.genderDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-gender")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-gender",message: "กรุณากรอก เพศ"})
        actionInput(elementSelectSpecial,data)
        // for input "gender".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.genderDOM,data)
        checkNumberEmpty += 1
    }
    // birthday
    if(!checkValue(allElement.birthdayDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-birthday")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-birthday",message: "กรุณากรอก วันเกิด"})
        actionInput(elementSelectSpecial,data)
        // for input "birthday".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.birthdayDOM,data)
        checkNumberEmpty += 1
    }
    // number card
    if(!checkValue(allElement.numbercardDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-number-card")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-number-card",message: "กรุณากรอก เลขบัตรประจำตัวประชาชน"})
        actionInput(elementSelectSpecial,data)
        // for input "numbercard".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.numbercardDOM,data)
        checkNumberEmpty += 1
    }
    // phone
    if(!checkValue(allElement.phoneDOM.value)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-phone")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-phone",message: "กรุณากรอก เบอร์โทร"})
        actionInput(elementSelectSpecial,data)
        // for input "phone".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.phoneDOM,data)
        checkNumberEmpty += 1
    }
    return checkNumberEmpty == 0
}

// check all format data.
const checkFormatValue = (allElement) => {
    let checkNumberNotMatchPattern = 0
    let data = {}
    // email
    if(!allElement.emailDOM.value.match(allElement.emailDOM.pattern)){
        // get element in html.
        elementSelectSpecial = document.getElementById("response-email")
        // get data and sent to function actionInput, style textEmptry.
        data = getDataFormElement({input: null,text: null,textEmtry: true,selfclass: null,classOther: null,selfid: null,idOther: "text-email",message: "กรุณากรอก Gmail ให้ถูกต้อง"})
        actionInput(elementSelectSpecial,data)
        // for input "email".
        data = getDataFormElement({input: true,text: null,textEmtry: null,selfclass: null,classOther: null,selfid: null,idOther: null,message: null})
        actionInput(allElement.emailDOM,data)
        checkNumberNotMatchPattern += 1
    }
    return checkNumberNotMatchPattern == 0
}

// original input
const originalInput = (elementDOM) => {
    elementDOM.style.border = "1px solid rgb(177, 177, 177)"
}

// action input
const actionInput = (elementDOM,data) => {
    if(data.type.input){
        elementDOM.style.border = "1px solid red"
    }
    if(data.type.textEmtry){
        elementDOM.innerHTML = data.message
        elementDOM.style.color = "red"
        document.getElementById(data.id.idOther).style.marginBottom = "0px"
    }
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