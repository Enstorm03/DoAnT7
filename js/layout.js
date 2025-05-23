//lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userLoginElement = document.getElementById("userLogin");
const loginButton = document.querySelector('.nav-actions .btn:nth-child(2)');
const registerButton = document.querySelector('.nav-actions .btn:nth-child(3)');

function updateUserInterface() {
    if (userLogin) {
    
        userLoginElement.innerHTML = `
            <div class="btn user-logged-in">
                <i class="fa fa-user icon" aria-hidden="true"></i>
                <span>${userLogin.userName}</span>
                <button onclick="logout()" class="btn btn-sm btn-danger ms-2">Đăng xuất</button>
            </div>
        `;
        
     
        if (loginButton) loginButton.style.display = "none";
        if (registerButton) registerButton.style.display = "none";
    } else {
    
        userLoginElement.innerHTML = "";
        if (loginButton) loginButton.style.display = "block";
        if (registerButton) registerButton.style.display = "block";
    }
}

function logout() {
    localStorage.removeItem("userLogin");
    updateUserInterface();
   
    window.location.href = "layout.html";
}


updateUserInterface();