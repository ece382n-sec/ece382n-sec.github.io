(function () {
  var fa25Links = {
    "/": "/fa25/",
    "/index.html": "/fa25/",
    "/schedule": "/fa25/schedule",
    "/schedule.html": "/fa25/schedule",
    "/project": "/fa25/project",
    "/project.html": "/fa25/project"
  };

  document.querySelectorAll(".aux-nav a[href]").forEach(function (link) {
    var url;

    try {
      url = new URL(link.getAttribute("href"), window.location.origin);
    } catch (error) {
      return;
    }

    if (url.origin !== window.location.origin) {
      return;
    }

    var path = url.pathname.replace(/\/$/, "") || "/";
    if (fa25Links[path]) {
      link.setAttribute("href", fa25Links[path]);
    }
  });

  var navList = document.querySelector(".aux-nav-list");
  if (!navList) {
    return;
  }

  var currentYearItem = document.createElement("li");
  currentYearItem.className = "aux-nav-list-item";

  var currentYearLink = document.createElement("a");
  currentYearLink.href = "/";
  currentYearLink.className = "site-button";
  currentYearLink.textContent = "Back to Current Year";

  currentYearItem.appendChild(currentYearLink);
  navList.appendChild(currentYearItem);
})();
