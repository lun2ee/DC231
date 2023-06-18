let observerOption = {
  root: null,
  //   -> body를 살펴보고 있는 것과 똑같다.
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.75,
  //   -> 기본값임 순서는 상관없음
};
// function scrollFunction() {}
let observerCallback = (
  observingTargets,
  observer
) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// observer.observe(여러개의 값을 가진 친구);
// observer.observe(HTML 요소-하나);
// 하드코딩
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// observer.observe(elems[3]);

// 조금 똑똑한 코딩
// for (let idx = 0; idx < elems.length; idx++) {
//   // observer.observe(elems[idx]);

// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
