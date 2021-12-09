const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [100, 33, 5]

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
    el.style.width = `${progressBarPercents[i]}%`;
    });
  }
}

mainFn()

window.addEventListener('resize', () => {
  window.location.reload();
})









