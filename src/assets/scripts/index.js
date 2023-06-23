import "../sass/main.scss";
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("../images/", true, /\.(png|jpe?g|gif|svg)$/));

const mailList = document.querySelectorAll(".list-item");

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

const filterMenu = document.querySelector(".filter-menu");
const dropdown = document.querySelector(".dropdown");

filterMenu.addEventListener("click", function () {
  dropdown.classList.toggle("hide");
});

document.addEventListener("click", function (e) {
  const element = e.target.closest(".filter-menu");
  if (element?.classList.contains("filter-menu")) return;
  dropdown.classList.add("hide");
});

//==================== MORE-OPTIONS ======================//

const moreNav = document.querySelector(".more-nav");
const moreBtn = document.querySelector(".js-more");
const moreTextToggle = moreBtn.querySelector(".more-text");

moreBtn.addEventListener("click", function () {
  moreNav.classList.toggle("hide");
  moreNav.classList.contains("hide")
    ? (moreTextToggle.textContent = "More..")
    : (moreTextToggle.textContent = "Less...");
});
