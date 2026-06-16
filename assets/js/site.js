(function () {
  var root = document.documentElement;
  var langButton = document.getElementById("langButton");
  var navToggle = document.getElementById("navToggle");
  var navPanel = document.getElementById("navPanel");
  var researchGrid = document.getElementById("researchGrid");
  var previewIndex = document.getElementById("previewIndex");
  var previewTitle = document.getElementById("previewTitle");
  var previewText = document.getElementById("previewText");
  var activeResearchCard = null;
  var activeResearchIndex = 0;

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
      if (activeResearchCard) {
        updateResearchPreview(activeResearchCard, activeResearchIndex);
      }
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

  document.addEventListener("pointermove", function (event) {
    root.style.setProperty("--cursor-x", event.clientX + "px");
    root.style.setProperty("--cursor-y", event.clientY + "px");
    document.body.classList.add("pointer-active");
  }, { passive: true });

  document.addEventListener("pointerleave", function () {
    document.body.classList.remove("pointer-active");
  });

  function textForLang(element, lang) {
    var match = element.querySelector("." + lang);
    return match ? match.textContent : element.textContent;
  }

  function updateResearchPreview(card, index) {
    if (!previewIndex || !previewTitle || !previewText) return;

    activeResearchCard = card;
    activeResearchIndex = index;
    researchGrid.querySelectorAll(".feature-card").forEach(function (item) {
      item.classList.toggle("is-active", item === card);
    });

    var lang = root.classList.contains("lang-en") ? "en" : "zh";
    var title = card.querySelector("h3");
    previewIndex.textContent = String(index + 1).padStart(2, "0");
    previewTitle.textContent = title ? textForLang(title, lang) : "";
    previewText.textContent = card.getAttribute("data-preview-" + lang) || "";
  }

  if (researchGrid) {
    researchGrid.querySelectorAll(".feature-card").forEach(function (card, index) {
      if (card.classList.contains("is-active")) {
        activeResearchCard = card;
        activeResearchIndex = index;
      }
      card.addEventListener("mouseenter", function () {
        updateResearchPreview(card, index);
      });
      card.addEventListener("focus", function () {
        updateResearchPreview(card, index);
      });
    });
  }
})();
