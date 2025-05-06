// 4주차 식별자 수정
document.getElementById("search_button_msg").addEventListener('click', search_message);
function search_message(){
    let message = "검색을 수행합니다!";
    alert(message);
}

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
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
    }