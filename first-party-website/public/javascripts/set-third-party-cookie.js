console.log('sending third party cookie');
const URL = 'https://localhost:4000/sendThirdPartyCookie';

fetch(URL, {
  method: 'GET',
  mode: 'cors',
  sameSite: 'none',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then(response => {
    console.log(response)
  })
  // .then(response => response.json())
  // .then(jsonResponse => {
    // console.log(jsonResponse)
    // const content = {
    //   message: jsonResponse['message'],
    //   ipAddress: jsonResponse['ipAddress'],
    //   trackingID: jsonResponse['trackingID']
    // }
    // const cookieValue = JSON.stringify(content);
    // console.log(content)
    // document.cookie = `thirdPartyCookie=${cookieValue}; path=/; domain=172.20.53.134; secure; sameSite=None`;
    // console.log('cookie set on first party website')
  // })
  .catch(error => console.error(error));  


// const xhr = new XMLHttpRequest();
// xhr.open('POST', URL, true);
// xhr.withCredentials = true;
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // Do something with the response
//     console.log(xhr.responseText);
//   }
// };
// xhr.send();