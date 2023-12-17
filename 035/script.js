//URL 내 파라미터 및 쿼리스트링 값을 배열로 찾아오기!!
//정규표현식 사용
//window.location.search 메서드로 주소값 가져오기
//? 또는 &을 경계로 배열을 갈라주기
const parameters = window.location.search.split(/\?|&/).filter((value) => {
  return value.includes("=");
});
console.log(parameters);
//(3) ['id=cho', 'name=cdg', 'age=20']

const hashes = {};

parameters.forEach((parameter) => {
  const parameterList = parameter.split("=");
  const key = parameterList[0];
  const value = decodeURIComponent(parameterList[1]);
  hashes[key] = value;
});
console.log(hashes);
//{id: 'cho', name: 'cdg', age: '20'}

if (hashes["id"] != null) {
  document.querySelector(".id").innerText = hashes["id"];
}
if (hashes["name"] != null) {
  document.querySelector(".name").innerText = hashes["name"];
}
if (hashes["age"] != null) {
  document.querySelector(".age").innerText = hashes["age"];
}
