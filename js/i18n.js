// Bilingual copy (PRD §9 Localization). Toggle stored in localStorage.
const TRANSLATIONS = {
  en: {
    "nav.home": "Home",
    "nav.cars": "Cars",
    "nav.rent": "Rent / Contact",

    "hero.title": "Rent for a Better Tomorrow",
    "hero.subtitle": "Zhuoyue Mobility offers EV and new-energy vehicles for family travel and business trips.",
    "hero.browseCars": "Browse Cars",
    "hero.learnMore": "Learn More",

    "intro.text": "Zhuoyue Mobility is a car rental company focused on EV and new-energy vehicles, including Li Auto, Xiaomi, ZEEKR, and ONVO models. We help customers find a comfortable, modern vehicle for family travel and business trips.",

    "featured.title": "Featured Vehicles",

    "why.title": "Why Choose Zhuoyue Mobility?",
    "why.eco.title": "Eco-Friendly",
    "why.eco.desc": "An all EV and new-energy fleet for a cleaner ride.",
    "why.family.title": "Family Travel",
    "why.family.desc": "Spacious, comfortable vehicles for the whole family.",
    "why.business.title": "Business Travel",
    "why.business.desc": "Reliable vehicles for business trips.",

    "cars.pageTitle": "Our Vehicles",
    "cars.rentBtn": "Rent",
    "cars.seats": "seats",
    "cars.rangeUnit": "km range",
    "cars.perDay": "/ day",

    "availability.available": "Available",
    "availability.booked": "Booked",
    "availability.maintenance": "Maintenance",

    "type.suv": "SUV",
    "type.sedan": "Sedan",

    "rent.pageTitle": "Rent a Vehicle",
    "rent.fillOut": "Fill out the form below and we'll contact you to confirm.",
    "rent.selectVehicle": "Select Vehicle",
    "rent.selectVehiclePlaceholder": "-- Select a vehicle --",
    "rent.phone": "Phone Number",
    "rent.idNumber": "ID Number",
    "rent.license": "Driver's License Number",
    "rent.pickupLocation": "Pickup Location",
    "rent.dropoffLocation": "Drop-off Location",
    "rent.pickupDate": "Pickup Date & Time",
    "rent.dropoffDate": "Return Date & Time",
    "rent.consent": "I agree my information will be used to process this rental request.",
    "rent.submit": "Submit",
    "rent.note": "After you submit, Zhuoyue Mobility will contact you by phone and confirm your rental via WeChat.",
    "rent.success": "Thank you! Your rental request has been sent. We will contact you shortly.",
    "rent.error": "Something went wrong. Please check the form and try again.",

    "footer.phone": "Phone",
    "footer.wechat": "WeChat",
    "footer.address": "Address"
  },
  zh: {
    "nav.home": "首页",
    "nav.cars": "车辆",
    "nav.rent": "租车/联系",

    "hero.title": "为更好的明天而租",
    "hero.subtitle": "卓越出行提供电动及新能源车辆，满足家庭出行与商务出差需求。",
    "hero.browseCars": "浏览车辆",
    "hero.learnMore": "了解更多",

    "intro.text": "卓越出行是一家专注于电动及新能源车辆租赁的公司，车型包括理想、小米、极氪和乐道等品牌。我们致力于为客户提供舒适、现代的车辆，满足家庭出行与商务出差的需求。",

    "featured.title": "推荐车辆",

    "why.title": "为什么选择卓越出行？",
    "why.eco.title": "绿色环保",
    "why.eco.desc": "全系电动及新能源车型，出行更环保。",
    "why.family.title": "家庭出行",
    "why.family.desc": "宽敞舒适的车型，适合全家出行。",
    "why.business.title": "商务出差",
    "why.business.desc": "可靠车辆，满足商务出差需求。",

    "cars.pageTitle": "我们的车辆",
    "cars.rentBtn": "立即租车",
    "cars.seats": "座",
    "cars.rangeUnit": "公里续航",
    "cars.perDay": "/ 天",

    "availability.available": "可租",
    "availability.booked": "已预订",
    "availability.maintenance": "维护中",

    "type.suv": "SUV",
    "type.sedan": "轿车",

    "rent.pageTitle": "租车申请",
    "rent.fillOut": "请填写以下表单，我们会联系您确认。",
    "rent.selectVehicle": "选择车辆",
    "rent.selectVehiclePlaceholder": "-- 请选择车辆 --",
    "rent.phone": "手机号码",
    "rent.idNumber": "身份证号",
    "rent.license": "驾驶证号",
    "rent.pickupLocation": "取车地点",
    "rent.dropoffLocation": "还车地点",
    "rent.pickupDate": "取车日期与时间",
    "rent.dropoffDate": "还车日期与时间",
    "rent.consent": "我同意我的信息将用于处理此次租车申请。",
    "rent.submit": "提交",
    "rent.note": "提交后，卓越出行将通过电话联系您，并使用微信确认租车信息。",
    "rent.success": "感谢您的申请！我们已收到您的租车请求，将尽快与您联系。",
    "rent.error": "提交时出现问题，请检查表单后重试。",

    "footer.phone": "电话",
    "footer.wechat": "微信",
    "footer.address": "地址"
  }
};

const I18N_STORAGE_KEY = "zhuoyue-lang";

function getCurrentLang() {
  return localStorage.getItem(I18N_STORAGE_KEY) || "zh";
}

function setCurrentLang(lang) {
  localStorage.setItem(I18N_STORAGE_KEY, lang);
}

function t(key) {
  const lang = getCurrentLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
}

function applyTranslations() {
  const lang = getCurrentLang();
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

  const toggleBtn = document.querySelector(".lang-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "zh" ? "EN" : "中文";
  }
}

function initLangToggle() {
  const toggleBtn = document.querySelector(".lang-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const nextLang = getCurrentLang() === "zh" ? "en" : "zh";
    setCurrentLang(nextLang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent("langchange"));
  });
}
