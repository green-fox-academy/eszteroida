const form = document.querySelector('form');
const username = document.querySelector('#username');
const url = document.querySelector('#url');
const alias = document.querySelector('#alias');

form.addEventListener('submit', e => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        alert('sent!!');
      } else {
        console.log('Something went wrong');
      }
    }
  };
  xhr.open('POST', '/api/links');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ url: url.value, alias: alias.value }));
  form.reset();
});