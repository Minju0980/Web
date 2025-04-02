# HTML 프로젝트 - 깃허브
새로운 시작! 웹 서비스 개발의 세계로 떠나보아요~
## Getting Started
This project is a starting point for a Web application.
- [프로젝트 메인 주소](https://github.com/본인아이디/WEB_MAIN)
## 2주차 수업 메인화면 개발 완료! (문제 포함)
## 3주차 수업 부트스트랩 적용 완료! (문제 제외)
<!DOCTYPE html>
<!--이 부분은 주석문입니다.-->
<html lang = "ko"></html>
<html>
    <head>
        <meta charset = "UTF - 8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>안녕하세요 게임 사이트입니다.</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <meta name = "author" content = "학번">
        <meta name = "keywords" content = "computer">
        <base href = "http://127.0.0.1.:5500">
    </head>
    <body style = "background-color: white;">
        <div style = "display: flex; justify-content: center;">
            <img src = "logo_steam.svg" width = "200" height = "60">
            <!-- <h3 style = "font-size: 20px; font-weight: bold; font-style: italic; color: white;"><a href = "https://store.steampowered.com/" target = "_blank">게임정보</a>   기본정보   챔피언   새소식  다운로드  (메뉴작성)</h3> -->
            <nav class="navbar" style="background-color: #e3f2fd;">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">네비게이션바</a> 
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">홈페이지</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">링크</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          드랍다운
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">웹사이트</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                          <li><a class = "dropdown-item" href = "https://store.steampowered.com/">스팀</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
              </nav>
        </div> 
        <hr>
        <div class = "container-fluid" style = "display: flex; justify-content: center;">
        <a href = "index.html" target = "_blank"><img src= "Steam main12.jpg"  class="img-fluid" width = "1280" height = "720"></a>
        </div>
        <div style = "display: flex; justify-content: center;">
            <table class = "table caption-top" border ="1">
                <caption>인기 캐릭터</caption>
                <tbody class = "table-group-divider">
                    <tr bgcolor = "red">
                        <!-- <td width = "80" rowspan = "2">사이온</td> -->
                         <td class="table-primary">사이온</td>
                         <td class="table-primary">아리</td><td class="table-primary">아리</td>
                        <!-- <td>아리</td>
                        <td>가렌</td>
                        <td>가렌2</td>
                        <td>가렌3</td> -->
                    </tr>

                    <!-- <tr bgcolor = "grey"> -->
                   <tr>
                    <td class="table-secondary">카직스</td>
                    <td class="table-secondary">루시안</td>
                      <td class="table-secondary">바이</td>
                   </tr>>
                    <!-- <tr>
                        <td bgcolor = "yellow"><b>카직스</b></td>
                        <td>루시안</td>
                        <td>루시안2</td>
                        <td colspan = "2"><font size = "13">바이1, 2</font></td>
                    </tr> -->
                </tbody class = "table-group-divider">
                <style>
                    table{
                        font-size: 20pt;
                        color: black;
                    }
                </style>
            </table>
        </div>
        <hr>
        <div style = "display: flex; justify-content: center;">
            <h3 style= "font-size: 20px; font-weight: bold; font-style: italic; color: white; font-family: '굴림';"> Steam 배포  지원  기프트 카드 </h3>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>
