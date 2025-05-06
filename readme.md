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


## 5주차 수업 검색창 확장 및 팝업창
- [5주차 코드.pdf](https://github.com/user-attachments/files/19559759/5.pdf)
### 5주차 (검색어 공백/비속어 검사)

js파일 추가, js 파일에 조금 코드 추가?
## 6주차 퀴즈 및 9주차 입력필터링과 데이터 저장 (8주차 퀴즈 -> 6주차 퀴즈로 수정)
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
   

