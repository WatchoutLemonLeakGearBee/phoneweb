// 主题切换功能
(function() {
    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme + '-theme';
    updateThemeIcon(savedTheme);

    // 主题切换按钮
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    function toggleTheme() {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.className = newTheme + '-theme';
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
})();

// 品牌logo映射
const brandLogoMap = {
    'Huawei': 'Data/IMAGE/Huawei.png',
    'Xiaomi': 'Data/IMAGE/xiaomi.png',
    'Redmi': 'Data/IMAGE/xiaomi.png', // 红米使用小米logo
    'Vivo': 'Data/IMAGE/vivo.png',
    'iQOO': 'Data/IMAGE/vivo.png', // iQOO使用vivo logo
    'OPPO': 'Data/IMAGE/oppo.png',
    'OnePlus': 'Data/IMAGE/oppo.png', // OnePlus使用OPPO logo
    'Honor': 'Data/IMAGE/Honor.png',
    'Realme': 'Data/IMAGE/oppo.png', // Realme使用OPPO logo
    'Apple': 'Data/IMAGE/IPhone.png',
    'Samsung': 'Data/IMAGE/Samsung.png',
    'Meizu': 'Data/IMAGE/Android.png', // 未知安卓机型
    'Nubia': 'Data/IMAGE/Android.png',
    'Motorola': 'Data/IMAGE/Android.png',
    'RedMagic': 'Data/IMAGE/Android.png',
    'ROG': 'Data/IMAGE/Android.png'
};

// 获取品牌logo
function getBrandLogo(brand) {
    return brandLogoMap[brand] || 'Data/IMAGE/Android.png';
}

// 品牌中文名称映射
const brandNameMap = {
    'Huawei': '华为',
    'Xiaomi': '小米',
    'Redmi': '红米',
    'Vivo': 'vivo',
    'iQOO': 'iQOO',
    'OPPO': 'OPPO',
    'OnePlus': '一加',
    'Honor': '荣耀',
    'Realme': '真我',
    'Apple': '苹果',
    'Samsung': '三星',
    'Meizu': '魅族',
    'Nubia': '努比亚',
    'Motorola': '摩托罗拉',
    'RedMagic': '红魔',
    'ROG': 'ROG'
};

function getBrandName(brand) {
    return brandNameMap[brand] || brand;
}

