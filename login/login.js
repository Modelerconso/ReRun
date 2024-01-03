
const loginData = async () => {
    let usernameDOM = document.querySelector("input[name=username]")
    let passwordDOM = document.querySelector("input[name=password]")

    const dataLogin = {
        username: usernameDOM.value,
        password: passwordDOM.value
    }

    // Send data login to server
    try{
        const response = await axios.post(
            'http://localhost:8000/user/login',
            dataLogin
        )
        
        // valiable for correct validation username and password when it isn't correct.
        var validationUsername = document.getElementById("validation-username")
        var validationPassword = document.getElementById("validation-password")
        var inputUsername = document.getElementById("username")
        var inputPassword = document.getElementById("password")
        // Validation username and password.
        if(response.data.element == "username" && response.data.valid == false){
            // if element equal "username" invalid
            validationUsername.innerHTML = "<label>" + response.data.message + "</label>"
            inputUsername.style.border = "1px solid red"
            validationPassword.innerHTML = ""
            inputPassword.style.border = "1px solid rgb(177, 177, 177)"
        } else if(response.data.element == "password" && response.data.valid == false){
            // if element equal "password" invalid
            validationUsername.innerHTML = ""
            inputUsername.style.border = "1px solid rgb(177, 177, 177)"
            validationPassword.innerHTML = "<label>" + response.data.message + "</label>"
            inputPassword.style.border = "1px solid red"
        } else if(response.data.valid == true){
            // if data username and password correct.
            validationUsername.innerHTML = ""
            validationPassword.innerHTML = ""
            inputUsername.style.border = "1px solid rgb(177, 177, 177)"
            inputPassword.style.border = "1px solid rgb(177, 177, 177)"
            console.log("เข้าสู่ระบบได้สำเร็จ")
            window.location.href = '../home/home.html'
        }
    } catch(error){
        console.log(error)
    }

}