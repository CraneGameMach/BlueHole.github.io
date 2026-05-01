const floorData = [
    { id: "B0", img: "image/B0.png", name: "B0층", theme: "수중시험장", danger: "최하", desc: "첫 진입 구역. 목표는 상어 한 마리 사냥.", manager: "히포캄프 | 유쾌하고 친절한 해마입니다. 당신이 마주할 첫 관리자이기도 합니다." },
    { id: "B1", img: "image/BN.png", name: "B1층~B9층", theme: "해수면과 폐도시", danger: "하", desc: "밖과 가장 유사한 환경. 특히 1층은 다이버들이 모여 사는 인구 밀집 생활 구역입니다.", manager: "프사마테 | 무뚝뚝하고 조용한 관리자입니다. 특이하게 물고기 군집의 그의 모습입니다." },
    { id: "B10", img: "image/B1N.png", name: "B10층~B19층", theme: "해저 동굴", danger: "하", desc: "빛이 닿지 않는 습하고 어두운 해저 동굴 지대입니다.", manager: "라오메데이아 | 신경질적인 은둔자입니다. 초롱아귀인 그를 찾을려면 꽤 고생해야할겁니다." },
    { id: "B20", img: "image/B2N.png", name: "B20층~B29층", theme: "심해", danger: "중하", desc: "환각과 환영이 중심이 되는 구역. 정신 오염에 주의해야 합니다.", manager: "사오 | 짓궂은 기만자 오징어입니다. 그 앞에서는 무엇이든 믿지 말아야 할 것입니다." },
    { id: "B30", img: "image/B3N.png", name: "B30층~B39층", theme: "바다 무덤", danger: "중하", desc: "과거에 죽은 다이버들이 언데드가 되어 등장하는 묘지입니다.", manager: "네소 | 퍼즐광에 음흉함을 갖춘 문어입니다. 그의 미로를 조심하세요," },
    { id: "B40", img: "image/B4N.png", name: "B40층~B49층", theme: "아틀란티스", danger: "중", desc: "고대 수중 도시의 형태. 48층에서는 거대한 축제가 열리고 있습니다.", manager: "할리메데 | 이곳 제일의 광신도, 앵무조개 입니다. 비위를 잘 맞춰야 할겁니다." },
    { id: "B50", img: "image/B5N.png", name: "B50층~B59층", theme: "산호초 지대", danger: "중", desc: "아름답지만 위험한 생태계. 55층에는 다이버들의 거대한 시장이 존재합니다.", manager: "나이아드 | 몽롱한 해파리지만 나름 독을 가지고 있으니 방심은 금물입니다." },
    { id: "B60", img: "image/B6N.png", name: "B60층~B69층", theme: "정글과 수초림", danger: "상", desc: "맹수와 몬스터들이 우글거리는 구역. 특히 66층은 '죽음의 층'이라는 별명으로 불립니다.", manager: "탈라사 | 꼰대 산갈치. 그의 모든 사고방식은 약육강식에 기반됩니다." },
    { id: "B70", img: "image/B7N.png", name: "B70층~B79층", theme: "사막과 황무지", danger: "중상", desc: "심해 속의 메마른 땅. 74층에는 거대한 소금 사막이 존재합니다.", manager: "데스피나 | 소심한 관리자입니다. 그에 걸맞게 개복치의 모습을 하고있네요" },
    { id: "B80", img: "image/B8N.png", name: "B80층~B89층", theme: "강과 폭포, 산림", danger: "중상", desc: "지상과 매우 흡사한 자연환경을 띠나 치명적인 함정이 다수 배치되어 있습니다.", manager: "갈라테아 | 호탕한 물범입니다. 싸우는걸 꽤 좋아하는 모양이에요." },
    { id: "B90", img: "image/B9N.png", name: "B90층~B99층", theme: "다수의 섬들과 화산", danger: "상", desc: "끓어오르는 열수구와 화산섬. 91층은 안전한 휴양지로 유명합니다.", manager: "라리사 | 상냥한 돌고래에게 방심했다간 목숨 한조각 남지 않을것입니다." },
    { id: "B100", img: "image/B10N.png", name: "B100층~B109층", theme: "절벽과 언덕", danger: "최상", desc: "돌파를 포기하고 이곳에 안주하는 다이버들이 많을 정도로 험난합니다.", manager: "네레이드 | 나태를 형상화한 가오리가 있다면 이 관리자일것입니다. 과연 행운일까요?" },
    { id: "B110", img: "image/B11N.png", name: "B110층~B118층", theme: "산맥과 호수", danger: "최상", desc: "낙원으로 가기 전 뚫어야 하는 마지막 자연 관문입니다.", manager: "프로메테우스 | 바다거북은 언제나 현명함의 상징입니다. 그도 마찬가지지만 냉정함을 갖췄어요" },
    { id: "B119", img: "image/B119.png", name: "B119층", theme: "낙원 + 하늘섬", danger: "최하", desc: "모든 다이버가 꿈꾸는 낙원. 이곳에 도달해야만 정식 '랭킹'에 등록됩니다. (시험 난이도 측정 불가)", manager: "트리톤 | 자비롭지만 위엄은 놓지 않은 고래입니다. 그는 당신의 편일지도 모릅니다." },
    { id: "B120", img: "", name: "B120층", theme: "", danger: "", desc: "", manager: "" }
];

const charData = [
    { name: "해일", faction: "다이버", age: "24", trait: "운이 매우 좋고 적응력이 빠르다. 블루홀에 들어온 지 얼마 안 됐음에도 랭커들에게 정보를 사고팔아 아는 것이 많다. 이곳저곳에서 정보를 모아 다음 층으로 향하는 타입.",  img: "image/02.png"},
      
    { name: "마난", faction: "다이버", age: "25", trait: "약자들을 보호해야 한다고 생각하며 강자들의 횡포를 매우 싫어한다. 불의를 보면 몸이 먼저 나서는 타입. 무뚝뚝해 보이지만 친해지면 말이 꽤 많아진다.", img: "image/03.png"},
      
    { name: "바루나", faction: "다이버", age: "23", trait: "블루홀 생태에 흥미를 가져 항상 연구 노트를 들고 다닌다. 희귀 연구자료를 위해선 희생도 감수하는 기질이 있으나, 은근 상식인 포지션을 맡고 있다.", img: "image/04.png" },
      
    { name: "에기르", faction: "다이버", age: "21", trait: "블루홀 존재 자체를 신의 계시라 믿고 숭배하며, 이를 주변에 전파하고 다닌다. 당장이라도 거대 교단을 세울 기세의 광신도.", img: "image/05.png"},
      
    { name: "아르티", faction: "하이랭커", age: "30", trait: "랭킹 15위. 다이버들에게 자주 힌트를 주며 도와주다가 관리자에게 경고를 받기도 한다. 스태프를 사용해 안전 구역을 생성한다.", img: "image/06.png" },
      
    { name: "가로아", faction: "하이랭커", age: "27", trait: "랭킹 5위. 약한 다이버들을 사냥하며, 시험이라는 명목하에 사람들을 위험으로 몰고 간다. 세이버를 휘둘러 벼락을 꽂아 넣는다.", img: "image/07.png" },
      
    { name: "세이돈", faction: "하이랭커", age: "35", trait: "랭킹 1위. 총관리자 카르카와 협상을 맺고 119층를 관리하고 있다. 삼지창으로 빙염을 다룬다.", img: "image/08.png" },
      
    { name: "타츠미", faction: "호라이즌", age: "22", trait: "랭킹 30위. 신규 다이버들에게 친근하게 접근해 호라이즌의 호감도를 높인다. 썰렁한 농담을 즐기며 카타나로 바람을 생성한다.", img: "image/09.png" },
      
    { name: "공공", faction: "호라이즌", age: "39", trait: "랭킹 2위이자 120층을 목표로 하는 세력 '호라이즌'의 수장. 장죽을 사용해 광범위 환각을 일으킨다.", img: "image/10.png" },
      
    { name: "카르카", faction: "관리자", age: "?", trait: "블루홀 시스템의 총관리자.", img: "image/01.png" },
      
    { name: "아리안", faction: "랭커?", age: "?", trait: "랭킹에 이름이 없지만 본인은 랭커라고 주장한다.", img: "image/11.png" }
];

const factionDescriptions = {
    '다이버': '블루홀 속 인간들. 생존과 더 나은 삶, 혹은 낙원을 찾기 위해 아래로 계속 내려갑니다.',
    '하이랭커': '상위 15명의 블루홀 최고 권력자들. 블루홀 내 최소한의 안정을 유지하려 합니다.',
    '호라이즌': '랭킹에 포함되어 있으나 기득권에 안주하지 않고, 미지의 영역인 120층으로 향하기 위해 움직이는 저항 세력입니다.',
    '관리자': '10층 단위로 영역을 나누어 블루홀 내 시스템을 관리하는 신과 유사한 존재. 단순한 동물 베이스의 외형을 가집니다.',
    '랭커?': '자신이 랭커라고 주장하지만 랭킹보드에는 이름이 존재하지 않는 미상의 존재들입니다.'
};

const introScreen = document.getElementById('intro-screen');
const introWindow = document.getElementById('intro-window');
const mainContent = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');
const typingText = document.getElementById('typing-text');
const loginForm = document.getElementById('login-form');

function checkVisit() {
    try {
        const lastVisit = localStorage.getItem('bluehole_visit');
        const now = new Date().getTime();
        if (lastVisit && (now - lastVisit < 86400000)) {
            // 24시간 안 지났으면 창 애니메이션 없이 바로 메인 진입
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';
            bottomNav.style.display = 'flex'; 
            initMain();
            showSection('worldview', document.querySelector('.nav-btn'));
            return;
        }
    } catch(e) { console.warn("로컬스토리지 제한"); }
    typeIntroText();
}

function typeIntroText() {
    const text = "> SYSTEM: 생체 신호 확인 중...\n> 새로운 다이버 접근 감지.\n> '블루홀'에 오신 것을 환영합니다.";
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
    }, 40);
}

// ✨ 다이버 노트 연동 로직 삭제본
function startDive() {
    const nickname = document.getElementById('nickname-input').value || "무명 다이버";
    
    // 로컬스토리지에 방문 기록 저장
    try { localStorage.setItem('bluehole_visit', new Date().getTime()); } catch(e) {}
    
    // 추락 애니메이션
    introWindow.classList.add('fall-down');
    introScreen.classList.add('fade-out-bg');
    
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
        bottomNav.style.display = 'flex'; 
        
        initMain();
        showSection('worldview', document.querySelector('.nav-btn'));
        
        introWindow.classList.remove('fall-down');
        introScreen.classList.remove('fade-out-bg');
    }, 800);
}

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
    
    // 수직 엘리베이터 형태의 클래스 부여
    floorContainer.className = 'vertical-shaft'; 

    floorData.forEach(floor => {
        const div = document.createElement('div');
        // 120층이면 error-shaft 클래스 부여
        div.className = 'shaft-item' + (floor.id === 'B120' ? ' error-shaft' : '');
        
        // 층 이름 (예: B0, B1~B9)
        const floorNameShort = floor.name.split('층')[0]; // 간략한 텍스트용
        
        // 직사각형 말풍선 (툴팁) 생성
        const tooltip = document.createElement('div');
        tooltip.className = 'shaft-tooltip';
        // 120층은 테마마저 비공개
        tooltip.innerText = floor.id === 'B120' ? 'ERROR : 접근 권한 없음' : floor.theme;

        div.innerHTML = `<span>${floorNameShort}</span>`;
        div.appendChild(tooltip);

        div.onclick = () => openFloorModal(floor);
        floorContainer.appendChild(div);
    });

    // 세력 초기화 (기존 동일)
const tabsContainer = document.querySelector('.tabs-container');
    tabsContainer.innerHTML = '';
    
    const tabGroups = ['다이버', '하이랭커', '호라이즌', '기타'];
    
    tabGroups.forEach((group, index) => {
        const btn = document.createElement('button');
        btn.className = 'tab-btn' + (index === 0 ? ' active' : '');
        btn.innerText = group;
        btn.onclick = () => filterChar(group, btn);
        tabsContainer.appendChild(btn);
    });
    
    // 초기 로딩 시 '다이버' 탭 표시
    filterChar('다이버', tabsContainer.firstChild);
}

// ==========================================
// 모달 제어 로직 (층 & 캐릭터 분리)
// ==========================================
function openFloorModal(floor) {
    if (floor.id === 'B120') {
        alert("[ SYSTEM FATAL ERROR ]\n\n지정된 구역(B120)의 데이터를 읽어올 수 없습니다.");
        return; 
    }

    // 층별 기본 이미지 (나중에 floorData에 img 속성을 넣어서 교체 가능)
    const floorModalBody = document.getElementById('floor-modal-body');

    floorModalBody.innerHTML = `
        <div class="modal-header-img" style="background-image: url('${floor.img}');">
            <div class="gradient-overlay"></div>
            <h2 class="modal-floor-title">${floor.name}</h2>
        </div>
        <div class="modal-text-content">
            <p style="margin-bottom:8px;"><strong style="color:var(--glow-blue)">[ 테마 ]</strong> ${floor.theme}</p>
            <p><strong style="color:var(--glow-blue)">[ 위험도 ]</strong> ${floor.danger}</p>
            
            <p style="margin-top:15px; line-height:1.6; color:#CBD5E1;">${floor.desc}</p>
            
            <div class="manager-divider"><span>MANAGER INFO</span></div>
            
            <p style="line-height:1.6; word-break:keep-all;">
                <strong style="font-size:1.1rem; color:var(--white); text-shadow:0 0 5px var(--main-blue);">${floor.manager.split('|')[0]}</strong><br>
                <span style="font-size:0.9rem; color:#AACCFF; display:inline-block; margin-top:5px;">${floor.manager.split('|')[1] || ''}</span>
            </p>
        </div>
    `;
    document.getElementById('floor-modal').style.display = 'flex';
}

function openCharModal(char) {
    const charModalBody = document.getElementById('char-modal-body');
    
    // 이미지가 없을 경우를 대비한 기본 흑백 배경
    const bgImage = char.img ? char.img : "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400";
    
    charModalBody.innerHTML = `
        <div class="char-poster" style="background-image: url('${bgImage}');">
            <div class="char-poster-gradient"></div>
            
            <div class="char-poster-info">
                <h2 class="char-poster-name">${char.name}</h2>
                <div class="char-poster-meta">
                    [ ${char.faction} ] · ${char.age}세
                </div>
                <div class="char-poster-desc">
                    "${char.trait}"
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('char-modal').style.display = 'flex';
}

// 모달 닫기 (id를 받아서 해당 모달만 닫음)
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 모달 바깥(검은 배경) 클릭 시 닫기 기능
window.onclick = function(event) { 
    const floorModal = document.getElementById('floor-modal');
    const charModal = document.getElementById('char-modal');
    
    if (event.target === floorModal) floorModal.style.display = 'none';
    if (event.target === charModal) charModal.style.display = 'none';
}

// [filterChar 함수 전체 교체]
function filterChar(group, btnElement) {
    if (btnElement) {
        document.querySelectorAll('.tabs-container .tab-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }
    
    // 설명 업데이트 ('기타' 탭 분기 처리)
    const descMap = {
        '다이버': factionDescriptions['다이버'],
        '하이랭커': factionDescriptions['하이랭커'],
        '호라이즌': factionDescriptions['호라이즌'],
        '기타': '블루홀의 시스템을 관리하는 관리자와 랭킹 보드에 존재하지 않는 미상의 존재입니다.'
    };
    document.getElementById('faction-desc').innerText = descMap[group];

    const container = document.getElementById('char-container');
    container.innerHTML = '';
    
    // 캐릭터 필터링 ('기타'일 경우 관리자와 랭커?를 모두 가져옴)
    const filteredChars = charData.filter(c => {
        if (group === '기타') return c.faction === '관리자' || c.faction === '랭커?';
        return c.faction === group;
    });

    // 카드 렌더링 (디자인 구조 변경)
    filteredChars.forEach(char => {
        const div = document.createElement('div');
        div.className = 'char-card';
        div.innerHTML = `
            <div class="char-card-img" style="background-image: url('${char.img}');"></div>
            <div class="char-card-info">
                <span class="char-name">${char.name}</span>
                <span class="char-faction-tag">${char.faction}</span>
            </div>
        `;
        div.onclick = () => openCharModal(char);
        container.appendChild(div);
    });
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => { alert(`'${text}' 복사 완료!`); });
}

window.onclick = function(event) { if (event.target === modal) closeModal(); }

document.addEventListener('DOMContentLoaded', checkVisit);

// ==========================================
// 플로팅 플레이어 드래그 & 토글 로직
// ==========================================
const player = document.getElementById('floating-player');
const header = document.getElementById('player-header');

let isDragging = false;
let currentX, currentY, initialX, initialY;
let xOffset = 0, yOffset = 0;

// PC 마우스 및 모바일 터치 이벤트 연결
header.addEventListener("mousedown", dragStart);
header.addEventListener("touchstart", dragStart, {passive: false});
document.addEventListener("mouseup", dragEnd);
document.addEventListener("touchend", dragEnd);
document.addEventListener("mousemove", drag);
document.addEventListener("touchmove", drag, {passive: false});

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }
    // 헤더(제목 표시줄)를 잡았을 때만 드래그 허용
    if (e.target === header || e.target.className === 'player-title') {
        isDragging = true;
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault(); // 스크롤 방지
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }
        xOffset = currentX;
        yOffset = currentY;
        player.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }
}

// 창 숨기기/보이기 버튼
function togglePlayer() {
    const body = document.getElementById('player-body');
    body.classList.toggle('hidden');
}