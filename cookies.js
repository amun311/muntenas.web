function checkCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
  }
  
  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
  }
  
  function rejectCookies() {
    localStorage.setItem('cookieConsent', 'false');
    document.getElementById('cookie-banner').style.display = 'none';
  }
  
  window.onload = checkCookieConsent;
  