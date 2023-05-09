console.log('sending third party cookie');
const apiUrl = 'https://20.84.83.100/sendThirdPartyCookie';

fetch(apiUrl, {
  method: 'POST',
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
