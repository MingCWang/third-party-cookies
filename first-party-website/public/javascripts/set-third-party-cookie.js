console.log('sending third party cookie');
const URL = 'https://20.84.83.100/sendThirdPartyCookie';

fetch(apiUrl, {
  method: 'POST',
  mode: 'cors',
  sameSite: 'none',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then(response => {
    if (response.ok) {
      console.log('cookie sent from third party website');
      console.log(response)
    } else {
      throw new Error('Something went wrong');
    }
  })
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
