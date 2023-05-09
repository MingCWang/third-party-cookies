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
  .then(response => {
    if (response.ok) {
      console.log('cookie sent from third party website');
      const jsonResponse = response.json()

      return jsonResponse
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(jsonResponse => {
    // const content = JSON.stringify(jsonResponse, null, 2);
    // console.log(content)
    document.cookie = "thirdPartyCookie="+jsonResponse+"; path=/; domain=172.20.53.134; secure; sameSite=None";
    console.log('cookie set on first party website')
  })
  .catch(error => console.error(error));  

