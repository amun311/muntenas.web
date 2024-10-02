document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
});
