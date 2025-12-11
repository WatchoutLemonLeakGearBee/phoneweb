// 手机数据
let phoneData = [];
let filteredData = [];
let selectedBrands = new Set();
let selectedTags = new Set();

// 加载手机数据
async function loadPhoneData() {
    try {
        const response = await fetch('Data/phonedata.json');
        phoneData = await response.json();
        filteredData = [...phoneData];
        renderPhoneList();
        renderFilters();
    } catch (error) {
        console.error('加载数据失败:', error);
        document.getElementById('phoneList').innerHTML = 
            '<div class="empty-state"><div class="empty-state-icon">⚠️</div><div class="empty-state-text">数据加载失败</div></div>';
    }
}

// 渲染筛选器
function renderFilters() {
    // 获取所有品牌和标签
    const brands = new Set();
    const tags = new Set();
    
    phoneData.forEach(phone => {
        brands.add(phone.brand);
        phone.tags.forEach(tag => tags.add(tag));
    });

    // 渲染品牌筛选
    const brandFilters = document.getElementById('brandFilters');
    brandFilters.innerHTML = '';
    Array.from(brands).sort().forEach(brand => {
        const count = phoneData.filter(p => p.brand === brand).length;
        const option = createFilterOption('brand', brand, getBrandName(brand), count);
        brandFilters.appendChild(option);
    });

    // 渲染标签筛选
    const tagFilters = document.getElementById('tagFilters');
    tagFilters.innerHTML = '';
    Array.from(tags).sort().forEach(tag => {
        const count = phoneData.filter(p => p.tags.includes(tag)).length;
        const option = createFilterOption('tag', tag, tag, count);
        tagFilters.appendChild(option);
    });

    // 绑定筛选事件
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
}

// 创建筛选选项
function createFilterOption(type, value, label, count) {
    const div = document.createElement('div');
    div.className = 'filter-option';
    div.innerHTML = `
        <input type="checkbox" id="${type}-${value}" data-type="${type}" data-value="${value}">
        <label for="${type}-${value}">${label}</label>
        <span class="filter-count">(${count})</span>
    `;
    return div;
}

// 处理筛选变化
function handleFilterChange() {
    selectedBrands.clear();
    selectedTags.clear();

    // 收集选中的筛选条件
    document.querySelectorAll('.filter-option input[type="checkbox"]:checked').forEach(checkbox => {
        const type = checkbox.dataset.type;
        const value = checkbox.dataset.value;
        
        if (type === 'brand') {
            selectedBrands.add(value);
        } else if (type === 'tag') {
            selectedTags.add(value);
        }
    });

    // 应用筛选
    applyFilters();
}

// 应用筛选
function applyFilters() {
    filteredData = phoneData.filter(phone => {
        // 品牌筛选
        if (selectedBrands.size > 0 && !selectedBrands.has(phone.brand)) {
            return false;
        }
        
        // 标签筛选
        if (selectedTags.size > 0) {
            const hasTag = phone.tags.some(tag => selectedTags.has(tag));
            if (!hasTag) {
                return false;
            }
        }
        
        return true;
    });

    renderPhoneList();
}

// 渲染手机列表
function renderPhoneList() {
    const phoneList = document.getElementById('phoneList');
    
    if (filteredData.length === 0) {
        phoneList.innerHTML = 
            '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">没有找到匹配的手机</div></div>';
        return;
    }

    phoneList.innerHTML = filteredData.map(phone => createPhoneCard(phone)).join('');
    
    // 绑定点击事件
    document.querySelectorAll('.phone-card').forEach(card => {
        card.addEventListener('click', () => {
            const phoneId = card.dataset.phoneId;
            showPhoneDetail(phoneId);
        });
    });
}

// 创建手机卡片
function createPhoneCard(phone) {
    return `
        <div class="phone-card" data-phone-id="${phone.id}">
            <div class="phone-card-header">
                <div class="phone-info">
                    <div class="phone-brand">${getBrandName(phone.brand)}</div>
                    <div class="phone-model">${phone.model}</div>
                    <div class="phone-processor">${phone.specs.cpu}</div>
                </div>
                <img src="${getBrandLogo(phone.brand)}" alt="${phone.brand}" class="phone-logo">
            </div>
            <div class="phone-tags">
                ${phone.tags.map(tag => `<span class="phone-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// 显示手机详情
function showPhoneDetail(phoneId) {
    const phone = phoneData.find(p => p.id === phoneId);
    if (!phone) return;

    const modal = document.getElementById('phoneModal');
    const detail = document.getElementById('phoneDetail');
    
    detail.innerHTML = `
        <div class="detail-header">
            <img src="${getBrandLogo(phone.brand)}" alt="${phone.brand}" class="detail-logo">
            <div class="detail-info">
                <h2>${getBrandName(phone.brand)}</h2>
                <div class="detail-model">${phone.model}</div>
                <div class="detail-price">¥${phone.price.toLocaleString()}</div>
                <div class="detail-score">评分: ${phone.score}</div>
                <div class="detail-tags">
                    ${phone.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="detail-specs">
            <div class="spec-item">
                <div class="spec-label">处理器</div>
                <div class="spec-value">${phone.specs.cpu}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">运行内存</div>
                <div class="spec-value">${phone.specs.ram}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">存储空间</div>
                <div class="spec-value">${phone.specs.storage}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">屏幕</div>
                <div class="spec-value">${phone.specs.screen}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">主摄像头</div>
                <div class="spec-value">${phone.specs.camera_main}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">相机特色</div>
                <div class="spec-value">${phone.specs.camera_feature}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">电池容量</div>
                <div class="spec-value">${phone.specs.battery}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">充电功率</div>
                <div class="spec-value">${phone.specs.charging}</div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// 关闭详情弹窗
const closePhoneModal = document.getElementById('closePhoneModal');
const phoneModal = document.getElementById('phoneModal');

if (closePhoneModal) {
    closePhoneModal.addEventListener('click', () => {
        phoneModal.classList.remove('active');
    });
}

if (phoneModal) {
    phoneModal.addEventListener('click', (e) => {
        if (e.target === phoneModal) {
            phoneModal.classList.remove('active');
        }
    });
}

// 重置筛选
const resetFilters = document.getElementById('resetFilters');
if (resetFilters) {
    resetFilters.addEventListener('click', () => {
        selectedBrands.clear();
        selectedTags.clear();
        document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        applyFilters();
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    loadPhoneData();
});

