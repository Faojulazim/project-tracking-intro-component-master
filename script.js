const hamburgerBtn = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close");
const hiddenDiv = document.querySelector("#hiddenDiv");

document.body.addEventListener("click", (e) => {
  const isClosest = e.target.closest("#close, #hamburger, #hiddenDiv");
  if (!isClosest) {
    hiddenDiv.classList.add("hidden");
    closeBtn.classList.add("hidden");
    hamburgerBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-y-hidden");
  }
});

hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  hiddenDiv.classList.remove("hidden");
  hamburgerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  document.body.classList.add("overflow-y-hidden");
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  hiddenDiv.classList.add("hidden");
  closeBtn.classList.add("hidden");
  hamburgerBtn.classList.remove("hidden");
  document.body.classList.remove("overflow-y-hidden");
});
