# HTML 프로젝트 - 깃허브
새로운 시작! 웹 서비스 개발의 세계로 떠나보아요~
## Getting Started
This project is a starting point for a Web application.
- [프로젝트 메인 주소](https://github.com/본인아이디/WEB_MAIN)
## 2주차 수업 메인화면 개발 완료! (문제 포함)
[2주차 코드 작성.pdf](https://github.com/user-attachments/files/19970615/2.pdf)
## 3주차 수업 부트스트랩 적용 완료! (문제 제외)
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


## 4주차 수업 자바스크립트 적용 완료! (문제 제외)
[4주차 코드 작성.pdf](https://github.com/user-attachments/files/19970844/4.pdf)
- [5주차 코드.pdf](https://github.com/user-attachments/files/19559759/5.pdf)
- 10시 기준 5주차 코드에는 네비게이션 바 색상 변경, 표 셀 색상 변경, 하이퍼링크 추가
js파일 추가, js 파일에 조금 코드 추가?
## 8주차 퀴즈 및 9주차 입력필터링과 데이터 저장
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
   

