// 타입스크립트로 HTML 변경과 조작하기
let title = document.querySelector('#title');

// 첫번째 방법
if (title !== null) {
  title.innerHTML = '반가워요';
}

// 두번째 방법
if (title instanceof Element) {
  title.innerHTML = '반가워요';
}

// 세번째 방법 - 사기치기 강제 하기
let title2 = document.querySelector('#title') as Element;
title2.innerHTML = '방가방가';

// 네번째 - 간지 갠지
if (title?.innerHTML) {
  title.innerHTML = '반가워요';
}

// 다섯번째 - 무식하게하기
// tsconfig.json 에서 strictNullChecks 이거 false 또는 제거 하셈

// 링크 바꿔보기
let link = document.querySelector('.link');

// 더 정확한 타입을 지정해줘야 함 (HTMLAnchorElement)
if (link instanceof HTMLAnchorElement) {
  link.href = 'https://kakao.com';
}

// 버튼 바꿔보기
let button = document.querySelector('#button');
if (button instanceof HTMLButtonElement) {
  button.innerHTML = '클릭해쓰음';
}

// 이벤트 리스너에 써보기
button?.addEventListener('click', function () {
  console.log('클릭하셈');
});
