// const Crypto2 = (() => {
//   const ivLength = 12; // GCM에 적합한 IV 길이
//   const encoder = new TextEncoder();
//   const decoder = new TextDecoder();
 
//   // 키로 쓸 바이너리 값 생성 (32바이트)
//    async function getKey(password) {
//     const keyBytes = encoder.encode(password.padEnd(32, ' ')); // 길이 맞춤
//     return crypto.subtle.importKey(
//       'raw',
//       keyBytes,
//       { name: 'AES-GCM' },
//       false,
//       ['encrypt', 'decrypt']
//     );
//   }

//     // 암호화
//   async function encryptText(password, plainText) {
//     const iv = crypto.getRandomValues(new Uint8Array(ivLength)); // 무작위 IV
//     const key = await getKey(password);
//     const encrypted = await crypto.subtle.encrypt(
//       { name: 'AES-GCM', iv: iv },
//       key,
//       encoder.encode(plainText)
//     );

//      // 암호문과 IV를 하나로 합침
//     const combined = new Uint8Array(iv.length + encrypted.byteLength);
//     combined.set(iv, 0);
//     combined.set(new Uint8Array(encrypted), iv.length);

//     // Base64로 변환해서 반환
//     return btoa(String.fromCharCode(...combined));
//   }

//    // 복호화
//    async function decryptText(password, base64Data) {
//     const combined = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
//     const iv = combined.slice(0, ivLength); // 앞쪽은 IV
//     const data = combined.slice(ivLength);  // 뒤쪽은 암호문

//     const key = await getKey(password);
//     const decrypted = await crypto.subtle.decrypt(
//       { name: 'AES-GCM', iv: iv },
//       key,
//       data
//     );
//     return decoder.decode(decrypted);
//   }

//   return {
//     encryptText,
//     decryptText
//   };
// })();