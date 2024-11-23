function handleSubmit() {
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lasName");
  let date = document.querySelector("#date");
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(date.value);
}

let btn = document.querySelector("#submit-btn");
btn.addEventListener("click", handleSubmit);

function addRow() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let date = document.getElementById("date").value.trim();

  // date format
  let datePattern = /^\d{8}$/;
  if (!datePattern.test(date)) {
    alert("تاریخ باید شامل اعداد باشد.");
    return;
  }

  // تبدیل اعداد فارسی به انگلیسی
  date = date.replace(/[۰-۹]/g, function (digit) {
    return String.fromCharCode(digit.charCodeAt(0) - 1728);
  });

  // بررسی طول رشته و تبدیل فرمت
  if (date.length === 8) {
    // اگر طول 8 کاراکتر 
    let year = date.slice(0, 4); // چهار رقم اول
    let month = date.slice(4, 6); // دو رقم بعدی
    let day = date.slice(6, 8); // دو رقم پایانی
    date = `${year}-${month}-${day}`;
  } else {
    alert("فرمت ورودی صحیح نیست. لطفاً عددی با 8 رقم وارد کنید.");
    return;
  }

  // add info to table
  let table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow();

  newRow.innerHTML = `
        <td>${lastName}</td>
        <td>${firstName}</td>
        <td>${date}</td>
        <td>--</td>
    `;

  // reset
  document.getElementById("lastName").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("date").value = "";
}
