// 헤더 스크롤 시 경계선 표시
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// 모바일 메뉴 토글
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// 스크롤 시 현재 섹션 nav 하이라이트
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");
const setActiveNav = () => {
  let current = sections[0]?.id;
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};
window.addEventListener("scroll", setActiveNav);
setActiveNav();

// 필터 탭 공통 함수 (Project / Certification)
function initFilter(filterSelector, itemSelector, attr) {
  const buttons = document.querySelectorAll(filterSelector);
  const items = document.querySelectorAll(itemSelector);
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const value = btn.dataset.filter;
      items.forEach((item) => {
        const match = value === "all" || item.dataset[attr] === value;
        item.hidden = !match;
      });
    });
  });
}
initFilter(".project-filter", ".project-item", "cat");
initFilter(".cert-filter", ".cert-item", "cat");
