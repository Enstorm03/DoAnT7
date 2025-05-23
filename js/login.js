const formLogin=document.getElementById("formLogin");
const emailElement=document.getElementById("email");
const passwordElement=document.getElementById("password");

const alertError=document.getElementById("alertError");
const emailError=document.getElementById("emailError");
const passwordError=document.getElementById("passwordError");
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

// lang nghe su kien submit form
formLogin.addEventListener("submit",function(e){
    e.preventDefault();
    //validate du lieu
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
    //lay du lieu tu local ve
        const userLocal=JSON.parse(localStorage.getItem("users"))||[];

    //timkiem email va mk nhao vao
    const findUser=userLocal.find((user) =>user.email=== emailElement.value && user.password=== passwordElement.value );
   if(!findUser){
       //khong thi thông báo
        alertError.style.display="block";
   } else{
       //có thi chuyen ve trang chu
        window.location.href="layout.html";

        // luu thong tin user dang nhap len local
        localStorage.setItem("userLogin",JSON.stringify(findUser));
   }

});