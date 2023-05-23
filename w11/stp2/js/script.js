let aCard = document.querySelector(".card");
// querySelector 는 class 기능이 쓰이는 얘들 (".특정그룹") 인데 그 중 선착순 한명임
console.log(aCard);
// 개발자 도구에 잘 찍혀있는지
aCard.onclick = (e) => {
  console.log("target", e.target);
  // 손우성의 일부 타겟
  console.log("currentTarget", e.currentTarget);
  // 손우성이 타겟
  e.currentTarget.classList.toggle(
    "card-selected"
  );
};

// let elem = document.getElementById("card1");
// let elem 특정 이름
// // css에서의 변수 var-- / scss 에서의 변수 $ / JS 에서의 변수 let 기억하기
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
// or (똑같음) : 코딩은 멋이다
// elem.onclick = function () {};
// elem.onclick = function (넣어줄 값_변수) {넣어준 값 어떻게-?};
