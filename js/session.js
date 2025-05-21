import { encrypt_text, decrypt_text } from './js_crypto.js';

export function session_set() { //세션 저장
    // let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    // let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
    const obj = { // 객체 선언
    id : id.value,
    otp : random
    }
// 다음 페이지 계속 작성하기
    if (sessionStorage) {
      const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
      // let en_text = encrypt_text(session_pass.value);
      let en_text = encrypt_text(objString); // 암호화
      sessionStorage.setItem("Session_Storage_id", id.value);
      sessionStorage.setItem("Session_Storage_object", objString);
      sessionStorage.setItem("Session_Storage_pass", en_text);
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
      // let en_text = encrypt_text(session_pass.value);
      let en_text = encrypt_text(objString); // 암호화
      sessionStorage.setItem("Session_Storage_join", objString);

      // sessionStorage.setItem("Session_Storage_id", session_id.value);
      // sessionStorage.setItem("Session_Storage_object", objString);
      // sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
       alert("로컬 스토리지 지원 x");
    }
}

// async function session_set2() {
//   const email = document.querySelector("#typeEmailX").value;
//   const password = document.querySelector("#typePasswordX").value;

//   if (sessionStorage) {
//     const encrypted = await Crypto2.encryptText("secret-key", password); // 예: 고정된 비밀 키
//     sessionStorage.setItem("Session_Storage_id", email);
//     sessionStorage.setItem("Session_Storage_pass2", encrypted);
//     console.log("암호화 후 저장:", encrypted);
//   } else {
//     alert("세션 스토리지 미지원");
//   }
// }

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


// async function decrypt_text2() {
//   const encrypted = sessionStorage.getItem("Session_Storage_pass2");
//   if (encrypted) {
//     try {
//       const decrypted = await Crypto2.decryptText("secret-key", encrypted);
//       console.log("복호화된 비밀번호:", decrypted);
//       document.getElementById("decrypted_password").innerText = "비밀번호: " + decrypted;
//     } catch (e) {
//       console.error("복호화 실패:", e);
//     }
//   } else {
//     console.warn("세션에 암호화된 비밀번호가 없습니다.");
//   }
// }

    
        