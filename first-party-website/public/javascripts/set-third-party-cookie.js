console.log('sending third party cookie');
const URL = 'https://20.84.83.100/sendThirdPartyCookie';

fetch(URL, {
  method: 'POST',
  mode: 'cors',
  sameSite: 'none',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then(response => response.json())
  .then(jsonResponse => {

    const content = {
      message: jsonResponse['message'],
      ipAddress: jsonResponse['ipAddress'],
      trackingID: jsonResponse['trackingID']

    }
    const cookieValue = JSON.stringify(content);
    // console.log(content)
    document.cookie = `thirdPartyCookie=${cookieValue}; path=/; domain=172.20.53.134; secure; sameSite=None`;
    console.log('cookie set on first party website')
  })
  .catch(error => console.error(error));  

