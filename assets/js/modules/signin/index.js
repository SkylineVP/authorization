"use strict";
const {0:login,1:password,2:signIN}=document.getElementsByTagName("input");
signIN.onclick=onSignInClick;
let users=[];
function onSignInClick() {
    if(localStorage.getItem("Users")===null){
        alert("Не зарегестрировао не одного пользователя");
    }
    else {
        users=JSON.parse(localStorage.getItem("Users"));
        console.log(users);
        users.forEach(userInStore=>{
            if(userInStore.login===login.value && userInStore.password===password.value){
                alert(`Успешний вход`);
            }
        });
    }

}