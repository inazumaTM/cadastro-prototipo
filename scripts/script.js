const password = document.querySelector('.password')
const passwordConfirm = document.querySelector('.confirm')
const showHide = () => {
    if(passwordConfirm){
        if(password.type === 'password' && passwordConfirm.type === 'password'){
            const eye = document.querySelector('.fa-eye')
            password.type = 'text'
            passwordConfirm.type = 'text'
            eye.setAttribute('class', 'fa fa-eye-slash')
        } else{
            const eyeS = document.querySelector('.fa-eye-slash')
            password.type = 'password'
            passwordConfirm.type = 'password'
            eyeS.setAttribute('class', 'fa fa-eye')
        }
    } else{
        if(password.type === 'password'){
            const eye = document.querySelector('.fa-eye')
            password.type = 'text'
            eye.setAttribute('class', 'fa fa-eye-slash')
        } else{
            const eyeS = document.querySelector('.fa-eye-slash')
            password.type = 'password'
            eyeS.setAttribute('class', 'fa fa-eye')
        }
    }
        
}
const info = document.querySelector('.info')
const infoR = document.querySelector('.infoR')
const email = document.querySelector('.email')
function verify(){
    const passwordValue = password.value
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    if (passwordConfirm){
        const passwordConfirmValue = passwordConfirm.value
        if(regex.test(email.value) && passwordValue === passwordConfirmValue ){
            passwordConfirmValue.length < 6 && passwordConfirmValue.length < 6 ?
             infoR.textContent = 'as senhas precisam ter 6 ou mais letras' 
             :
            window.location.href = './registered.html'
        }else if(!regex.test(email.value) && email.value !== ''){
            infoR.style.color = '#3d3da9'
            infoR.textContent = 'email inválido'
        } else if(regex.test(email.value) === true && passwordValue !== passwordConfirmValue){
            infoR.style.color = '#3d3da9'
            infoR.textContent = 'as senhas não combinam'
        } else{
            infoR.style.color = 'red'
            infoR.textContent = 'email e senha invalidos'
        }
    }
    else{
        if(regex.test(email.value) && passwordValue.length >= 6 ){
            window.location.href = './loged.html'
        } else if(!regex.test(email.value) || passwordValue.length <6){
            info.style.color = 'black'
            info.textContent = 'email ou senha incorretos'
        }
    }
}