// 選單顯示/隱藏功能
document.addEventListener("mousemove", (event) => {
    const menu = document.querySelector(".menu");
    if (event.clientY < 250) {
        menu.classList.add("visible"); // 顯示選單
    } else {
        menu.classList.remove("visible"); // 隱藏選單
    }
});

// 子選單點擊功能
document.querySelectorAll('.submenu li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默認跳轉行為
        const iframe = document.getElementById('content-frame');
        const targetUrl = event.target.getAttribute('href'); // 獲取點擊的連結

        if (targetUrl) {
            iframe.src = targetUrl; // 將 iframe 的 src 設置為點擊的連結
            iframe.style.display = 'block'; // 顯示 iframe
        } else {
            console.warn("未提供有效的 href 屬性");
        }
    });
});

// 新增背景圓形功能
document.addEventListener("DOMContentLoaded", () => {
    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circle-container');
    document.body.appendChild(circleContainer);

    // 生成 20 個圓形
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // 隨機大小、顏色和位置
        const size = Math.random() * 100 + 20; // 圓的大小 20px ~ 120px
        const color = `hsl(${Math.random() * 360}, 70%, 70%)`; // 隨機顏色
        const posX = Math.random() * window.innerWidth; // 隨機水平位置
        const posY = Math.random() * window.innerHeight; // 隨機垂直位置

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = color;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;

        circleContainer.appendChild(circle);
    }

    // 滑鼠移動時改變圓的大小
    document.addEventListener('mousemove', (event) => {
        const screenWidth = window.innerWidth;
        const scaleFactor = event.clientX / screenWidth; // 根據滑鼠水平位置計算比例

        document.querySelectorAll('.circle').forEach(circle => {
            const baseSize = parseFloat(circle.style.width); // 獲取原始大小
            circle.style.transform = `scale(${1 + scaleFactor})`; // 使用 scale 變化大小
        });
    });
});

// 測驗卷點擊功能
document.getElementById('quiz-option').addEventListener('click', () => {
    const quizContainer = document.getElementById('quiz-container');
    const text = "測驗卷";
    let index = 0;

    // 清空容器並顯示
    quizContainer.innerHTML = "";
    quizContainer.style.display = 'block';

    // 打字機效果
    const typeWriter = () => {
        if (index < text.length) {
            quizContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // 每個字母間隔 150 毫秒
        }
    };

    typeWriter();
});

// 自我介紹點擊功能
document.getElementById('intro-option').addEventListener('click', () => {
    const introContainer = document.getElementById('intro-container');
    const text = "大家好，我熱愛學習程式設計，喜歡解決問題與挑戰自我，希望能在實作中不斷成長，成為一位有能力的開發者。";

    // 清空容器並顯示
    introContainer.innerHTML = text;
    introContainer.style.display = 'block';
});