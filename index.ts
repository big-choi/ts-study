let 제목 = document.querySelector('#title');
// let 제목 = document.querySelector('#title') as Element;

// if (제목 != null) {
//   제목.innerHTML = '반가워요';
// }

// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = '반가워요';
// }

if (제목 instanceof Element) {
  제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');

if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function () {
  // 버튼에 addEventListener 가능하면 하고
  // 아니면 undefined 리턴.
});

let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
  이미지.src = 'change.jpg';
}

let 네이버 = document.querySelectorAll('.naver');
네이버.forEach((element) => {
  if (element instanceof HTMLAnchorElement) {
    element.href = 'https://kakao.com';
  }
});
