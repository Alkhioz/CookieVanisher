document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("cookieCleanerButton").addEventListener("click", function() {

    const domains = [
      ""
    ];
    domains.forEach((idpDomain)=>{
      chrome.cookies.getAll({domain: idpDomain}, function(cookies) {
        for (let i = 0; i < cookies.length; i++) {
          let url = "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain + cookies[i].path;
          chrome.cookies.remove({"url": url, "name": cookies[i].name});
        }
      });
    });
  });
});