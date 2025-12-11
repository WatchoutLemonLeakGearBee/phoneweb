// 登录弹窗控制
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const authOptions = document.querySelectorAll('.auth-option');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginAgree = document.getElementById('loginAgree');
const registerAgree = document.getElementById('registerAgree');
const loginSubmit = document.getElementById('loginSubmit');
const registerSubmit = document.getElementById('registerSubmit');

// 打开登录弹窗
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });
}

// 关闭弹窗
if (closeModal) {
    closeModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });
}

// 点击背景关闭
if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });
}

// 切换登录/注册
authOptions.forEach(option => {
    option.addEventListener('click', () => {
        const type = option.dataset.type;
        
        // 更新按钮状态
        authOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // 切换表单
        if (type === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        }
    });
});

// 监听协议勾选状态
function updateSubmitButton(checkbox, button) {
    if (checkbox && button) {
        checkbox.addEventListener('change', () => {
            button.disabled = !checkbox.checked;
        });
    }
}

updateSubmitButton(loginAgree, loginSubmit);
updateSubmitButton(registerAgree, registerSubmit);

// 表单提交（示例，实际需要连接后端）
if (loginSubmit) {
    loginSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = document.getElementById('loginPhone').value;
        const password = document.getElementById('loginPassword').value;
        
        if (phone && password) {
            // 这里应该调用登录API
            console.log('登录:', { phone, password });
            alert('登录功能待实现');
        }
    });
}

if (registerSubmit) {
    registerSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = document.getElementById('registerPhone').value;
        const password = document.getElementById('registerPassword').value;
        const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
        
        if (phone && password && password === passwordConfirm) {
            // 这里应该调用注册API
            console.log('注册:', { phone, password });
            alert('注册功能待实现');
        } else if (password !== passwordConfirm) {
            alert('两次密码输入不一致');
        }
    });
}

