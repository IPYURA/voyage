const number = parseInt(prompt("자연수를 입력하세요!"));
let isPrime;

if (number == 1) {
  document.write(`${number}은 소수도 합성수도 아닙니다.`);
}
if (number == 2) {
  document.write(`${number}는 소수입니다.`);
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }

  //isPrime값이 true일 때 실행.
  if (isPrime) {
    document.write(`${number}는 소수입니다.`);
  } else {
    document.write(`${number}는 소수가 아닙니다.`);
  }
}
