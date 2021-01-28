let name1, name2;
function btnClick() {
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;

    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    // 한글인지 체크
    if (!korean.test(name1) || !korean.test(name2)) {
        alert("한글만 입력할 수 있습니다.");
        return;
    }
    if (name1.length != 3 || name2.length != 3) {
        alert("한글 이름은 3 글자만 허용됩니다. :(");
        return;
    }

    calculate();
}

function calculate() {
    let numArr = new Array();
    let pos = 0;
    let max = name1.length > name2.length ? name1.length : name2.length;
    for (let i = 0; i < max; i++) {
        for (let j = 1; j <= 2; j++) {
            numArr[pos++] = getInitSound(j, i) + getMiddleSound(j, i) + getFinalSound(j, i)
        }
    }
    for (let i = 0; i < pos - 2; i++) {
        for (let j = 0; j < pos - i - 1; j++) {
            numArr[j] = (numArr[j] + numArr[j + 1]) % 10;
        }
    }
    const result = numArr[0] * 10 + numArr[1];
    alert(name1 + "님과 " + name2 + "님의 이름 궁합은~!\n" + result + "% 입니다!");
}

// 초성
//          ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
const cho = [2, 4, 2, 3, 6, 5, 4, 4, 8, 2, 4, 1, 3, 6, 4, 3, 4, 4, 3];
function getInitSound(tmp, i) {
    if (tmp === 1) {
        return cho[Math.floor(((name1.charCodeAt(i) - 44032) /28) / 21)];
    } else if (tmp === 2) {
        return cho[Math.floor(((name2.charCodeAt(i) - 44032) /28) / 21)];
    }
}
// 중성
//          ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const mid = [2, 3, 3, 4, 2, 3, 3, 4, 2, 4, 5, 3, 3, 2, 4, 5, 3, 3, 1, 2, 1];
function getMiddleSound(tmp, i) {
    if (tmp === 1) {
        return mid[Math.floor(((name1.charCodeAt(i) - 44032) / 28) % 21)];
    } else if (tmp === 2) {
        return mid[Math.floor(((name2.charCodeAt(i) - 44032) / 28) % 21)];
    }
}
// 종성
//            ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const final = [0, 2, 4, 4, 2, 5, 5, 3, 5, 0, 0, 0, 0, 0, 0, 0, 4, 4, 6, 2, 4, 1, 3, 4, 3, 4, 4, 3];
function getFinalSound(tmp, i) {
    if (tmp === 1) {
        return final[(name1.charCodeAt(i) - 44032) % 28];
    } else if (tmp === 2) {
        return final[(name2.charCodeAt(i) - 44032) % 28];
    }
}


/*
// 초성
function iSound(a, i)
{
	var r = ((a.charCodeAt(i) - parseInt('0xac00',16)) /28) / 21;
	var t = String.fromCharCode(r + parseInt('0x1100',16));
	return t;
}
// 중성
function mSound(a, i)
{
	var r = ((a.charCodeAt(i)- parseInt('0xac00',16)) / 28) % 21;
	var t = String.fromCharCode(r + parseInt('0x1161',16));
	return t;
}
// 종성
function tSound(a, i)
{
	var r = (a.charCodeAt(i) - parseInt('0xac00',16)) % 28;
	var t = String.fromCharCode(r + parseInt('0x11A8') -1);
	return t;
}*/