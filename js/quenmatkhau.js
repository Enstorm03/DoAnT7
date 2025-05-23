const formQuenMatKhau = document.getElementById("formQuenMatKhau");
const emailElement = document.getElementById("email");
const emailError = document.getElementById("emailError");
const alertError = document.getElementById("alertError");
const alertSuccess = document.getElementById("alertSuccess");
const resetSection = document.getElementById("resetSection");
const newPasswordElement = document.getElementById("newPassword");
const confirmPasswordElement = document.getElementById("confirmPassword");
const newPasswordError = document.getElementById("newPasswordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitBtn = document.getElementById("submitBtn");

let isEmailVerified = false;

/**
 * Validate địa chỉ email
 * @param {*} email chuỗi nhập vào
 * @returns đúng định dạng, undefined nếu email không đúng
 */
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}


formQuenMatKhau.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Lấy dữ liệu từ local storage
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    
    if (!isEmailVerified) {
        if (!emailElement.value) {
            emailError.style.display = "block";
            return;
        } else {
            emailError.style.display = "none";
          
            if (!validateEmail(emailElement.value)) {
                emailError.innerHTML = "Email không hợp lệ";
                emailError.style.display = "block";
                return;
            }
            else{
                emailError.style.display = "none";
                
            }
        }
        
        const findUser = userLocal.find((user) => user.email === emailElement.value);
        
        if (!findUser) {
         
            alertError.style.display = "block";
            alertSuccess.style.display = "none";
        } else {
            alertError.style.display = "none";
            resetSection.style.display = "block";
            isEmailVerified = true;
            submitBtn.textContent = "Đặt lại mật khẩu";
            emailElement.disabled = true;
        }
    } else {
        // Bước 2: Đặt lại mật khẩu
        let isValid = true;
        
        // Kiểm tra mật khẩu mới
        if (!newPasswordElement.value) {
            newPasswordError.style.display = "block";
            isValid = false;
        } else {
            newPasswordError.style.display = "none";
        }
        
        // Kiểm tra xác nhận mật khẩu
        if (!confirmPasswordElement.value) {
            confirmPasswordError.style.display = "block";
            isValid = false;
        } else if (confirmPasswordElement.value !== newPasswordElement.value) {
            confirmPasswordError.innerHTML = "Xác nhận mật khẩu không khớp";
            confirmPasswordError.style.display = "block";
            isValid = false;
        } else {
            confirmPasswordError.style.display = "none";
        }
        
        if (isValid) {
            // Cập nhật mật khẩu
            const updatedUsers = userLocal.map(user => {
                if (user.email === emailElement.value) {
                    return { ...user, password: newPasswordElement.value };
                }
                return user;
            });
            
            // Lưu lại vào local storage
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            
            // Hiển thị thông báo thành công
            alertSuccess.style.display = "block";
            
            // Chuyển hướng về trang đăng nhập sau 2 giây
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        }
    }
});