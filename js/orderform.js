// Kiểm tra nếu người dùng đã đăng nhập thì chuyển đến trang xác nhận
window.onload = function() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
        window.location.href = "confirm-order.html";
    }
    
    // Lấy thông tin sản phẩm từ localStorage
    const productInfo = JSON.parse(localStorage.getItem("currentProduct"));
    
    // Hiển thị thông tin sản phẩm nếu có
    if (productInfo) {
        const productInfoElement = document.getElementById('productInfo');
        if (productInfoElement) {
            productInfoElement.innerHTML = `
                <div class="product-summary">
                    <h5>${productInfo.name}</h5>
                    <p>Giá: ${productInfo.price}</p>
                </div>
            `;
        }
    }
};

// Xử lý form đặt hàng
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Lấy thông tin sản phẩm từ localStorage
    const productInfo = JSON.parse(localStorage.getItem("currentProduct"));
    
    // Lưu thông tin đặt hàng vào localStorage
    const orderInfo = {
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        note: document.getElementById('note').value,
        product: productInfo ? productInfo.name : "Lò vi sóng",
        price: productInfo ? productInfo.price : "5.000.000đ",
        orderDate: new Date().toLocaleString()
    };
    
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    
    // Chuyển đến trang xác nhận đơn hàng
    window.location.href = "confirm-order.html";
});