// Khi trang được tải
window.onload = function() {
    // Lấy thông tin người dùng đã đăng nhập
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    
    // Lấy thông tin đơn hàng từ localStorage
    const orderInfo = JSON.parse(localStorage.getItem("orderInfo"));
    
    // Lấy thông tin sản phẩm từ localStorage
    const productInfo = JSON.parse(localStorage.getItem("currentProduct"));
    
    // Kiểm tra nếu người dùng chưa đăng nhập và chưa nhập thông tin
    if (!userLogin && !orderInfo) {
        // Chuyển về trang nhập thông tin
        window.location.href = "order-info.html";
        return;
    }
    
    // Hiển thị thông tin sản phẩm
    if (productInfo) {
        document.getElementById('productName').textContent = productInfo.name;
        document.getElementById('productPrice').textContent = productInfo.price;
        document.getElementById('totalPrice').textContent = productInfo.price;
        
        // Nếu có hình ảnh sản phẩm
        const productImage = document.querySelector('.product-image img');
        if (productImage && productInfo.image) {
            productImage.src = productInfo.image;
        }
    }
    
    if (userLogin) {
        // Nếu đã đăng nhập, hiển thị thông tin từ tài khoản
        document.getElementById('customerName').textContent = userLogin.userName || "";
        document.getElementById('customerEmail').textContent = userLogin.email || "";
        document.getElementById('customerPhone').textContent = orderInfo ? orderInfo.phone : "";
        document.getElementById('customerAddress').textContent = orderInfo ? orderInfo.address : "";
        document.getElementById('customerNote').textContent = orderInfo ? orderInfo.note : "";
    } else if (orderInfo) {
        // Nếu chưa đăng nhập nhưng đã nhập thông tin đặt hàng
        document.getElementById('customerName').textContent = orderInfo.fullName;
        document.getElementById('customerPhone').textContent = orderInfo.phone;
        document.getElementById('customerEmail').textContent = orderInfo.email;
        document.getElementById('customerAddress').textContent = orderInfo.address;
        document.getElementById('customerNote').textContent = orderInfo.note;
    }
};

// Hàm hoàn tất đặt hàng
function completeOrder() {
    // Xử lý hoàn tất đơn hàng
    alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
    // Xóa thông tin đơn hàng tạm thời
    localStorage.removeItem("orderInfo");
    localStorage.removeItem("currentProduct");
    // Chuyển về trang chủ
    window.location.href = "layout.html";
}