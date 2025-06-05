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
   
## 10주차 쿠키와 세션

### 10주차 퀴즈

## 11주차(암호화와 보안토큰)

### 11주차 퀴즈즈

## 12주차(모듈화 및 클래스)

## 13주차(웹오픈 API)
