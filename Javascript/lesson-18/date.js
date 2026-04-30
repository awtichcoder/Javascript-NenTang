const now = new Date(); // hien bay h
console.log(typeof now);
console.log(now);
console.log(now.toLocaleString());
console.log(now.getFullYear());

console.log("-------------------------------------------------------");

const now1 = new Date("2026-01-01 17:17:00");
console.log(now1.toLocaleString());

console.log("-------------------------------------------------------");

now1.setFullYear(2025);
now1.getMonth(3);
console.log(now1.toLocaleString());

console.log("-------------------------------------------------------");

// Tính toán ngày: khoảng cách giữa hai ngày
const startDate = new Date("2026-01-01");
const endDate = new Date("2026-12-31");
const diffMs = endDate - startDate; // chênh lệch bằng mili-giây
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(
  `Khoảng cách từ ${startDate.toLocaleDateString()} đến ${endDate.toLocaleDateString()} là ${diffDays} ngày`,
);

// Tính ngày mới bằng cách cộng thêm số ngày
const futureDate = new Date(now);
futureDate.setDate(futureDate.getDate() + 7);
console.log(`7 ngày sau hôm nay là ${futureDate.toLocaleString()}`);
