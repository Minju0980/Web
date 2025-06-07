# HTML 프로젝트 - 깃허브
새로운 시작! 웹 서비스 개발의 세계로 떠나보아요~
## Getting Started
This project is a starting point for a Web application.
- [프로젝트 메인 주소](https://github.com/본인아이디/WEB_MAIN)
## 2주차 수업 메인화면 개발 완료! 
[2주차 코드 작성.pdf](https://github.com/user-attachments/files/19970615/2.pdf)
## 3주차 수업 부트스트랩 적용 완료! 
- index.html 파일 내용
[3주차 코드 작성.pdf](https://github.com/user-attachments/files/19970660/3.pdf)
### 3주차 퀴즈(부트스트랩 추가 수정)

- 네비게이션 바 메뉴에 하이퍼 링크 추가하기
```javascript
<li><a class = "dropdown-item" href = "https://store.steampowered.com/">스팀</a></li>
```
->드랍다운 메뉴의 한 항목으로 href속성을 이용하여 해당 링크주소를 가리키고 '스팀'을 클릭하면 사용자가 해당 링크주소로 이동하게 된다.

  드랍다운 메뉴를 열고 드랍다운 메뉴항목들 중 '스팀'을 클릭하면 된다.


- 네비게이션의 색상 변경하기
  
```javascript
<nav class="navbar navbar-expand-lg bg-body-tertiary">
```
이 코드에서
```javascript
<nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" data-bs-theme="light">
```

-> 이 코드로 부트스트랩의 컴포넌트 - 네비게이션 바에서 색상 구성표들 중 하나를 선택하여 수정하였다.

- 테이블에 색상 적용하기
```javascript
<tr>
     <td class="table-primary">사이온</td>
     <td class="table-primary"><img src = "image/아리.jpeg" width = "100" height = "50"></td>
     <td class="table-primary">아리</td>
</tr>
<tr>
     <td class = "table-primary" width = "80" colspan = "3"><a href = "https://store.steampowered.com/" target = "_blank">웹페이지 클릭</a></td>
</tr>
```
-> 부트스트랩의 컨텐츠 - 테이블에서 개별 셀에 색상을 지정할 수 있는 코드중 하나를 선택하여 수정하였다. 

-> 아리.jpeg라는 이미지가 들어갔으며, 두번째 행에서는 colspan = "3"으로 3칸 전체를 하나로 합치고 '웹페이지 클릭'이라는 텍스트를 클릭하면 새 창에서 열린다.


## 4주차 수업 자바스크립트 적용 완료! 
[4주차 코드 작성.pdf](https://github.com/user-attachments/files/19970844/4.pdf)
### 4주차 퀴즈(식별자 수정)
```javascript
document.getElementById("search_button_msg").addEventListener('click', search_message);
function search_message(){
    let message = "검색을 수행합니다!";
    alert(message);
}
```
-> 원래 식별자인 search_btn에서 search_button_msg로 수정하였고 index.html에서도 id식별자를 수정하였다.

-> let 변수를 활용하여 문자열 "검색을 수행합니다"를 저장하였으며 변수를 출력하는 형태로 수정하였다.

## 5주차 수업 검색창 확장 및 팝업창
- [5주차 코드.pdf](https://github.com/user-attachments/files/19559759/5.pdf)

  js파일 추가, js 파일에 조금 코드 추가?
  
### 5주차 (검색어 공백/비속어 검사)
- googleSearch() 함수를 수정하여 공백검사와 비속어 검사를 할 수 있게 하였다.
- if문, 반복문, 배열 활용
```javascript
function googleSearch() {
    const searchTerm = document.getElementById("search_input").value.trim(); // 검색어로 설정, 공백 제거
    const badword = ["욕1", "욕2", "비속어","안 좋은말"]; //비속어 목록 배열

    //입력값이 비어있으면 함수 중단
    if (searchTerm.length === 0){
        alert("검색어를 입력하세요");
        return false;
    }

    //비속어 검사
    for(let i = 0; i < badword.length; i++){
        if (searchTerm.includes(badword[i])){
            alert("부적절한 검색어입니다");
            return false;
        }
    }
```
-> .trim()으로 앞뒤 공백 제거, badword 배열에 원하는 비속어를 저장하고 여기에 포함된 단어가 검색어에 있으면 검색을 막는다.

-> 문자 길이가 0이면 함수를 중단한다./ badword 배열에 저장된 비속어들을 하나씩 검사하는 반복문을 만들고 0부터 시작해서 badword.length - 1까지 반복한다.

-> badword[i]는 현재 검사 중인 비속어이며 searchTerm.includes(badword[i])는 입력된 검색어에 비속어가 포함되어 있는지 확인한다.

## 6주차 FORM을 통한 데이터 전송
### 6주차 퀴즈(로그아웃 화면(메인화면으로 이동))
- index_login.html 파일 작성
  * index.html 전체 소스코드를 가져오고 head 및 body부터 footer 등 기본 소스코드 유지
```javascript
<a href="login/login.html" class="btn btn-outline-success" id="login_btn">로그인 하기</a>
<a href="login/logout.html" class="btn btn-outline-success" id="logout_btn">로그아웃 하기</a>
```
-> '로그인 하기' 버튼 옆에 '로그아웃 하기' 버튼이 위치하도록 '로그인 하기' 코드 아래에 '로그아웃 하기' 코드를 작성한다.

-> '로그인 하기' 버튼을 클릭하면 login 폴더안의 login.html 파일로 이동한다. 

-> '로그아웃 하기' 버튼을 클릭하면 login 폴더안의 logout.html 파일로 이동한다.

- logout.html 파일 작성(로그아웃 화면 (메인화면으로 이동))
  * 로그아웃 버튼 기능은 클릭하면 index.html로 연결하고 원래 사이트 메인으로 돌아온다.
```javascript
    <style>
        body {
            background-color: black; /*어두운 배경색*/
            color: white; /*텍스트 흰색*/
            display: flex; 
            flex-direction: column; /*위에서 아래로 정렬(기본 flex-direction에서 반대)*/
            justify-content: center; /*수직 정렬*/
            align-items: center;/*수평 정렬*/
            height: 100vh;/*화면전체높이*/
            text-align: center;/*텍스트 가운데 정렬*/
        }
        .btn-custom {
            margin-top: 20px;
            padding: 10px 30px;
            font-size: 1.1rem;
        }
    </style>
</head>
<body>
    <h1>로그아웃 메인화면</h1>
    <a href="../index.html" class="btn btn-outline-light btn-custom">로그아웃</a>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```
-> index_login.html 기본 소스코드를 유지하면서 위의 코드는 로그아웃 화면을 구성하기 위한 코드이다.

-> head속 style 영역 안에 body 태그에 스타일을 지정한다. 페이지 전체 배경색, 텍스트 정렬 등을 설정하고 btn-custom은 버튼에 여백, 크기, 글자 크기를 지정하는 사용자 정의 클래스다.

-> '로그아웃' 버튼을 클릭하면 상위 폴더의 index.html 파일로 이동할 수 있도록 한다.

## 9주차 입력필터링 및 데이터 저장
[9주차 코드 작성.pdf](https://github.com/user-attachments/files/20073819/9.pdf)

### 9주차 퀴즈(로그인 입력길이 제한, 입력 제한)
- 로그인 입력 길이제한(이메일 10글자 이하, 패스워드 15글자 이하 수정)

  login.js 파일의 check_input 함수를 수정하였다.
```javascript
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
```
-> 10글자 초과시 경고/ 15글자 초과시 경고이다.

- 로그인 입력 제한(패턴식 활용)
- 3글자 이상 반복 입력은 안되도록 설정하였다. 예) 123123, 아이디는아이디
```javascript

 const isRepeatedPattern = (str) =>{
        const result = str.match(/(...)\1/);
        return result !==null;
    };
```
```javascript
    if(isRepeatedPattern(emailValue)){
        alert('아이디에 3글자 이상 반복된 패턴이 있습니다.');
        return false;
    } 
    if(isRepeatedPattern(passwordValue)){
        alert('비밀번호에 3글자 이상 반복된 패턴이 있습니다.');
        return false;
    }
```
-> ...은 임의 3글자를 그룹으로 잡고, \1은 앞의 그룹이 한 번 더 반복되는 지 확인한다. 
즉, /(...)\1/은 정확히 3글자로 된 동일한 문자열이 반복해서 나오는지 확인하는 것이다.

-> str.match(...)는 매칭되는 배열, 아니면 null을 반환한다.

```javascript
if(emailValue !== "parkmin@p" || passwordValue !== "A!sdfghzxcv2"){
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        login_failed();
        return false;
    }
```
-> 로그인 폼에 아이디와 비밀번호를 이대로 입력해야 로그인 할 수 있다.
   
## 10주차 쿠키와 세션

### 10주차 퀴즈
- 로그인/ 로그아웃 횟수 쿠키 저장하기
  
```javascript
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
```
-> 기존에 있던 get함수를 재활용하였으며 이 함수는 name이라는 인자를 받아서 해당 이름의 쿠키값을 반환한다. if(cookie_name[0].trim() === name) 이 조건문을 
통해 쿠키 배열에서 원하는 쿠키이름과 일치하는 항목을 찾아낸다. 그 값을 decodeURIComponent()을 통해 디코딩한 후 반환한다.

```javascript
function login_count(){
    let loginCount = parseInt(getCookie("login_cnt"))||0;
    loginCount += 1;
    setCookie("login_cnt", loginCount, 7);
}
```
-> getCookie("login_cnt")는 "login_cnt"라는 이름의 쿠키값을 읽어오고 값이 없으면 null을 반환한다. 그리고 parseInt()은 가져온 문자열을 정수로 변환하고
그 결과를 변수 loginCount에 저장한다.

-> 변수에 += 1을 하여 로그인 횟수를 1 증가시킨다. 그리고 setCookie("login_cnt", loginCount, 7)을 하여 "login_cnt" 쿠키이름으로 값을 저장하고 7일동안 유지된다.

```javascript
function logout_count() {
    let logoutCount = parseInt(getCookie("logout_cnt"))||0;
    logoutCount += 1;
    setCookie("logout_cnt", logoutCount, 7);    
}
```
-> getCookie("logout_cnt")는 "logout_cnt"라는 이름의 쿠키값을 읽어오고 값이 없으면 null을 반환한다. 그리고 parseInt()은 가져온 문자열을 정수로 변환하고
그 결과를 변수 logoutCount에 저장한다.

-> 변수에 += 1을 하여 로그아웃 횟수를 1 증가시킨다. 그리고 setCookie("logout_cnt", logoutCount, 7)을 하여 "logout_cnt" 쿠키이름으로 값을 저장하고 7일동안 유지된다.

```javascript
document.addEventListener("DOMContentLoaded", () => {
    // 로그인 버튼 처리
    const loginBtn = document.getElementById("login_btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            login_count();
            check_input();
        }); 
    }

    // 로그아웃 버튼 처리
    const logoutBtn = document.getElementById("logout_btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            logout_count(); 
            session_del();
        });
    } else {
        console.log("로그아웃 버튼이 없습니다.");
    }
});
```

-> HTML 문서의 모든 DOM 요소가 로드된 후 실행되는 이벤트 리스너이며 식별자가 login_btn인 로그인 버튼 요소를 가져오고 로그인 버튼이 존재할 경우에 클릭 이벤트를 추가한다.
로그인 횟수를 카운팅하는 쿠키 함수인 login_count()와 로그인 입력값을 확인 및 처리하는 함수인 check_input()이 실행된다.

-> 식별자가 logout_btn인 로그아웃 버튼 요소를 가져오고 로그아웃 버튼이 존재할 경우에 클릭 이벤트를 추가한다. 로그아웃 횟수를 카운팅하는 쿠키 함수인 logout_count()와 
세션 스토리지에 저장된 로그인 데이터를 삭제하는 함수인 session_del()이 실행된다.

- 로그인 실패 횟수가 x번인 경우 로그인 제한
  
```javascript
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
```

-> fail_cnt라는 이름의 쿠키 값을 가져와 parseInt를 이용해 정수로 변환한다. 값이 없으면 0으로 처리하고 여기에 +1을 더해서 현재 실패 횟수를 계산한다. 이를 cnt라는 변수에 저장한다.

-> 실패횟수를 fail_cnt라는 쿠키 이름으로 cnt 값을 저장하고 이는 1일 동안 유지된다.

-> 실패횟수가 3번 이상이라면 현재 시각인 Date.now()에 4분을 더한 값을 lock_time이라는 쿠키 이름에 저장한다. 그리고 이 쿠키를 통해 4분동안 로그인 제한이 가능하며 "3회 이상 실패, 4분간 로그인 제한"이라는 알림창이 나온다./ 3회 미만일 경우에 로그인 실패횟수만 경고창처럼 알림창이 나온다.

-> login_status라는 요소에 현재 실패횟수를 실시간으로 화면에 표시한다.

```javascript
function is_login_locked() {
    return Date.now() < (parseInt(getCookie("lock_time")) || 0);
}
```
-> 이 함수를 통해 로그인이 제한 상태인지 여부를 판단할 수 있다.

-> lock_time이라는 쿠키이름의 값을 가져오고 값이 없으면 null을 반환한다.

-> 현재 시각이 lock_time보다 이전이라면 로그인을 제한하고 있는 중이라는 뜻이다.

```javascript
if (is_login_locked()) {
      const remainingSec = Math.ceil((getCookie("lock_time") - Date.now()) / 1000);
      alert(`로그인 제한 중입니다. (${remainingSec}초 남음)`);

      const status = document.getElementById("login_status");
      if (status) status.innerText = `로그인 제한 중 (${remainingSec}초 남음)`;

      return false;
    }
```

-> check_input함수에 들어있는 조건문이다. is_login_locked() 함수가 true를 반환하는 경우는 현재 시간이 쿠키에 저장된 lock_time보다 이전이고 로그인 제한 시간이 아직 남아있을 때라는 것이다.

-> getcookie("lock_time")은 lock_time이라는 쿠키이름의 값을 가져오고 제한이 풀리는 시간(밀리초 기준)을 뜻하며 Date.now()는 현재 시간(밀리초 기준)이다. 나누기 1000을 하여 초 단위로 바꾸고 
Math.ceil()은 소수점을 올려 남은 초를 반올림 없이 표시한다. 이를 remainingSec이라는 변수에 저장한다.

-> 로그인 제한 중이라는 메시지와 남은 시간을 알림창으로 보여준다.

-> login_status라는 식별자를 가진 요소가 존재할 경우, 그 요소의 텍스트는 로그인 제한 중 (남은 초 표시)으로 만든다./ return false;는 이후 로그인 처리를 중단시켜서 제한 중일 경우에는 실제 로그인 로직이 실행되지 않도록 막는 기능을 한다.

## 11주차(암호화와 보안토큰)

### 11주차 퀴즈
- 세션 암호화 관련 문제
  * Web CryptoJS API 활용, AES-256-GCM 대칭 암호 알고리즘 구현
  * 주요기능: 세션에 Session_Storage_pass2로 저장, 로그인 후 복호화도 구현
 
```javascript
// 키 만들기 - 비밀번호를 32바이트로 맞춰서 쓰기
async function getKey(password) {
  const encoder = new TextEncoder();
  const key = encoder.encode(password.padEnd(32)); // 32바이트로 맞춤
  return crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}
```
-> async function getKey(password) 함수는 비밀번호 문자열을 받아 Web Crypto API용 AES-GCM 키로 변환한다. 그리고 async로 정의되어 있으므로 반환값은 Promise 객체이며, 비동기적인 CryptoKey를 생성한다.

-> TextEncoder는 문자열을 UTF-8형식의 바이트 배열로 변환해주고 password.padEnd(32)는 사용자가 입력한 password가 32글자보다 짧으면 공백 문자로 남은 부분을 채워서 32글자까지 늘리는 것이다.
그리고 encoder.encode는 문자열을 Uint8Array(바이트 배열)로 변환한다.

-> return crypto.subtle.importKey()는 Web Crypto API의 importKey함수는 원시 바이트 배열로부터 키를 생성한다. 따라서 이 코드는 AES-GCM 알고리즘에 사용할 수 있는 키 객체를 반환한다.

```javascript
// 암호화
async function encryptText(text) {
  const key = await getKey('key'); // 고정 키 또는 사용자 입력 키 사용 가능
  const iv = crypto.getRandomValues(new Uint8Array(12)); // GCM 추천 IV 12바이트

  const encoded = new TextEncoder().encode(text);
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);

  // IV,암호문 결합
  const combined = new Uint8Array(iv.length + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), iv.length);

  // Base64 문자열로 반환
  return btoa(String.fromCharCode(...combined));
}
```
-> async function encryptText(text) 함수는 문자열 text를 AES-GCM 방식으로 암호화하는 비동기 함수이다. 반환값은 암호화된 결과를 Base64 인코딩한 문자열이다.

-> 고정 문자열을 사용하여 Web Crypto API에서 사용할 AES-GCM 암호화 키를 생성하고 getKey()는 32바이트로 패딩한 문자열을 바이트 배열로 변환하고 CryptoKey 객체를 생성한다. IV(초기화 벡터)를 랜덤하게 생성하고 
암호화할 문자열을 UTF-8 형식의 바이트 배열로 변환한다.

-> Web Crypto API를 이용해 AES-GCM 알고리즘으로 암호화하고 결과는 ArrayBuffer 형식으로 반환된다.

-> iv와 암호문을 하나의 배열로 합치기 위해 그 크기만큼의 공간을 만들고 앞부분에 IV를 삽입하며 IV 뒤에 암호화된 바이트 배열을 이어붙인다.

-> 마지막으로 Uint8Array로 변환하고 문자열로 변환한 다음 Base64 인코딩 처리를 한다. 

```javascript
// 복호화
async function decryptText(base64) {
  if (!base64) {
    console.warn("복호화할 데이터가 없습니다.");
    return null;
  }

  const combined = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const data = combined.slice(12);

  const key = await getKey('key');

  try {
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
    return new TextDecoder().decode(decrypted);
  } catch (e) {
    console.error("복호화 실패:", e);
    return null;
  }


}
```
-> Base64 문자열이 비어있거나 null인 경우 경고 메시지를 출력하고 복호화를 중단한다. Base64 문자열을 원래 바이너리 문자열로 디코딩하고 이 문자열을 복호화하기 위해 필요한 형태인 Uint8Array로 변환한다.

-> combined의 앞 12바이트는 IV로 사용된다.(encryptText()에서 앞에 붙여놨기 때문에)

-> getKey()를 통해 고정키로부터 AES-GCM용 CryptoKey 객체를 비동기적으로 생성한다.

-> crypto.subtle.decrypt()를 사용하여 AES-GCM 방식으로 복호화를 시도한다. 성공하면 결과는 ArrayBuffer이고 TextDecoder()를 사용해 UTF-8문자열로 바꾼다. 

```javascript
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
```
-> 비동기 함수로, login2.js에 있는 함수이며 로그인 후 페이지에서 세션 스토리지의 암호화된 데이터를 복호화하기 위한 초기화 함수이다.

```javascript
export async function session_set() { //세션 저장
    // let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    let session_pass2 = document.querySelector("#typePasswordX");
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
    const obj = { // 객체 선언
    id : id.value,
    otp : random
    }
// 다음 페이지 계속 작성하기
    if (sessionStorage) {
        let en_text = encrypt_text(session_pass.value);
        let en_text2 = await encryptText(session_pass2.value);
      console.log("암호화 결과(Session_Storage_pass2):", en_text2); 
      sessionStorage.setItem("Session_Storage_id", id.value);
      sessionStorage.setItem("Session_Storage_pass", en_text);
      sessionStorage.setItem("Session_Storage_pass2", en_text2);
    } else {
       alert("로컬 스토리지 지원 x");
    }
}
```
-> session_pass2라는 변수로 입력된 비밀번호 요소를 참조하고 브라우저가 세션 스토리지를 지원하는지 확인한 다음에 en_text2라는 변수에 패스워드 값을 비동기적으로 암호화한 값을 저장하고 세션 스토리지에 Session_Storage_pass2라는 이름으로 en_text2라는 값을 저장한다.

login2.js에 있는 check_input이나 init_logined2에 async 키워드를 붙인다.

- JWT 토큰을 삭제하는 함수 구현하기

login2.js에 있는 session_del()함수에 localStorage.removeItem("jwt_token");이 코드를 넣어 세션과 함께 토큰도 삭제되도록 하였다.

## 12주차(모듈화 및 클래스)

### 12주차 퀴즈
- 회원가입 후 객체 내용을 저장하기/로그인 후 복호화된 객체 내용 출력하기

```javascript
export function session_set2(obj) { //세션 저장
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
// 다음 페이지 계속 작성하기
    if (sessionStorage) {
      const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
      console.log("objString:", objString);
      let en_text = encrypt_text(objString); // 암호화
      // sessionStorage.setItem("Session_Storage_join", objString);
      sessionStorage.setItem("Session_Storage_join2", en_text);
      console.log("암호화된 회원정보 저장됨:", en_text);
    } else {
       alert("로컬 스토리지 지원 x");
    }
}
```
-> session.js에 있는 session_set2()함수에 Session_Storage_join2라는 이름으로 en_text 즉, 전달받은 전체 obj 객체를 JSON 문자열로 만든 후 암호화해서 세션스토리지에 저장한다.

```javascript
export function decrypt_join() {
  const k = "key";
  const rk = k.padEnd(32, " ");
  const eb = sessionStorage.getItem("Session_Storage_join2"); 

  if (!eb) {
    console.log("세션에 회원가입 정보가 없습니다.");
    return;
  }

  try {
    const b = decodeByAES256(rk, eb);
    const user = JSON.parse(b); 
    console.log("복호화된 회원가입 정보:", user);
    console.log("이름:", user._name);
    console.log("이메일:", user._email);
    console.log("비밀번호:", user._password);
  } catch (e) {
    console.error("복호화 실패:", e);
  }
}
```
-> session.js파일에 추가한 코드이다. k는 암호화/복호화에 사용할 기본 키 문자열이다. rk는 padEnd(32, " ")를 이용해 "key" 문자열을 길이 32의 문자열로 늘려 AES-256 키 형식에 맞춘다.

-> eb는 Session_Storage_join2라는 키로 세션스토리지에서 암호화된 회원정보를 가져온다./세션 스토리지에 값이 없으면 콘솔에 메시지를 출력한다.

-> decodeByAES256()함수로 rk 키를 이용해 복호화를 시도한다. 복호화된 문자열을 JSON 형식이므로 JSON.parse()로 자바스크립트 객체로 변환한다.

-> user._name, user._email 등 객체 속성을 콘솔에 출력한다.

## 13주차(웹오픈 API)

### 13주차 퀴즈
- 프로필 페이지 접근 제한하기

```HTML5
<script>
        window.addEventListener('DOMContentLoaded', () => {
          const userId = sessionStorage.getItem("Session_Storage_id");
          if (!userId) {
            alert("로그인 후 이용할 수 있습니다.");
            window.location.href = "../index.html";  // 메인 페이지로 이동
          }
        });
      </script>
```
-> HTML 문서의 모든 DOM 요소가 로드된 후 해당 함수를 실행한다./ 세션 스토리지에서 Session_Storage_id라는 키에 저장된 값을 가져오고 userId라는 변수에 저장한다.

-> 세션에 Session_Storage_id라는 이름의 값이 없으면 경고창이 나오고 로그인이 필요한 페이지임을 알려준다.

-> 로그인하지 않은 사용자를 메인페이지로 강제 이동시킨다.

- 좌표로 주소 출력하기

카카오 맵 api 가이드에 있는 원본 소스를 조금씩 수정해서 만든 예전에 만들었던 지도 맵에 맞게 자바스크립트, HTML, CSS에 코드를 넣는다.
