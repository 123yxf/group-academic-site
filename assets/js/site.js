(function () {
  var root = document.documentElement;
  var langButton = document.getElementById("langButton");
  var navToggle = document.getElementById("navToggle");
  var navPanel = document.getElementById("navPanel");

  function setLang(lang) {
    root.classList.remove("lang-zh", "lang-en");
    root.classList.add("lang-" + lang);
    try {
      window.localStorage.setItem("siteLang", lang);
    } catch (error) {
      return;
    }
  }

  try {
    setLang(window.localStorage.getItem("siteLang") || "zh");
  } catch (error) {
    setLang("zh");
  }

  if (langButton) {
    langButton.addEventListener("click", function () {
      var nextLang = root.classList.contains("lang-zh") ? "en" : "zh";
      setLang(nextLang);
    });
  }

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var isOpen = navPanel.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navPanel.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
