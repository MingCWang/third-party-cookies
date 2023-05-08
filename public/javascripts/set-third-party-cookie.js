console.log('sending third party cookie');
const apiUrl = 'http://localhost:4000/sendThirdPartyCookie';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
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
