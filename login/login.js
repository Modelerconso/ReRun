function loginData(){
    let usernameDOM = document.querySelector("input[name=username]")
    let passwordDOM = document.querySelector("input[name=password]")

    const dataLogin = {
        username: usernameDOM.value,
        password: passwordDOM.value
    }

    console.log(dataLogin)
}