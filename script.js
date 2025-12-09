const tg = window.Telegram.WebApp;
tg.expand(); 

// تغییر مهم: اول چک میکنیم ببینیم قبلا امتیازی داشته یا نه
let score = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;

const scoreElement = document.getElementById('score');
const usernameElement = document.getElementById('username');

// نمایش امتیاز ذخیره شده به محض ورود
scoreElement.innerText = score;

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `کاربر: ${user.first_name}`;
} else {
    usernameElement.innerText = "کاربر: مهمان";
}

function clickCoin() {
    score++;
    scoreElement.innerText = score;
    
    // تغییر مهم: هر بار کلیک کرد، عدد جدید رو ذخیره کن
    localStorage.setItem('userScore', score);
    
    // ویبره گوشی (اگه روی گوشی باشه کار میکنه)
    if(tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('medium');
    }
}
