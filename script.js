const quotes = [
  "\"Hành trình ngàn dặm bắt đầu từ một bước chân.\" - Văn Sơn",
  "\"Cách tốt nhất để dự đoán tương lai là tự tạo ra nó.\" - Văn Sơn",
  "\"Trên biển còn nhiều cá , tại sao cứ phải lấy cá trên dĩa của người khác.\" - Thỏ ",
  "\"Code không chỉ là logic, đó là nghệ thuật giải quyết vấn đề.\""
];

const quoteBtn = document.getElementById('quote-btn');
const quoteDisplay = document.getElementById('quote-display');

quoteBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});