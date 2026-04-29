// --- [데이터 영역] ---
const floorData = [
    { id: "B0", name: "B0층", theme: "튜토리얼 / 수중시험장", danger: "최하", desc: "상어 한 마리 사냥 임무. 관리자 히포캄프가 안내합니다.", manager: "히포캄프 (해마)" },
    { id: "B1", name: "B1층~B9층", theme: "해수면+폐도시", danger: "하", desc: "밖과 가장 유사하며 1층은 인구밀집 생활구역입니다.", manager: "프사마테 (물고기군집)" },
    { id: "B10", name: "B10층~B19층", theme: "해저동굴", danger: "하", desc: "어둡고 습한 동굴 구조를 가집니다.", manager: "라오메데이아 (초롱아귀)" },
    { id: "B119", name: "B119층", theme: "낙원+하늘섬", danger: "최하", desc: "모두가 꿈꾸는 낙원 같은 곳. 시험 난이도는 측정불가입니다.", manager: "트리톤 (고래)" },
    { id: "B120", name: "B120층", theme: "ERROR: 접근 불가", danger: "측정불가", desc: "모든 것을 동결하는 곳. 랭커 외 접근 금지.", manager: "S2002 N5 & S2021 N1" }
];

const charData = [
    { name: "해일", faction: "다이버", age: "27", desc: "이곳저곳 정보를 모으는 운 좋은 다이버. 적응력이 매우 빠름.", trait: "능청, 사회성 좋음" },
    { name: "바루나", faction: "다이버", age: "23", desc: "블루홀 생태 연구자. 상식인 포지션.", trait: "염세적, 연구가" },
    { name: "아르티", faction: "하이랭커", age: "30", desc: "랭킹 15위. 다이버들을 돕는 상냥한 허당.", trait: "이타적, 약약강강" },
    { name: "타츠미", faction: "호라이즌", age: "22", desc: "랭킹 30위. 쾌남이며 신규 다이버들에게 호의적.", trait: "의리, 밝음" },
    { name: "카르카", faction: "관리자", age: "?", desc: "블루홀 총관리자. 절대영도 빙염을 다룬다.", trait: "절대적 오만, 흥미주의" }
];

// 세력별 설명 데이터 추가
const factionDescriptions = {
    '다이버': '블루홀 속 인간들. 좀 더 편하고 안전하게 살기 위해 아래로 계속 내려갑니다.',
    '하이랭커': '블루홀 최고 권력자들. 블루홀의 최소한의 안정을 유지하기 위해 군림합니다.',
    '호라이즌': '랭킹에 포함되긴 하나, 오직 120층으로 향하기 위해서만 움직이는 자들입니다.',
    '관리자': '블루홀 내의 시스템 관리자. 신과 유사한 권능을 가졌습니다.'
};

const artifacts = [
    "녹슨 해마의 나침반 (효과: B10층 이하 길잡이)",
    "심해석 펜던트 (효과: 산소 소모율 10% 감소)",
    "부서진 랭커의 검 (효과: 하급 몬스터 위압)",
    "빛나는 진주 카트리지 (효과: 1회 치명상 방어)"
];

// --- [로직 영역] ---
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const typingText = document.getElementById('typing-text');
const loginForm = document.getElementById('login-form');

function checkVisit() {
    const lastVisit = localStorage.getItem('bluehole_visit');
    const now = new Date().getTime();
    
    if (lastVisit && (now - lastVisit < 86400000)) {
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
        initMain();
    } else {
        typeIntroText();
    }
}

function typeIntroText() {
    const text = "> System: 생체 신호 확인 중...\n> 새로운 다이버의 접근을 감지했습니다.\n> 심해 싱크홀 '블루홀'에 오신 것을 환영합니다.";
    let i = 0;
    typingText.innerText = "";
    
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            typingText.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => { loginForm.style.display = 'flex'; }, 500);
        }
    }, 50);
}

function startDive() {
    const nickname = document.getElementById('nickname-input').value || "무명 다이버";
    const note = document.getElementById('diver-note');
    note.value = note.value.replace("이름: (인트로에서 입력한 닉네임이 들어갑니다)", "이름: " + nickname);
    
    localStorage.setItem('bluehole_visit', new Date().getTime());
    introScreen.style.display = 'none';
    mainContent.style.display = 'block';
    window.scrollTo(0, 0);
    initMain();
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
    
    // 초기 렌더링
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
    // 1. 탭 버튼 활성화 변경
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === faction) btn.classList.add('active');
    });

    // 2. 세력 설명 변경
    document.getElementById('faction-desc').innerText = factionDescriptions[faction];

    // 3. 캐릭터 목록 변경
    const container = document.getElementById('char-container');
    container.innerHTML = '';
    
    const filtered = charData.filter(c => c.faction === faction);
    filtered.forEach(char => {
        const div = document.createElement('div');
        div.className = 'char-card';
        div.innerHTML = `<strong style="color:var(--white);">${char.name}</strong><span style="font-size:0.8rem; color:#888; margin-top:5px;">${char.age}세</span>`;
        div.onclick = () => openCharModal(char);
        container.appendChild(div);
    });
}

function drawArtifact() {
    const resultBox = document.getElementById('artifact-result');
    const randomItem = artifacts[Math.floor(Math.random() * artifacts.length)];
    resultBox.innerHTML = `[획득] <strong style="color:var(--white);">${randomItem}</strong>`;
    
    const note = document.getElementById('diver-note');
    if(!note.value.includes(randomItem)) {
        note.value = note.value.replace("무기/아티팩트: ", "무기/아티팩트: " + randomItem);
    }
}

function copyNote() {
    const note = document.getElementById('diver-note');
    navigator.clipboard.writeText(note.value).then(() => {
        alert("다이버 노트가 클립보드에 복사되었습니다. 챗 창에 붙여넣기 해주세요!");
    });
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`'${text}' 명령어가 복사되었습니다.`);
    });
}

window.onclick = function(event) {
    if (event.target === modal) closeModal();
}

window.onload = checkVisit;
