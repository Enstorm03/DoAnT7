// lấy ra element

const formRegister=document.getElementById("formRegister");
const usernNameElement=document.getElementById("userName");
const emailElement=document.getElementById("email");
const passwordElement=document.getElementById("password");
const rePasswordElement=document.getElementById("rePassword");
const addressElement=document.getElementById("address");
//loi
const userNameError=document.getElementById("userNameError");
const emailError=document.getElementById("emailError");
const passwordError=document.getElementById("passwordError");
const rePasswordError=document.getElementById("rePasswordError");
// lấy dữ liệu từ dữ liệu localStorage
const userLocal=JSON.parse(localStorage.getItem("users"))||[];

/**
 * validate địa chỉ email
 * @param {*} email chuỗi nhập vào
 * @returns đúng định dạng, undifiled nếu email không đúng
 */

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



//lắng nghe sự kiện submit form dang ky
formRegister.addEventListener("submit",function(e){
    e.preventDefault();
    // validate data dau vao
    if(!usernNameElement.value){
        //hien thi
        userNameError.style.display="block";
    }
    else{
        userNameError.style.display="none";
    }

    if(!emailElement.value){
        //hien thi
        emailError.style.display="block";
    }
    else{
        emailError.style.display="none";
          //kiểm tra định dạng
    if(!validateEmail(emailElement.value)){
        emailError.innerHTML="email không đúng định dạng";
         emailError.style.display="block";
        
    }
    }

    if(!passwordElement.value){
        //hien thi
        passwordError.style.display="block";
    }
    else{
        passwordError.style.display="none";
    }

    if(!rePasswordElement.value){
        //hien thi
        rePasswordError.style.display="block";
    }
    else{
        rePasswordError.style.display="none";
    }
    // kiem tra mk va nhap lai mk
    if(passwordElement.value !== rePasswordElement.value){
        rePasswordError.innerText = "Mật khẩu không khớp";
        rePasswordError.style.display = "block";
    }
    //gửi dữ liệu từ form lên localStrorage
    if(usernNameElement.value && emailElement.value&& passwordElement.value&&rePasswordElement.value&&passwordElement.value === rePasswordElement.value && validateEmail(emailElement.value)){
       // lấy dữ liệu form gộp thành dối tượng user
       const user={
        userId:Math.ceil(Math.random()*100000000),
        userName: usernNameElement.value,
        email: emailElement.value,
    password:passwordElement.value,
address:addressElement.value,
       };
       //put user vào trong user local
       userLocal.push(user);
       //lưu trữ dữ liệu lên local
       localStorage.setItem("users",JSON.stringify(userLocal));
       //chuyển hướng về trang đăng nhập
       setTimeout(function(){
        window.location.href="login.html";
       },1000)
    
    }
  
});
