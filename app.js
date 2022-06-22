const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});


function checkInputs(){
//GET VALUES FROM INPUTS 
const usernameValue = username.value;
const emailValue = email.value;
const passwordValue = password.value;
const password2Value = password2.value;

if (usernameValue === ''){
    //show error
    //add error class
    setErrorFor(username,'Username cannot be blank');


} else {
    //add succes class
    setSuccessFor(username);
 
}

if (emailValue === ''){
    //show error
    //add error class
    setErrorFor(email,'Username cannot be blank');


} else  if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');
} else {
    setSuccessFor(email)
}

if (passwordValue === ''){
    //show error
    //add error class
    setErrorFor(password,'Username cannot be blank')


} else {
    //add succes class
    setSuccessFor(password)
 
}

if (password2Value === ''){
    //show error
    //add error class
    setErrorFor(password2,'Username cannot be blank');

} else if(passwordValue !== password2Value){

    setErrorFor(password2,'Password does not match');


} else {
    //add succes class
    setSuccessFor(password2)
 
}

}

function setErrorFor(input,message){
const formControl = input.parentElement; //.form-control

const small = formControl.querySelector('small');

//add error message inside small
small.innerText = message;

//add error class
formControl.className = 'form-control error';


}


function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


function isEmail(email){

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}