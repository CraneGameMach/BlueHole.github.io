// -------------------- 데이터 --------------------
const floorData = [
    { id: "B0", name: "B0층", theme: "튜토리얼 / 수중시험장", danger: "최하", desc: "상어 한 마리 사냥 임무.", manager: "히포캄프" },
    { id: "B1", name: "B1층~B9층", theme: "해수면+폐도시", danger: "하", desc: "가장 인간과 유사한 환경.", manager: "프사마테" },
    { id: "B10", name: "B10층~B19층", theme: "해저동굴", danger: "하", desc: "어둡고 습한 구조.", manager: "라오메데이아" },
    { id: "B119", name: "B119층", theme: "낙원", danger: "최하", desc: "이상향.", manager: "트리톤" },
    { id: "B120", name: "B120층", theme: "접근 불가", danger: "측정불가", desc: "랭커 전용.", manager: "???", error: true }
];

const charData = [
    { name: "해일", faction: "다이버", age: "27", desc: "정보 수집가" },
    { name: "바루나", faction: "다이버", age: "23", desc: "연구자" },
    { name: "아르티", faction: "하이랭커", age: "30", desc: "상위 랭커" },
    { name: "타츠미", faction: "호라이즌", age: "22", desc: "목표 지향" },
    { name: "카르카", faction: "관리자", age: "?", desc: "총 관리자" }
];

const factionDescriptions = {
    '다이버': '일반 인간',
    '하이랭커': '최상위 권력자',
    '호라이즌': '120층 목표 집단',
    '관리자': '시스템 존재'
};

const artifacts = ["녹슨 나침반", "심해 펜던트", "랭커의 검", "진주 카트리지"];


// -------------------- DOM --------------------
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');
const typingText = document.getElementById('typing-text');
const loginForm = document.getElementById('login-form');


// -------------------- 초기 진입 --------------------
document.addEventListener('DOMContentLoaded', checkVisit);


// -------------------- 방문 체크 --------------------
function checkVisit() {
    try {
        const lastVisit = localStorage.getItem('bluehole_visit');
        const now = Date.now();

        if (lastVisit && (now - lastVisit < 86400000)) {
            skipIntro();
            return;
        }
    } catch (e) {}

    typeIntroText();
}


// -------------------- 인트로 --------------------
function typeIntroText() {
    const text = "> 시스템 접속...\n> 신규 다이버 확인.\n> 블루홀에 오신 것을 환영합니다.";
    let i = 0;

    typingText.innerText = "";

    const interval = setInterval(() => {
        if (i < text.length) {
            typingText.innerText += text[i++];
        } else {
            clearInterval(interval);
            loginForm.style.display = 'flex';
        }
    }, 40);
}

function startDive() {
    const nickname = document.getElementById('nickname-input').value || "무명";

    const note = document.getElementById('diver-note');
    note.value = note.value.replace("(인트로에서 입력한 닉네임이 들어갑니다)", nickname);

    localStorage.setItem('bluehole_visit', Date.now());

    skipIntro();
}


// -------------------- 메인 진입 --------------------
function skipIntro() {
    introScreen.style.display = 'none';
    mainContent.style.display = 'block';
    bottomNav.style.display = 'flex';

    initMain();
    showSection('worldview', document.querySelector('.nav-btn'));
}


// -------------------- 화면 전환 --------------------
function showSection(id, btn) {
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active-section');
    });

    document.getElementById(id).classList.add('active-section');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    window.scrollTo(0, 0);
}


// -------------------- 메인 초기화 --------------------
function initMain() {
    renderFloors();
    filterChar('다이버');
}


// -------------------- 층 렌더링 --------------------
function renderFloors() {
    const container = document.getElementById('floor-container');
    container.innerHTML = '';

    floorData.forEach(floor => {
        const div = document.createElement('div');
        div.className = 'floor-item' + (floor.error ? ' error' : '');
        div.innerText = `${floor.name} : ${floor.theme}`;
        div.onclick = () => openFloorModal(floor);
        container.appendChild(div);
    });
}


// -------------------- 캐릭터 --------------------
function filterChar(faction) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === faction);
    });

    document.getElementById('faction-desc').innerText = factionDescriptions[faction];

    const container = document.getElementById('char-container');
    container.innerHTML = '';

    charData.filter(c => c.faction === faction).forEach(char => {
        const div = document.createElement('div');
        div.className = 'char-card';
        div.innerHTML = `<strong>${char.name}</strong><br><span>${char.age}세</span>`;
        div.onclick = () => openCharModal(char);
        container.appendChild(div);
    });
}


// -------------------- 모달 --------------------
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

function openFloorModal(floor) {
    modalBody.innerHTML = `
        <h2>${floor.name}</h2>
        <p>테마: ${floor.theme}</p>
        <p>위험도: ${floor.danger}</p>
        <p>${floor.desc}</p>
    `;
    modal.style.display = 'flex';
}

function openCharModal(char) {
    modalBody.innerHTML = `
        <h2>${char.name}</h2>
        <p>${char.desc}</p>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = e => {
    if (e.target === modal) closeModal();
};


// -------------------- 기능 --------------------
function drawArtifact() {
    const item = artifacts[Math.floor(Math.random() * artifacts.length)];
    document.getElementById('artifact-result').innerHTML = `[획득] <strong>${item}</strong>`;
}

function copyNote() {
    const text = document.getElementById('diver-note').value;
    navigator.clipboard.writeText(text);
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}    try {
        localStorage.setItem('bluehole_visit', new Date().getTime());
    } catch(e) {}
    skipIntro();
}

// 인트로 스킵 & 첫 화면 출력 로직
function skipIntro() {
    introScreen.style.display = 'none';
    mainContent.style.display = 'block';
    bottomNav.style.display = 'flex'; 
    
    initMain();
    
    // 개요 화면 띄우기
    const firstNavBtn = document.querySelector('.nav-btn');
    showSection('worldview', firstNavBtn);
}

// 탭 전환 로직
function showSection(sectionId, btnElement) {
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');

    if (btnElement) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }
    window.scrollTo(0, 0);
}

function initMain() {
    const floorContainer = document.getElementById('floor-container');
    floorContainer.innerHTML = '';
    floorData.forEach(floor => {
        const div = document.createElement('div');
        div.className = 'floor-item' + (floor.id === 'B120' ? ' error' : '');
        div.innerText = `${floor.name} : ${floor.theme}`;
        div.onclick = () => openFloorModal(floor);
        floorContainer.appendChild(div);
    });
    
    filterChar('다이버');
}

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

function openFloorModal(floor) {
    modalBody.innerHTML = `
        <h2 style="color:${floor.id === 'B120' ? 'var(--red)' : 'var(--main-blue)'}">${floor.name}</h2>
        <p><strong>테마:</strong> ${floor.theme}</p>
        <p><strong>위험도:</strong> ${floor.danger}</p>
        <p><strong>관리자:</strong> ${floor.manager}</p>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:15px 0;">
        <p style="line-height:1.5;">${floor.desc}</p>
    `;
    modal.style.display = 'flex';
}

function openCharModal(char) {
    modalBody.innerHTML = `
        <h2>${char.name}</h2>
        <p><strong>소속:</strong> ${char.faction} / <strong>나이:</strong> ${char.age}</p>
        <p><strong>성향:</strong> ${char.trait}</p>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:15px 0;">
        <p style="line-height:1.5;">${char.desc}</p>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function filterChar(faction) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === faction) btn.classList.add('active');
    });
    document.getElementById('faction-desc').innerText = factionDescriptions[faction];

    const container = document.getElementById('char-container');
    container.innerHTML = '';
    
    charData.filter(c => c.faction === faction).forEach(char => {
        const div = document.createElement('div');
        div.className = 'char-card';
        div.innerHTML = `<strong style="color:var(--white);">${char.name}</strong><span style="font-size:0.8rem; color:#888; margin-top:5px;">${char.age}세</span>`;
        div.onclick = () => openCharModal(char);
        container.appendChild(div);
    });
}

function drawArtifact() {
    const randomItem = artifacts[Math.floor(Math.random() * artifacts.length)];
    document.getElementById('artifact-result').innerHTML = `[획득] <strong style="color:var(--white);">${randomItem}</strong>`;
    
    const note = document.getElementById('diver-note');
    if(!note.value.includes(randomItem)) {
        note.value = note.value.replace("무기/아티팩트: ", "무기/아티팩트: " + randomItem);
    }
}

function copyNote() {
    navigator.clipboard.writeText(document.getElementById('diver-note').value).then(() => {
        alert("다이버 노트 복사 완료!");
    });
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => { alert(`'${text}' 복사 완료!`); });
}

window.onclick = function(event) { if (event.target === modal) closeModal(); }

// 스크립트 실행
document.addEventListener('DOMContentLoaded', checkVisit);
