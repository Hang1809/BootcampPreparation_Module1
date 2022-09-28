
let dtb = 8
switch (true) {
    case (dtb > 10 || dtb <0): console.log("Số không thích hợp");break;
    case (dtb >= 9 && dtb <=10): console.log("Xuất sắc"); break
    case (dtb >= 8 && dtb <9): console.log("Giỏi"); break;
    case (dtb >= 7 && dtb <8): console.log("Khá"); break;
    case (dtb >= 5 && dtb <7): console.log("Trung bình"); break;
    case (dtb <5): console.log("Yếu"); break;
}


