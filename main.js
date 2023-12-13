const emailError = document.getElementById('email-error')
const email = document.getElementById('email')
const main = document.querySelector('main')

const validate = (value) => {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return validEmail.test(value)
}

function dismissMessage(){
    const element = document.querySelector('.success-message')
    if(element){
        main.removeChild(element)
    }
}

function handleSubmit(e){
    e.preventDefault()
    emailError.classList.remove('error')
    email.classList.remove('input-error')

    if(email.value === '' || !validate(email.value)){
        emailError.classList.add('error')
        email.classList.add('input-error')
        return
    }
    const successMessage = document.createElement('div')
    successMessage.className = 'success-message'
    successMessage.innerHTML = `
    <div>    
        <img src="./assets/images/icon-success.svg" alt=""/>
        <h1>Thanks for subscribing</h1>
        <p>A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscription</p>
    </div>
    <button class='btn' onclick='dismissMessage()'>Dismiss message</button>
    `
    main.append(successMessage)
}