delete window.fetch

import fetch from 'unfetch'

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))