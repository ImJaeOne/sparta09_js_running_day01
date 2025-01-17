// ## 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

// 1. let uninitialized;
console.log(uninitialized); // 결과값 undefined
// 값 할당이 안됨


// 2. const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// 값 재할당 불가능


// 3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 19
// 배열은 index 0부터 시작


// 4.
let mySchedule = "";
console.log(mySchedule || false); // false => 맨 앞이 false면 뒷 값으로 출력
console.log(!!mySchedule); // false => !!는 boolean으로 변환 