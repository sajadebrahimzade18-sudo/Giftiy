// وصل شدن به تلگرام
const tg = window.Telegram.WebApp;

// باز شدن مینی اپ به صورت کامل (Expand)
tg.expand(); 

let score = 0;
const scoreElement = document.getElementById('score');
const usernameElement = document.getElementById('username');

// گرفتن اسم کاربر از تلگرام و نمایش آن
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `کاربر: ${user.first_name}`;
} else {
    usernameElement.innerText = "کاربر: در حال تست (بیرون تلگرام)";
}

// تابع کلیک کردن
function clickCoin() {
    score++; // یکی اضافه کن
    scoreElement.innerText = score; // عدد رو روی صفحه آپدیت کن
    
    // لرزش گوشی موقع کلیک (Haptic Feedback) - این خیلی حس خوبی میده!
    tg.HapticFeedback.impactOccurred('medium');
}