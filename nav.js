(function () {
  if (window.location.pathname.replace(/\/$/, "").indexOf("/fa25") === 0) {
    return;
  }

  var navList = document.querySelector(".aux-nav-list");
  var header = document.querySelector(".main-header");
  if (!navList || document.querySelector(".past-offerings-menu")) {
    return;
  }

  var item = document.createElement("li");
  item.className = "aux-nav-list-item nav-menu past-offerings-menu";

  var button = document.createElement("button");
  button.type = "button";
  button.className = "site-button nav-menu-toggle";
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "Past offerings";

  var menu = document.createElement("ul");
  menu.className = "nav-menu-list";
  menu.hidden = true;

  var fall2025Item = document.createElement("li");
  var fall2025Link = document.createElement("a");
  fall2025Link.href = "/fa25/";
  fall2025Link.textContent = "Fall 2025";
  fall2025Item.appendChild(fall2025Link);
  menu.appendChild(fall2025Item);

  var closeTimer;

  function clearCloseTimer() {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = undefined;
    }
  }

  function setOpen(isOpen) {
    if (isOpen) {
      clearCloseTimer();
    }
    item.classList.toggle("is-open", isOpen);
    if (header) {
      header.classList.toggle("has-open-nav-menu", isOpen);
    }
    button.setAttribute("aria-expanded", String(isOpen));
    menu.hidden = !isOpen;
  }

  function closeSoon() {
    clearCloseTimer();
    closeTimer = window.setTimeout(function () {
      setOpen(false);
    }, 180);
  }

  button.addEventListener("click", function () {
    setOpen(!item.classList.contains("is-open"));
  });

  item.addEventListener("mouseenter", function () {
    setOpen(true);
  });

  item.addEventListener("mouseleave", closeSoon);

  item.addEventListener("focusin", function () {
    setOpen(true);
  });

  item.addEventListener("focusout", function (event) {
    if (!item.contains(event.relatedTarget)) {
      closeSoon();
    }
  });

  document.addEventListener("click", function (event) {
    if (!item.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
      button.focus();
    }
  });

  item.appendChild(button);
  item.appendChild(menu);
  navList.appendChild(item);
})();
