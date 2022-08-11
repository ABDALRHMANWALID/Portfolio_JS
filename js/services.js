// Start Services
let milestonesScroll = document.querySelector(".milestones");
let spansmilestones = document.querySelectorAll(".milestones .number span");
// window.onscroll = () => {
//   if (this.pageYOffset >= milestonesScroll.offsetTop) {
//     spansmilestones.forEach((nnn) => {
//       startCount(nnn);
//     });
//   }
// };

// function startCount(el) {
//   let goal = el.getAttribute("goal");
//   let count = setInterval(() => {
//     if (Number(el.textContent) == goal) {
//       clearInterval(count);
//     } else {
//       el.textContent++;
//     }
//   }, 2000 / goal);
// }
// End Services
window.addEventListener("scroll", function () {
  this.setTimeout(function () {
    if (this.pageYOffset >= milestonesScroll.offsetTop) {
      spansmilestones.forEach(function (e) {
        sersCount(e);
      });
    }
  }, 1000);
});
function sersCount(en) {
  let serGoal = en.getAttribute("goal");
  let serCount = setInterval(function () {
    if (Number(en.textContent) == serGoal) {
      clearInterval(serCount);
    } else {
      en.textContent++;
    }
  }, 2000 / serGoal);
}
// End Services
