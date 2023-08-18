var 함수타입2 = function () {
    return 1;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    },
};
회원정보.plusOne(3);
회원정보.changeName();
var cutZero = function (a) {
    var num = a;
    return num.replace(/(^0+)/, '');
};
console.log(cutZero('0000121250'));
var removeDash = function (a) {
    var num = a;
    return parseInt(num.replace(/-/g, ''), 10);
};
console.log(removeDash('010-1111-2222'));
