// document.addEventListener("DOMContentLoaded", () => {
//   const pagination = document.querySelector(".pagination");
//   const items = pagination.querySelectorAll(".page-item");
//   const prevButton = pagination.querySelector("[aria-label='Previous']");
//   const nextButton = pagination.querySelector("[aria-label='Next']");
//   let currentIndex = 0;

//   // تابع برای به‌روزرسانی انتخاب
//   function updateActiveItem(newIndex) {
//     items[currentIndex + 1].classList.remove("active"); // حذف کلاس active از آیتم قبلی
//     currentIndex = newIndex;
//     items[currentIndex + 1].classList.add("active"); // افزودن کلاس active به آیتم جدید
//   }

//   // مدیریت کلیک دکمه قبلی
//   prevButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (currentIndex > 0) {
//       updateActiveItem(currentIndex - 1);
//     }
//   });

//   // مدیریت کلیک دکمه بعدی
//   nextButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (currentIndex < items.length - 3) {
//       // به‌جز دکمه قبلی و بعدی
//       updateActiveItem(currentIndex + 1);
//     }
//   });

//   // افزودن رویداد کلیک به هر آیتم
//   items.forEach((item, index) => {
//     if (index !== 0 && index !== items.length - 1) {
//       // به‌جز دکمه قبلی و بعدی
//       item.addEventListener("click", () => {
//         updateActiveItem(index - 1);
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.querySelector(".pagination");
  const leftButton = document.querySelector(".left-btn");
  const rightButton = document.querySelector(".right-btn");
  const wrapperWidth = document.querySelector(
    ".pagination-wrapper"
  ).offsetWidth;
  let currentOffset = 0;
  const step = 100; // مقدار حرکت در هر کلیک (پیکسل)
  const maxOffset = 0;
  const minOffset = -(pagination.scrollWidth - wrapperWidth);

  function updateButtons() {
    leftButton.disabled = currentOffset >= maxOffset;
    rightButton.disabled = currentOffset <= minOffset;
  }

  leftButton.addEventListener("click", () => {
    if (currentOffset < maxOffset) {
      currentOffset += step;
      pagination.style.transform = `translateX(${currentOffset}px)`;
    }
    updateButtons();
  });

  rightButton.addEventListener("click", () => {
    if (currentOffset > minOffset) {
      currentOffset -= step;
      pagination.style.transform = `translateX(${currentOffset}px)`;
    }
    updateButtons();
  });

  // تنظیم دکمه‌ها در بارگذاری اولیه
  updateButtons();
});

const param = new URLSearchParams(window.location.search);
const traveldate = param.get("23-01-2023");
document.write(traveldate);
