// 关卡密码（简单明了，适合新手）
const passwords = {
    0: "ARG新手",
    1: "藏宝图",
    2: "32",
    3: "星光"
};

function showLevel(id) {
    document.querySelectorAll('.level').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        // 平滑滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function checkLevel0() {
    const input = document.getElementById('password-0').value.trim();
    const msg = document.getElementById('msg-0');
    
    if (input === passwords[0]) {
        msg.textContent = "✅ 正确！第一道门已打开……";
        msg.className = "message success";
        setTimeout(() => showLevel('level-1'), 800);
    } else {
        msg.textContent = "❌ 密码不对，再仔细看看源代码里的注释吧～";
        msg.className = "message error";
    }
}

function checkLevel1() {
    const input = document.getElementById('password-1').value.trim();
    const msg = document.getElementById('msg-1');
    
    if (input === passwords[1]) {
        msg.textContent = "✅ 太棒了！你找到了藏宝图！";
        msg.className = "message success";
        setTimeout(() => showLevel('level-2'), 800);
    } else {
        msg.textContent = "❌ 还不对，试试重新排列这三个字～";
        msg.className = "message error";
    }
}

function checkLevel2() {
    const input = document.getElementById('password-2').value.trim();
    const msg = document.getElementById('msg-2');
    
    if (input === passwords[2]) {
        msg.textContent = "✅ 完美！规律被你找到了！";
        msg.className = "message success";
        setTimeout(() => showLevel('level-3'), 800);
    } else {
        msg.textContent = "❌ 再想想：每个数字都是前一个的两倍哦";
        msg.className = "message error";
    }
}

function checkLevel3() {
    const input = document.getElementById('password-3').value.trim();
    const msg = document.getElementById('msg-3');
    
    if (input === passwords[3]) {
        msg.textContent = "✅ 星光闪耀！宝藏就在眼前……";
        msg.className = "message success";
        setTimeout(() => showLevel('level-final'), 1000);
    } else {
        msg.textContent = "❌ 把鼠标放在彩色方块上再看看～";
        msg.className = "message error";
    }
}

function restart() {
    // 清空所有输入
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelectorAll('.message').forEach(msg => {
        msg.textContent = '';
        msg.className = 'message';
    });
    showLevel('level-0');
}

// 支持回车键提交
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('password-0').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel0();
    });
    document.getElementById('password-1').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel1();
    });
    document.getElementById('password-2').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel2();
    });
    document.getElementById('password-3').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel3();
    });
});
