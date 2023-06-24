import "../sass/main.scss";
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("../images/", true, /\.(png|jpe?g|gif|svg)$/));

const mailList = document.querySelectorAll(".js-list-item");

//=============== ACTIVE-MAIL =================//

function activeMail(item) {
  mailList.forEach((item) => {
    item.classList.remove("active");
  });
  item.classList.add("active");
  item.classList.remove("unread");
}

mailList.forEach((item) => {
  item.addEventListener("click", function () {
    activeMail(item);
  });
});

//==================== DROPDOWN ======================//

const filterMenu = document.querySelector(".js-filter-btn");
const dropdown = document.querySelector(".js-dropdown");

filterMenu.addEventListener("click", function () {
  dropdown.classList.toggle("hide");
});

document.addEventListener("click", function (e) {
  const element = e.target.closest(".js-filter-btn");
  if (element?.classList.contains("js-filter-btn")) return;
  dropdown.classList.add("hide");
});

//==================== MORE-OPTIONS ======================//

const moreNav = document.querySelector(".js-more-nav");
const moreBtn = document.querySelector(".js-more");
const moreTextToggle = moreBtn.querySelector(".js-more-text");

moreBtn.addEventListener("click", function () {
  moreNav.classList.toggle("hide");
  moreNav.classList.contains("hide")
    ? (moreTextToggle.textContent = "More..")
    : (moreTextToggle.textContent = "Less...");
});
