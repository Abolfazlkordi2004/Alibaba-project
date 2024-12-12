function validateForm() {
  let isValid = true;

  const origin = document.getElementById("input1").value.trim();
  const destination = document.getElementById("input2").value.trim();
  const date = document.getElementById("input3").value.trim();
  const user = document.getElementById("input4").value.trim();

  const firstError = document.getElementById("firstError");
  const secondError = document.getElementById("secondError");
  const thirdError = document.getElementById("thirdError");
  const forthError = document.getElementById("forthError");

  if (origin == "") {
    firstError.textContent = "مبدا نمیتواند خالی باشد";
    firstError.style.display = "block";
    isValid = false;
  } else {
    firstError.style.display = "none";
  }

  if (destination == "") {
    secondError.textContent = "مقصد نمیتواند خالی باشد";
    secondError.style.display = "block";
    isValid = false;
  } else {
    secondError.style.display = "none";
  }

  if (date == "") {
    thirdError.textContent = "تاریخ نمیتواند خالی باشد";
    thirdError.style.display = "block";
    isValid = false;
  } else {
    thirdError.style.display = "none";
  }

  if (user == "") {
    forthError.textContent = "تعداد مسافران نمیتواند خالی باشد";
    forthError.style.display = "block";
    isValid = false;
  } else {
    forthError.style.display = "none";
  }

  if (isValid) {
    window.location.href = "../html/main_page.html";
  }
}
