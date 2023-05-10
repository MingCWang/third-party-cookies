
function getCookie() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('third-party-cookie')) {
        const img = document.createElement('img');
        img.src = 'https://localhost:4000/sendThirdPartyCookie';
        img.alt = 'My Image';
        img.id = 'ad';
        document.body.appendChild(img);
        console.log(cookie)
        return true
      }
    }
    return null
}
document.addEventListener("DOMContentLoaded", function(event) {
    // Your code here
    getCookie();
});


