// Information to reach API
const apiKey = 'a5a23d67d5be41ff9f1719472c7c480e';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    renderResponse(jsonResponse)//The renderResponse() helper function can be viewed at public/helperFunctions.js.
  });
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);//Put in any URL in the text field, and then click the shorten button on the webpage. Make sure you include the entire link, including 'http://' or 'https://'.
