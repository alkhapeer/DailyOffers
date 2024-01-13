// حفظ اختيار المستخدم للمدينة
function saveCity(city) {
  localStorage.setItem("city", city);
}

// استرداد اختيار المستخدم للمدينة
function getCity() {
  return localStorage.getItem("city");
}

// تحميل العروض اليومية
function loadOffers() {
  // احصل على المدينة المحددة
  let city = getCity();

  // اطلب البيانات من الخادم
  $.ajax({
    url: "api/offers",
    data: {
      city: city,
    },
    success: function(data) {
      // قم بتحديث القائمة بالعروض
      let offers = document.querySelector(".offers ul");
      offers.innerHTML = "";
      for (let offer of data) {
        let li = document.createElement("li");
        li.innerHTML = offer.title + " - " + offer.description;
        offers.appendChild(li);
      }
    },
  });
}

// عند تحميل الصفحة
$(document).ready(function() {
  // تحميل العروض اليومية
  loadOffers();
});
