// ## 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
        item.price -= coupon.discount;
    });
}

const userACart = {
    items: [
        { name: '키보드', price: 30000 },
        { name: '마우스', price: 20000 },
    ],
};

let copyObjectDeep = function (target) {
    let result = [];
    for (let prop in target) {
        if (typeof target[prop] === 'object' && target !== null) {
            result[prop] = copyObjectDeep(target[prop]);
        } else {
            result[prop] = target[prop];
        }
    }
    return result;
};

const userBCart = copyObjectDeep(userACart);
console.log(userACart);
console.log(userBCart);
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log(userACart);
console.log(userBCart);
// 1. userACart.items와 userBCart.item 모두 5000원씩 줄어들었다.
// 2. 서로 같은 주소의 키 값을 참조하고 있기 때문
// 3. const userBCart = {
//     items: [
//         { name: '키보드', price: 30000 },
//         { name: '마우스', price: 20000 },
//     ],
// };

