const clearData = () => {
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
    console.log(elementInput)
    console.log(elementResponse)
    // shirt type
    if(!checkValue(elementInput.value) && (elementInput.id === "shirt-type-values")){
        // value emptry
        elementResponse.setAttribute('value','กรุณาเลือก ชนิดของเสื้อวิ่ง')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "shirt-type-values")){
        let message = ""
        dataShirtType = {
            shirttype: elementInput.value
        }
        try{
            const response = await axios.post(
                'http://localhost:8000/user/resgister-event-check-field',
                dataShirtType
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
            elementResponse.setAttribute('value',"เลือกชนิดของเสื้อวิ่งแล้ว")
            originalInput(elementInput,elementResponse)
        }
    } 

    // shirt size
    if(!checkValue(elementInput.value) && (elementInput.id === "shirt-size-values")){
        // value emptry
        elementResponse.setAttribute('value','กรุณาเลือก ขนาดของเสื้อ')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "shirt-size-values")){
        let message = ""
        dataShirtType = {
            shirttype: elementInput.value
        }
        try{
            const response = await axios.post(
                'http://localhost:8000/user/resgister-event-check-field',
                dataShirtType
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
            elementResponse.setAttribute('value',"เลือกขนาดของเสื้อวิ่งแล้ว")
            originalInput(elementInput,elementResponse)
        }
    } 

    // run type
    if(!checkValue(elementInput.value) && (elementInput.id === "run-type-values")){
        // value emptry
        elementResponse.setAttribute('value','กรุณาเลือก ประเภทของการแข่งขัน')
        actionInput(elementInput,elementResponse)
        return 1
    } else if(checkValue(elementInput.value) && (elementInput.id === "run-type-values")){
        let message = ""
        dataShirtType = {
            shirttype: elementInput.value
        }
        try{
            const response = await axios.post(
                'http://localhost:8000/user/resgister-event-check-field',
                dataShirtType
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
            elementResponse.setAttribute('value',"เลือกประเภทของการแข่งขันแล้ว")
            originalInput(elementInput,elementResponse)
        }
    }
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

// Get register data
const getRegisterData = async () => {
    // element id
    let shirttypeID = "shirt-type-values"
    let shirtsizeID = "shirt-size-values"
    let runtypeID = "run-type-values"

    let userID = "#"
    let eventID = "#"
    let shirttypeDOM = document.getElementById(shirttypeID)
    let shirtsizeDOM = document.getElementById(shirtsizeID)
    let runtypeDOM = document.getElementById(runtypeID)

    // check empty value
    let checkError = 0
    checkError += checkElement(shirttypeID,"response-shirt-types")
    checkError += checkElement(shirtsizeID,"response-shirt-sizes")
    checkError += checkElement(runtypeID,"response-run-types")

    if(checkError === 0){
        // Collect data
        const currentDate = new Date();

        let dataRegisterEvent = {
            user_id: userID,
            event_id: eventID,
            eventtype_id: runtypeDOM,
            shirttype_id: shirttypeDOM.value,
            shirtsize_id: shirtsizeDOM.value,
            datetimeregister: currentDate
        }

        try{
            await axios.post(
                'http://localhost:8000/history/register-event',
                dataRegisterEvent
            )
            
            // let elementShowSuccessRegister = document.getElementById("box-register")
            // elementShowSuccessRegister.innerHTML = 
            // "<div>" +
            //     "<div style='mix-blend-mode: multiply;'>" +
            //     "<div style='display: flex; justify-content: center; align-items: center;'>" + "<img src='../img/correct.png' style='width: 200px;height: 200px; margin-bottom: 30px;'>"+ "</div>" + 
            //     "<div style='text-align: center; font-size: 54px; font-weight: bold'>" + "ลงทะเบียนสำเร็จ" + "</div>" +
            //     "</div>"
            // "</div>"

        } catch(error){
            console.log(error)
        }

    }else {
        // Data invalid
        console.log("บันทึกลงทะเบียนไม่สำเร็จ")
    }
}