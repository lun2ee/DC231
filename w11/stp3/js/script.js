let aCard = document.querySelector(".card");
// querySelector 는 class 기능이 쓰이는 얘들 (".특정그룹") 인데 그 중 선착순 한명임
console.log(aCard);
let cards = document.querySelectorAll(".card");
// 윗줄을 풀어보았다
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
for (let idx = 0; idx < cards.length; idx++) {
  cards[idx].onclick = (e) => {
    e.currentTarget.classList.toggle(
      "card-selected"
    );
  };
}
// 근데 코딩은 간지인데 for 구문은 간지나지 않음 다른방법은 뭐가 있을까-?
// -> forEach 구문
// cards.forEach(function () {});
cards.forEach((eachCard) => {
  eachCard.onclick = function (e) {
    e.currentTarget.classList.toggle(
      "card-selected"
    );
  };
});
// 여러개를 다룰거면 for 구문이나 forEach 구문을 사용하는것
