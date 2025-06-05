import { session_set, session_get, session_check } from './session.js';
import { encrypt_text, decrypt_text } from './js_crypto.js';
import { generateJWT, checkAuth } from './jwt_token.js';
// import { encryptText,decryptText } from "./Crypto2.js";

// function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
//     const emailInput = document.getElementById('typeEmailX');
//     const idsave_check = document.getElementById('idSaveCheck');
//     let get_id = getCookie("id");
//     if(get_id) {
//       emailInput.value = get_id;
//       idsave_check.checked = true;
//     }
//     session_check(); // 세션 유무 검사
// }

document.addEventListener('DOMContentLoaded', async () => {
  checkAuth();
  init_logined();
  await init_logined2()
});
 
function init_logined(){
 if(sessionStorage){
     decrypt_text(); // 복호화 함수
    }
    else{
      alert("세션 스토리지 지원 x");
    }
}

async function init_logined2(){
 if(sessionStorage){
    const base64 = sessionStorage.getItem("Session_Storage_pass2");
    const result = await decryptText(base64); // await 사용
    console.log("복호화 결과:", result);
    }
    else{
      alert("세션 스토리지 지원 x");
    }
}


const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;

    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);

    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
     alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
     return false;
    }
    // Sanitized된 값 반환
    return sanitizedInput;
};

const isRepeatedPattern = (str) =>{
    const result = str.match(/(...)\1/);
    return result !==null;    
};
function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + "; path=/";
}
function getCookie(name){
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if(cookie !=""){
        var cookie_array = cookie.split(";");
        for(var index in cookie_array){
            var cookie_name = cookie_array[index].split("=");
            if(cookie_name[0].trim() === name){
                return decodeURIComponent(cookie_name[1]);
            }
        }
    }
    return null;
}

function login_failed() {
    let cnt = (parseInt(getCookie("fail_cnt")) || 0) + 1;
    setCookie("fail_cnt", cnt, 1);

    if (cnt >= 3) {
        setCookie("lock_time", Date.now() + 4 * 60 * 1000, 1);
        alert("3회 이상 실패, 4분간 로그인 제한");
    } else {
        alert(`로그인 실패 (${cnt}/3)`);
    }

    document.getElementById("login_status").innerText = `실패 횟수: ${cnt}`;
}

function is_login_locked() {
    return Date.now() < (parseInt(getCookie("lock_time")) || 0);
}

function login_count(){
    let loginCount = parseInt(getCookie("login_cnt"))||0;
    loginCount += 1;
    setCookie("login_cnt", loginCount, 7);
    console.log("로그인 횟수", loginCount);
}

function logout_count() {
    let logoutCount = parseInt(getCookie("logout_cnt"))||0;
    logoutCount += 1;
    setCookie("logout_cnt", logoutCount, 7);
    console.log("로그아웃 횟수", logoutCount);
    console.log("현재 쿠키:", document.cookie);
}

function session_del() {//세션 삭제
   if (sessionStorage) {
    sessionStorage.removeItem("Session_Storage_id");
    // sessionStorage.removeItem("Session_Storage_object");
    sessionStorage.removeItem("Session_Storage_pass");
    sessionStorage.removeItem("Session_Storage_pass2");
    localStorage.removeItem("jwt_token");
     alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
          alert("세션 스토리지 지원 x");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 로그인 버튼 처리
    const loginBtn = document.getElementById("login_btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
            login_count();
            await check_input();
        }); 
    }

    // 로그아웃 버튼 처리
    const logoutBtn = document.getElementById("logout_btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            logout_count(); 
            session_del();
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 100);
        });
    } else {
        console.log("로그아웃 버튼이 없습니다.");
    }
});

const check_input = async () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');

    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const sanitizedPassword = check_xss(passwordValue);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailValue);
    // check_xss 함수로 비밀번호 Sanitize  
    // 전역 변수 추가, 맨 위 위치
    const idsave_check = document.getElementById('idSaveCheck');

    const payload = {
     id: emailValue,
     exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
    };
    const jwtToken = generateJWT(payload);

    if (is_login_locked()) {
      const remainingSec = Math.ceil((getCookie("lock_time") - Date.now()) / 1000);
      alert(`로그인 제한 중입니다. (${remainingSec}초 남음)`);

      const status = document.getElementById("login_status");
      if (status) status.innerText = `로그인 제한 중 (${remainingSec}초 남음)`;

      return false;
    }

    if (emailValue === '') {
        alert('이메일을 입력하세요.');
        login_failed();
        return false;
    }
    if (passwordValue === '') {
        alert('비밀번호를 입력하세요.');
        login_failed();
        return false;
    }

    if(emailValue !== "parkmin@p" || passwordValue !== "A!sdfghzxcvn"){
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        login_failed();
        return false;
    }

    if (emailValue.length > 10) {
        alert('아이디는 10글자 이하로 입력해야 합니다.');
        return false;
    }

    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;
    }
    if (passwordValue.length > 15) {
        alert('비밀번호는 15글자 이하로 입력해야 합니다.');
        return false;
    }
    if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
    }
    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !=null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
    }
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    if(isRepeatedPattern(emailValue)){
        alert('아이디에 3글자 이상 반복된 패턴이 있습니다.');
        return false;
    } 
    if(isRepeatedPattern(passwordValue)){
        alert('비밀번호에 3글자 이상 반복된 패턴이 있습니다.');
        return false;
    }

    if (!sanitizedEmail) {
        // Sanitize된 비밀번호 사용
        return false;
    }
    if (!sanitizedPassword) {
        // Sanitize된 비밀번호 사용
        return false;
    }

    // 검사 마무리 단계 쿠키 저장, 최하단 submit 이전
    if(idsave_check.checked == true) { // 아이디 체크 o
          alert("쿠키를 저장합니다.", emailValue);
          setCookie("id", emailValue, 1); // 1일 저장
          alert("쿠키 값 :" + emailValue);
    }
    else{ // 아이디 체크 x
       setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
    }

        console.log('이메일:', emailValue);
        console.log('비밀번호:', passwordValue);

        setCookie("fail_cnt", 0, -1);
        setCookie("lock_time", "", -1);

        alert("로그인 성공!");
        session_set(); // 세션 생성
        localStorage.setItem('jwt_token', jwtToken);
        loginForm.submit();
    };

// export async function init_logined_page() {
//   const encryptedData = sessionStorage.getItem("Session_Storage_pass2");

//   const infoEl = document.getElementById("user_info");
//   if (!infoEl) {
//     console.warn("#user_info 요소가 없습니다.");
//     return;
//   }

//   if (!encryptedData) {
//     infoEl.innerText = "로그인 정보가 없습니다.";
//     return;
//   }

//   const password = prompt("복호화를 위해 로그인 비밀번호를 입력해주세요:");
//   if (!password) {
//     infoEl.innerText = "복호화 실패: 비밀번호 없음";
//     return;
//   }

//   try {
//     const decrypted = await decryptText(password, encryptedData);
//     const data = JSON.parse(decrypted); // { email }

//     infoEl.innerText = `안녕하세요, ${data.email}님!`;
//   } catch (e) {
//     console.error("복호화 오류:", e);
//     infoEl.innerText = "복호화에 실패했습니다.";
//   }
// }

