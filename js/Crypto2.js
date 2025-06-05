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