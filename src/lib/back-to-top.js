export default function BackToTop(value) {
  const result = document.querySelector(value);
  if (result) {
    document.addEventListener("scroll", () => {
      if (
        window.scrollY > 200
      ) {
        result.classList.add('back-to-top-btn-show')
      } else {
        result.classList.remove('back-to-top-btn-show')
      }
    });
    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
