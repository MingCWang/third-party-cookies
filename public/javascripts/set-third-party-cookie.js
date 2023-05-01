console.log('sending third party cookie');
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://localhost:4000/sendThirdPartyCookie';

fetch(corsProxyUrl + apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    if (response.ok) {
      console.log('cookie received ');
      console.log(response)
    } else {
      throw new Error('Something went wrong');
    }
  })
  .catch(error => console.error(error));
