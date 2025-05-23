function handleOrder() {

    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    

    const currentPage = window.location.pathname.split("/").pop();
    let productInfo = {};
    
    switch(currentPage) {
        // Lò vi sóng
        case "lvs1.html":
            productInfo = {
                name: "Lò vi sóng Bosch HMH.BFL523MS0H Series 4",
                price: "5.000.000đ",
                image: "img/lovisongb1.png",
                quantity: 1
            };
            break;
        case "lvs2.html":
            productInfo = {
                name: "Lò vi sóng Bosch HMH.BFL524MS0H Series 4",
                price: "5.000.000đ",
                image: "img/lovisongb2.png",
                quantity: 1
            };
            break;
        case "lvs3.html":
            productInfo = {
                name: "Lò vi sóng kết hợp nướng Hafele HM-B38C 538.01.111",
                price: "5.000.000đ",
                image: "img/lovisongh1.jpg",
                quantity: 1
            };
            break;
        case "lvs4.html":
            productInfo = {
                name: "Lò vi sóng kết hợp nướng Hafele HM-B38A 535.34.000",
                price: "5.000.000đ",
                image: "img/lovisongh2.jpg",
                quantity: 1
            };
            break;
            
        // Máy rửa chén
        case "mrc1.html":
            productInfo = {
                name: "Máy Rửa Chén Hafele HDW-F60G 535.29.590",
                price: "5.000.000đ",
                image: "img/mayruachen/mrc1.jpg",
                quantity: 1
            };
            break;
        case "mrc2.html":
            productInfo = {
                name: "Máy Rửa Chén Hafele HDW-F60EB 538.21.310",
                price: "5.000.000đ",
                image: "img/mayruachen/mrc2.png",
                quantity: 1
            };
            break;
        case "mrc3.html":
            productInfo = {
                name: "Máy rửa chén Hafele HDW-SB90A 539.20.530",
                price: "5.000.000đ",
                image: "img/mayruachen/mrcmn/mrc3.jpg",
                quantity: 1
            };
            break;
        case "mrc4.html":
            productInfo = {
                name: "Máy rửa chén Bosch HMH.F60E3P Serie 4",
                price: "5.000.000đ",
                image: "img/mayruachen/mrcmn/mrc4.jpg",
                quantity: 1
            };
            break;
            
        // Tủ lạnh
        case "tl1.html":
            productInfo = {
                name: "Tủ lạnh Bosch HMH.KSV36VI3P Serie 4",
                price: "5.000.000đ",
                image: "img/tulanh/tld1.jpg",
                quantity: 1
            };
            break;
        case "tl2.html":
            productInfo = {
                name: "Tủ lạnh Bosch HMH.KGN56LB40O Serie 6",
                price: "5.000.000đ",
                image: "img/tulanh/tld2.jpg",
                quantity: 1
            };
            break;
        case "tl3.html":
            productInfo = {
                name: "Tủ lạnh Bosch HMH.KSV36VI3P Serie 4",
                price: "5.000.000đ",
                image: "img/tulanh/tld3.jpg",
                quantity: 1
            };
            break;
        case "tl4.html":
            productInfo = {
                name: "Tủ lạnh Hafele HF-M42S 568.27.257",
                price: "5.000.000đ",
                image: "img/tulanh/tlmn.jpg",
                quantity: 1
            };
            break;
            
        default:
            productInfo = {
                name: "Sản phẩm",
                price: "5.000.000đ",
                image: "img/lovisongb1.png",
                quantity: 1
            };
    }
    
    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem("currentProduct", JSON.stringify(productInfo));
    
    if (userLogin) {
        // Nếu đã đăng nhập, chuyển đến trang xác nhận đơn hàng
        window.location.href = "confirm-order.html";
    } else {
        // Nếu chưa đăng nhập, chuyển đến trang nhập thông tin
        window.location.href = "order-info.html";
    }
}