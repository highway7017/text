// ✅ 렌트사 데이터 (표 기반)
// 템플릿 복사는 "buildTemplate()" 한 군데만 수정하면 전체 반영됨.
const RENTALS = [
  { name: "BNK캐피탈", customer: "1577-2280", accident: "1644-2254", transfer: "1577-2280" },
  { name: "DGB캐피탈", customer: "1566-0050", accident: "1833-8756", transfer: "1566-0050" },
  { name: "jb우리캐피탈", customer: "1688-2300", accident: "1666-8800", transfer: "1688-2300" },
  { name: "KB캐피탈", customer: "1544-1200", accident: "1544-9770", transfer: "1522-1112" },
  { name: "K-car", customer: "1855-0052", accident: "1855-0052", transfer: "1855-0052" },
  { name: "KDB산은캐피탈", customer: "02-3462-7603", accident: "02-6330-0114", transfer: "02-3462-7603" },
  { name: "SK렌터카", customer: "1599-9111", accident: "1599-9111", transfer: "1599-9111" },
  { name: "농협캐피탈", customer: "1644-3700", accident: "02-2038-3676", transfer: "1644-3700" },
  { name: "레드캡", customer: "1544-4599", accident: "1544-4599", transfer: "02-3660-2932" },
  { name: "롯데렌터카", customer: "1588-1230", accident: "1588-1230", transfer: "1588-1230" },
  { name: "롯데캐피탈", customer: "1577-7700", accident: "1588-4800", transfer: "02-3451-0506" },
  { name: "메리츠캐피탈", customer: "1588-9666", accident: "1577-0565", transfer: "02-3462-6602,3" },
  { name: "삼성카드", customer: "1688-3001", accident: "1688-3001", transfer: "1688-3001" },
  { name: "신한카드", customer: "1544-7100", accident: "1544-7751", transfer: "1544-7100" },
  { name: "오릭스캐피탈", customer: "02-2050-6700", accident: "1670-5330", transfer: "02-2050-6700" },
  { name: "우리금융캐피탈", customer: "1544-8600", accident: "1644-5222", transfer: "1644-1616" },
  { name: "우리카드", customer: "1544-9800", accident: "1544-9800", transfer: "1544-9800" },
  { name: "하나캐피탈", customer: "1800-1110", accident: "1688-2040", transfer: "02-2037-4248" },
  { name: "현대캐피탈", customer: "1588-2114", accident: "1588-2114", transfer: "1588-2114" },
  { name: "MG캐피탈", customer: "1588-9688", accident: "1588-9688", transfer: "1588-9688" },
];

const grid = document.getElementById("companyGrid");
const toast = document.getElementById("toast");

function buildTemplate(c){
  return `[${c.name} 고객센터]

고객센터 : ${c.customer}
사고&고장접수 : ${c.accident}
승계관련 : ${c.transfer}

렌트 관련 일반 문의는 언제든 편하게 연락주시구요,
계약 관련한 문의는 개인정보 문제로 제가 확인이 어려운 경우가 많아 위 고객센터로 문의 부탁드리겠습니다.

늘 안전하고 즐거운 운전 되시길 바랍니다. :)
(주)알차다 김병선 드림`;
}

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    showToast("✅ 복사 완료!");
  }catch(e){
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("✅ 복사 완료!");
  }
}

let toastTimer = null;
function showToast(msg){
  toast.textContent = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.textContent = "", 1200);
}

function renderButtons(){
  grid.innerHTML = "";
  RENTALS.forEach((c)=>{
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.type = "button";
    btn.textContent = c.name;

    btn.addEventListener("click", async ()=>{
      await copyText(buildTemplate(c));
    });

    grid.appendChild(btn);
  });
}

renderButtons();
