import { encrypt_text, decrypt_text, decodeByAES256 } from './js_crypto.js';

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
    //   const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
      // let en_text = encrypt_text(session_pass.value);
    //   let en_text = await encrypt_text(objString); // 암호화
      let en_text2 = await encryptText(session_pass2.value);
      console.log("암호화 결과(Session_Storage_pass2):", en_text2); 
      sessionStorage.setItem("Session_Storage_id", id.value);
    //   sessionStorage.setItem("Session_Storage_object", objString);
      sessionStorage.setItem("Session_Storage_pass", en_text);
      sessionStorage.setItem("Session_Storage_pass2", en_text2);
      // sessionStorage.setItem("Session_Storage_id", session_id.value);
      // sessionStorage.setItem("Session_Storage_object", objString);
      // sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
       alert("로컬 스토리지 지원 x");
    }
}

export function session_set2(obj) { //세션 저장
    // let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    // let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
// 다음 페이지 계속 작성하기
    if (sessionStorage) {
      const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
      console.log("objString:", objString);
      // let en_text = encrypt_text(session_pass.value);
      let en_text = encrypt_text(objString); // 암호화
      // sessionStorage.setItem("Session_Storage_join", objString);
      sessionStorage.setItem("Session_Storage_join2", en_text);
      console.log("암호화된 회원정보 저장됨:", en_text);
      // sessionStorage.setItem("Session_Storage_id", session_id.value);
      // sessionStorage.setItem("Session_Storage_object", objString);
      // sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
       alert("로컬 스토리지 지원 x");
    }
}

export function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass");
    } else {
        alert("세션 스토리지 지원 x");
    }
}



export function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
      alert("이미 로그인 되었습니다.");
      location.href='../login/index_login.html'; // 로그인된 페이지로 이동
    }
}

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



    
        