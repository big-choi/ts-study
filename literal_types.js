// 변수에 뭐가 들어올지 엄격하게 관리가능
// 자동완성 힌트
var 접니다;
function 함수(a) {
    return 1;
}
함수('hello');
function 가위바위보(a) {
    return ['가위', '보'];
}
가위바위보('가위');
var 자료 = {
    name: 'kim',
};
자료.name; // kim
function 내함수(a) {
    // kim 이라는 타입만 들어올 수 있다.
}
내함수('kim');
// 내함수(자료.name); // 타입이 아니라 값이 kim이라 에러발생.
// 해결방법
// 1. assertion 문법
// 2. object 자료에 as const
